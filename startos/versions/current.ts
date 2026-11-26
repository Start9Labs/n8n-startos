import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.49.7:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.49.7. Expressions use less memory when combining large arrays of workflow data and keep wrapped primitive values intact, and the MCP server's execution details respect the execution data size limit. [Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.7)`,
    es_ES: `n8n actualizado a 2.49.7. Las expresiones usan menos memoria al combinar grandes arreglos de datos del flujo de trabajo y conservan intactos los valores primitivos envueltos, y los detalles de ejecución del servidor MCP respetan el límite de tamaño de los datos de ejecución. [Notas completas de la versión](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.7)`,
    de_DE: `n8n auf 2.49.7 aktualisiert. Ausdrücke benötigen beim Zusammenführen großer Arrays von Workflow-Daten weniger Speicher und erhalten umhüllte primitive Werte, und die Ausführungsdetails des MCP-Servers halten das Größenlimit für Ausführungsdaten ein. [Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.7)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.49.7. Wyrażenia zużywają mniej pamięci przy łączeniu dużych tablic danych przepływu pracy i zachowują opakowane wartości prymitywne, a szczegóły wykonań serwera MCP przestrzegają limitu rozmiaru danych wykonania. [Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.7)`,
    fr_FR: `n8n mis à jour vers 2.49.7. Les expressions consomment moins de mémoire lors de la concaténation de grands tableaux de données de workflow et préservent les valeurs primitives encapsulées, et les détails d’exécution du serveur MCP respectent la limite de taille des données d’exécution. [Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.7)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
