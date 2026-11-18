import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.48.5:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.48.5. Fixes the AI Agent node mixing tool-call history between input items and inserting stray line breaks into streamed replies, lets instance owners and admins use team project credentials, and fixes the Microsoft Teams Trigger dropping notifications from batched requests. [Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.5)`,
    es_ES: `n8n actualizado a 2.48.5. Corrige que el nodo AI Agent mezclara el historial de llamadas a herramientas entre elementos de entrada e insertara saltos de línea sobrantes en las respuestas transmitidas, permite a los propietarios y administradores de la instancia usar las credenciales de proyectos de equipo y corrige que el disparador de Microsoft Teams perdiera notificaciones de solicitudes agrupadas. [Notas de la versión completas](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.5)`,
    de_DE: `n8n auf 2.48.5 aktualisiert. Behebt, dass der AI-Agent-Knoten den Tool-Aufrufverlauf zwischen Eingabeelementen vermischte und überzählige Zeilenumbrüche in gestreamte Antworten einfügte, erlaubt Instanzbesitzern und Administratoren die Nutzung von Zugangsdaten aus Team-Projekten und behebt, dass der Microsoft-Teams-Trigger Benachrichtigungen aus gebündelten Anfragen verlor. [Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.5)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.48.5. Naprawia mieszanie historii wywołań narzędzi między elementami wejściowymi i wstawianie zbędnych podziałów wierszy do strumieniowanych odpowiedzi w węźle AI Agent, pozwala właścicielom i administratorom instancji korzystać z danych uwierzytelniających projektów zespołowych oraz naprawia gubienie powiadomień z żądań zbiorczych przez wyzwalacz Microsoft Teams. [Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.5)`,
    fr_FR: `n8n mis à jour vers 2.48.5. Corrige le nœud AI Agent qui mélangeait l'historique des appels d'outils entre les éléments d'entrée et insérait des sauts de ligne superflus dans les réponses diffusées en continu, permet aux propriétaires et administrateurs de l'instance d'utiliser les identifiants des projets d'équipe, et corrige la perte de notifications des requêtes groupées par le déclencheur Microsoft Teams. [Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.48.5)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
