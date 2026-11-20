import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.48.7:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.48.7, a maintenance release: under memory pressure, n8n no longer keeps stopping executions every 30 seconds when stopping them frees no memory, and expressions that read a Code node's error output in production webhook executions return the error instead of null.

[Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.7)`,
    es_ES: `n8n actualizado a 2.48.7, una versión de mantenimiento: bajo presión de memoria, n8n ya no sigue deteniendo ejecuciones cada 30 segundos cuando detenerlas no libera memoria, y las expresiones que leen la salida de error de un nodo Code en ejecuciones de webhook de producción devuelven el error en lugar de null.

[Notas completas de la versión](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.7)`,
    de_DE: `n8n auf 2.48.7 aktualisiert, eine Wartungsversion: Bei Speicherknappheit stoppt n8n nicht mehr alle 30 Sekunden Ausführungen, wenn das Stoppen keinen Speicher freigibt, und Ausdrücke, die die Fehlerausgabe eines Code-Knotens in Produktions-Webhook-Ausführungen lesen, liefern den Fehler statt null.

[Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.7)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.48.7, wydania konserwacyjnego: przy presji pamięci n8n nie zatrzymuje już wykonań co 30 sekund, gdy ich zatrzymanie nie zwalnia pamięci, a wyrażenia odczytujące wyjście błędu węzła Code w produkcyjnych wykonaniach webhooków zwracają błąd zamiast null.

[Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.7)`,
    fr_FR: `n8n mis à jour vers 2.48.7, une version de maintenance : sous pression mémoire, n8n n’arrête plus des exécutions toutes les 30 secondes lorsque leur arrêt ne libère aucune mémoire, et les expressions qui lisent la sortie d’erreur d’un nœud Code dans les exécutions de webhook en production renvoient l’erreur au lieu de null.

[Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.7)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
