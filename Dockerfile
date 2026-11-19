ARG IMAGE

# Node.js's November 2026 security release (26.13.1); upstream's image still runs 26.13.0.
FROM node:26.13.1-alpine3.24@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS node

# Runtime replacements must retain n8n's V8 fixes as well as Node's security fixes.
ADD --checksum=sha256:a7f6204ff63b6a2cd274d48903285abb86ed53a99070e532d4c2fd787457d9e6 https://nodejs.org/dist/v26.13.1/node-v26.13.1.tar.xz /tmp/node.tar.xz
ADD --checksum=sha256:9c90ba41ccd800cad430874c8da06c9af857165f4feab9e3997e11c968584164 https://raw.githubusercontent.com/n8n-io/n8n/6484e2d8092f46c7ce7a4fbd97847ba3cb539e72/docker/images/node-pc/patches/0001-v8-normalize-one-byte-ast-strings.patch /tmp/v8.patch
ADD --checksum=sha256:e94d7563bd450083a3e5063df4e94a29046b24bcedb8e4c4bcb4798823f25955 https://raw.githubusercontent.com/n8n-io/n8n/6484e2d8092f46c7ce7a4fbd97847ba3cb539e72/docker/images/node-pc/check-v8-patches.js /tmp/check-v8-patches.js
RUN apk add --no-cache binutils-gold g++ gcc linux-headers make patch python3 py-setuptools rust cargo \
 && mkdir /tmp/node-src \
 && tar -xJf /tmp/node.tar.xz -C /tmp/node-src --strip-components=1 \
 && cd /tmp/node-src \
 && patch -p1 -d deps/v8 < /tmp/v8.patch \
 && sed -i "s/^\([[:space:]]*'v8_embedder_string': '-node\.[0-9]*\)'/\1-n8n.1'/" common.gypi \
 && ./configure \
 && make -j"$(getconf _NPROCESSORS_ONLN)" \
 && strip out/Release/node \
 && cp out/Release/node /usr/local/bin/node \
 && ENABLE_POINTER_COMPRESSION=false node /tmp/check-v8-patches.js

# The runtime image has no package manager, so a fixed bundle comes from Alpine.
FROM alpine:3.24 AS ca
RUN apk add --no-cache ca-certificates \
 && if [ -f /etc/ssl/certs/ca-certificates.crt.apk-new ]; then mv /etc/ssl/certs/ca-certificates.crt.apk-new /etc/ssl/certs/ca-certificates.crt; fi \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt

FROM ${IMAGE}
USER root
# Its hashed per-root links still name the distrusted roots, so the directory holds only the bundle.
RUN find /etc/ssl/certs -mindepth 1 -delete
COPY --from=ca /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=node /usr/local/bin/node /usr/bin/node
# The official build links libatomic, which the runtime image lacks.
COPY --from=node /usr/lib/libatomic.so.1 /usr/lib/libatomic.so.1
COPY --from=node /tmp/check-v8-patches.js /tmp/check-v8-patches.js
RUN [ "$(node --version)" = v26.13.1 ] \
 && ENABLE_POINTER_COMPRESSION=false node /tmp/check-v8-patches.js \
 && rm /tmp/check-v8-patches.js
USER node
ENV NODE_OPTIONS=--use-openssl-ca
