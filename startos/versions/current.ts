import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.48.8:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.48.8, a maintenance release: expressions that hit the memory limit now stop with an error, failures to activate MCP workflow triggers are reported, and the Migration Report explains each workflow’s last run state, stays usable on narrow screens, and is available to custom instance roles.

[Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.8)`,
    es_ES: `n8n actualizado a 2.48.8, una versión de mantenimiento: las expresiones que alcanzan el límite de memoria ahora se detienen con un error, se informan los fallos al activar disparadores de flujos de trabajo MCP, y el Informe de migración explica el estado de la última ejecución de cada flujo de trabajo, sigue siendo usable en pantallas estrechas y está disponible para roles de instancia personalizados.

[Notas completas de la versión](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.8)`,
    de_DE: `n8n auf 2.48.8 aktualisiert, eine Wartungsversion: Ausdrücke, die das Speicherlimit erreichen, brechen jetzt mit einem Fehler ab, Fehler beim Aktivieren von MCP-Workflow-Triggern werden gemeldet, und der Migrationsbericht erklärt den Status der letzten Ausführung jedes Workflows, bleibt auf schmalen Bildschirmen bedienbar und steht benutzerdefinierten Instanzrollen zur Verfügung.

[Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.8)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.48.8, wydania konserwacyjnego: wyrażenia, które osiągają limit pamięci, kończą się teraz błędem, błędy aktywacji wyzwalaczy przepływów pracy MCP są zgłaszane, a Raport migracji wyjaśnia stan ostatniego uruchomienia każdego przepływu pracy, pozostaje użyteczny na wąskich ekranach i jest dostępny dla niestandardowych ról instancji.

[Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.8)`,
    fr_FR: `n8n mis à jour vers 2.48.8, une version de maintenance : les expressions qui atteignent la limite de mémoire s’arrêtent désormais avec une erreur, les échecs d’activation des déclencheurs de workflows MCP sont signalés, et le rapport de migration explique l’état de la dernière exécution de chaque workflow, reste utilisable sur les écrans étroits et est accessible aux rôles d’instance personnalisés.

[Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.8)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
