import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.49.5:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.49.5.

**Features**

- Agents can be archived and restored, and can be reached through a new API channel
- Assistant skills can be uploaded as a folder or a SKILL.md file and edited in the Assistant
- Bearer Auth credentials, a Secret resource in the GitHub node, and generic OAuth2 credentials in the MCP Client Tool node
- Your account links moved into an account menu at the bottom of the sidebar
- The editor loads faster

**Fixes**

- The AI Agent node keeps its tool-call history correctly across tool-calling rounds and input items
- Pruning workflow history no longer blocks other database writes

[Full release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.0)`,
    es_ES: `n8n actualizado a 2.49.5.

**Novedades**

- Los agentes se pueden archivar y restaurar, y se puede acceder a ellos a través de un nuevo canal de API
- Las habilidades del Asistente se pueden subir como carpeta o como archivo SKILL.md y editar en el Asistente
- Credenciales Bearer Auth, un recurso Secret en el nodo GitHub y credenciales OAuth2 genéricas en el nodo MCP Client Tool
- Los enlaces de tu cuenta se trasladaron a un menú de cuenta en la parte inferior de la barra lateral
- El editor carga más rápido

**Correcciones**

- El nodo AI Agent conserva correctamente su historial de llamadas a herramientas entre rondas de llamadas y elementos de entrada
- La depuración del historial de flujos de trabajo ya no bloquea otras escrituras en la base de datos

[Notas completas de la versión](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.0)`,
    de_DE: `n8n auf 2.49.5 aktualisiert.

**Neuerungen**

- Agenten lassen sich archivieren und wiederherstellen und sind über einen neuen API-Kanal erreichbar
- Assistant-Skills lassen sich als Ordner oder SKILL.md-Datei hochladen und im Assistant bearbeiten
- Bearer-Auth-Anmeldedaten, eine Secret-Ressource im GitHub-Knoten und generische OAuth2-Anmeldedaten im MCP-Client-Tool-Knoten
- Die Links zu deinem Konto befinden sich jetzt in einem Kontomenü unten in der Seitenleiste
- Der Editor lädt schneller

**Fehlerbehebungen**

- Der AI-Agent-Knoten behält seinen Verlauf der Tool-Aufrufe über Aufrufrunden und Eingabeelemente hinweg korrekt bei
- Das Bereinigen des Workflow-Verlaufs blockiert keine anderen Datenbank-Schreibvorgänge mehr

[Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.0)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.49.5.

**Nowości**

- Agentów można archiwizować i przywracać, a także łączyć się z nimi przez nowy kanał API
- Umiejętności Asystenta można przesłać jako folder lub plik SKILL.md i edytować w Asystencie
- Poświadczenia Bearer Auth, zasób Secret w węźle GitHub oraz ogólne poświadczenia OAuth2 w węźle MCP Client Tool
- Linki do Twojego konta przeniesiono do menu konta na dole paska bocznego
- Edytor ładuje się szybciej

**Poprawki**

- Węzeł AI Agent poprawnie zachowuje historię wywołań narzędzi między rundami wywołań i elementami wejściowymi
- Czyszczenie historii przepływów pracy nie blokuje już innych zapisów do bazy danych

[Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.0)`,
    fr_FR: `n8n mis à jour vers 2.49.5.

**Nouveautés**

- Les agents peuvent être archivés et restaurés, et sont joignables via un nouveau canal API
- Les compétences de l’Assistant peuvent être importées sous forme de dossier ou de fichier SKILL.md et modifiées dans l’Assistant
- Identifiants Bearer Auth, ressource Secret dans le nœud GitHub et identifiants OAuth2 génériques dans le nœud MCP Client Tool
- Les liens de votre compte sont désormais regroupés dans un menu de compte en bas de la barre latérale
- L’éditeur se charge plus rapidement

**Corrections**

- Le nœud AI Agent conserve correctement son historique d’appels d’outils entre les tours d’appels et les éléments d’entrée
- La purge de l’historique des workflows ne bloque plus les autres écritures dans la base de données

[Notes de version complètes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.49.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
