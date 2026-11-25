import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.49.6:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.49.6. The base64, urlEncode and format expression helpers return the same results as before the new expression engine, and evaluate faster. [Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.6)`,
    es_ES: `n8n actualizado a 2.49.6. Las funciones de expresión base64, urlEncode y format devuelven los mismos resultados que antes del nuevo motor de expresiones y se evalúan más rápido. [Notas completas de la versión](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.6)`,
    de_DE: `n8n auf 2.49.6 aktualisiert. Die Ausdrucksfunktionen base64, urlEncode und format liefern wieder dieselben Ergebnisse wie vor der neuen Ausdrucks-Engine und werden schneller ausgewertet. [Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.6)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.49.6. Funkcje wyrażeń base64, urlEncode i format zwracają te same wyniki co przed nowym silnikiem wyrażeń i są obliczane szybciej. [Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.6)`,
    fr_FR: `n8n mis à jour vers 2.49.6. Les fonctions d’expression base64, urlEncode et format renvoient les mêmes résultats qu’avant le nouveau moteur d’expressions et s’évaluent plus rapidement. [Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.6)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
