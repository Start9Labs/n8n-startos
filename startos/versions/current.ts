import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.48.4:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.48.4.

- Schedule Trigger and Cron nodes now run on n8n's durable scheduler by default
- New: Postgres node custom SSL certificates, opt-in confidence scores in the Text Classifier node, and webhook signature verification for the Mailchimp, Workable and Venafi triggers
- New: Monday.com node v2, now the default for new nodes
- Fixes across the editor, AI Agent and n8n Assistant, and the SQLite database

[Full release notes](https://github.com/n8n-io/n8n/releases)`,
    es_ES: `n8n actualizado a 2.48.4.

- Los nodos Schedule Trigger y Cron ahora usan por defecto el programador duradero de n8n
- Nuevo: certificados SSL personalizados en el nodo Postgres, puntuaciones de confianza opcionales en el nodo Text Classifier y verificación de firma de webhooks en los disparadores de Mailchimp, Workable y Venafi
- Nuevo: versión 2 del nodo Monday.com, ahora la predeterminada para nodos nuevos
- Correcciones en el editor, AI Agent y n8n Assistant, y en la base de datos SQLite

[Notas de la versión completas](https://github.com/n8n-io/n8n/releases)`,
    de_DE: `n8n auf 2.48.4 aktualisiert.

- Schedule-Trigger- und Cron-Knoten laufen jetzt standardmäßig über den dauerhaften Scheduler von n8n
- Neu: eigene SSL-Zertifikate im Postgres-Knoten, optionale Konfidenzwerte im Text-Classifier-Knoten und Webhook-Signaturprüfung für die Mailchimp-, Workable- und Venafi-Trigger
- Neu: Monday.com-Knoten Version 2, jetzt Standard für neue Knoten
- Fehlerbehebungen im Editor, in AI Agent und n8n Assistant sowie in der SQLite-Datenbank

[Vollständige Versionshinweise](https://github.com/n8n-io/n8n/releases)`,
    pl_PL: `Zaktualizowano n8n do wersji 2.48.4.

- Węzły Schedule Trigger i Cron domyślnie korzystają teraz z trwałego harmonogramu n8n
- Nowość: własne certyfikaty SSL w węźle Postgres, opcjonalne wyniki pewności w węźle Text Classifier oraz weryfikacja podpisu webhooków w wyzwalaczach Mailchimp, Workable i Venafi
- Nowość: węzeł Monday.com w wersji 2, teraz domyślny dla nowych węzłów
- Poprawki w edytorze, AI Agent i n8n Assistant oraz w bazie danych SQLite

[Pełne informacje o wydaniu](https://github.com/n8n-io/n8n/releases)`,
    fr_FR: `n8n mis à jour vers 2.48.4.

- Les nœuds Schedule Trigger et Cron utilisent désormais par défaut le planificateur durable de n8n
- Nouveau : certificats SSL personnalisés dans le nœud Postgres, scores de confiance optionnels dans le nœud Text Classifier et vérification de signature des webhooks pour les déclencheurs Mailchimp, Workable et Venafi
- Nouveau : version 2 du nœud Monday.com, désormais par défaut pour les nouveaux nœuds
- Corrections dans l'éditeur, AI Agent et n8n Assistant, ainsi que dans la base de données SQLite

[Notes de version complètes](https://github.com/n8n-io/n8n/releases)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
