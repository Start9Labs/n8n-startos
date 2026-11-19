import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.48.6:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.48.6, a maintenance release: clearer "how to fix" steps in the n8n 3 migration report. n8n continues to run on Node.js 26.13.1.

[Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.6)`,
    es_ES: `n8n actualizado a 2.48.6, una versión de mantenimiento: pasos de corrección más claros en el informe de migración a n8n 3. n8n sigue ejecutándose sobre Node.js 26.13.1.

[Notas completas de la versión](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.6)`,
    de_DE: `n8n auf 2.48.6 aktualisiert, eine Wartungsversion: klarere Lösungsschritte im Migrationsbericht für n8n 3. n8n läuft weiterhin auf Node.js 26.13.1.

[Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.6)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.48.6, wydania konserwacyjnego: jaśniejsze kroki naprawcze w raporcie migracji do n8n 3. n8n nadal działa na Node.js 26.13.1.

[Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.6)`,
    fr_FR: `n8n mis à jour vers 2.48.6, une version de maintenance : des étapes de correction plus claires dans le rapport de migration vers n8n 3. n8n continue de fonctionner sur Node.js 26.13.1.

[Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.6)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
