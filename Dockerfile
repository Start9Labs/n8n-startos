ARG IMAGE

# Node.js's November 2026 security release (26.13.1); upstream's image still runs 26.13.0.
FROM node:26.13.1-alpine3.24@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS node

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
RUN [ "$(node --version)" = v26.13.1 ]
USER node
ENV NODE_OPTIONS=--use-openssl-ca
