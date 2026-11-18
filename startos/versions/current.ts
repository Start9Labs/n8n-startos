import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.48.5:1',
  releaseNotes: {
    en_US: `Updates the Node.js runtime n8n runs on to 26.13.1, with the November 2026 Node.js security fixes.`,
    es_ES: `Actualiza el entorno de ejecución Node.js de n8n a 26.13.1, con las correcciones de seguridad de Node.js de noviembre de 2026.`,
    de_DE: `Aktualisiert die Node.js-Laufzeitumgebung von n8n auf 26.13.1 mit den Node.js-Sicherheitskorrekturen vom November 2026.`,
    pl_PL: `Aktualizuje środowisko uruchomieniowe Node.js, na którym działa n8n, do wersji 26.13.1 z poprawkami bezpieczeństwa Node.js z listopada 2026 r.`,
    fr_FR: `Met à jour l'environnement d'exécution Node.js de n8n vers 26.13.1, avec les correctifs de sécurité Node.js de novembre 2026.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
