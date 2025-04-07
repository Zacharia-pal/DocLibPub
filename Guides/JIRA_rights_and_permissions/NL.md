### Uitgebreide Gids voor Rechten en Machtigingen in Jira en Zijn Producten

Jira, het populaire projectmanagementtool van Atlassian, biedt een flexibel en gedetailleerd machtigingssysteem waarmee beheerders de toegang tot verschillende functies in verschillende producten (Jira Software, Jira Service Management, Jira Work Management, enz.) kunnen beheren. Het begrijpen van hoe je deze machtigingen beheert is cruciaal om ervoor te zorgen dat gebruikers het juiste toegangsniveau hebben om hun taken uit te voeren, terwijl de integriteit van je gegevens wordt beschermd.

Deze gids behandelt:

1. **Overzicht van Jira-machtigingen**
2. **Jira-producten en hun specifieke machtigingen**
3. **Machtigingsschema's**
4. **Projectrollen**
5. **Globale machtigingen**
6. **Beveiliging van issues**
7. **Machtigingsschema's versus Workflow-machtigingen**
8. **Machtigingen aanpassen voor geavanceerde gebruikscases**
9. **Machtigingen beheren in Jira Service Management**
10. **Problemen met machtigingen oplossen**

---

### 1. **Overzicht van Jira-machtigingen**

Machtigingen in Jira bepalen wie toegang heeft tot specifieke functies van Jira, bepaalde acties kan uitvoeren en issues, projecten of configuraties kan wijzigen. Machtigingen zijn meestal georganiseerd in:

- **Globale Machtigingen**: Deze gelden voor de gehele Jira-instantie (bijvoorbeeld systeembeheerders, Jira-beheerders).
- **Projectmachtigingen**: Deze gelden binnen een specifiek project (bijvoorbeeld Issue aanmaken, Issue bewerken).
- **Issuemachtigingen**: Machtigingen die gekoppeld zijn aan specifieke acties binnen een issue (bijvoorbeeld Issues overzetten, Reacties toevoegen).

Naast machtigingen gebruikt Jira **Projectrollen** en **Groepen** voor meer gedetailleerde controle.

---

### 2. **Jira-producten en hun specifieke machtigingen**

Elk van Jira's producten—Jira Software, Jira Service Management en Jira Work Management—heeft een set machtigingen die zijn afgestemd op de behoeften van de gebruikers in die context.

#### **Jira Software-machtigingen**
Deze machtigingen stellen gebruikers in staat om softwareontwikkelingsprojecten te beheren. Enkele voorbeelden:
- **Issues aanmaken**: Gebruikers kunnen issues aanmaken (bijvoorbeeld verhalen, bugs).
- **Sprints beheren**: Gebruikers kunnen sprints beheren in Scrum- of Kanban-borden.
- **Versies beheren**: Gebruikers kunnen versies/releases maken, bewerken en verwijderen.

#### **Jira Service Management-machtigingen**
Deze machtigingen zijn gericht op IT-ondersteuning en klantenserviceteams. Ze omvatten:
- **Klantmachtigingen**: Bepalen wie verzoeken kan bekijken en indienen in het portaal.
- **Queues beheren**: Gebruikers kunnen service desk-queues instellen en beheren.
- **Reageren op verzoeken**: Machtiging om te reageren op klantverzoeken in de queue.

#### **Jira Work Management-machtigingen**
Deze machtigingen richten zich op business projectmanagement en zijn vergelijkbaar met Jira Software, maar vereenvoudigd voor niet-technische gebruikers. Veelvoorkomende machtigingen zijn:
- **Issues aanmaken**: Gebruikers kunnen zakelijke gerelateerde issues aanmaken (bijvoorbeeld taken, to-dos).
- **Issues overzetten**: Gebruikers kunnen een issue door de workflowfasen bewegen.

---

### 3. **Machtigingsschema's**

**Machtigingsschema's** zijn een verzameling machtigingen die zijn gekoppeld aan een project. Deze schema's zijn essentieel omdat ze bepalen wie wat kan doen binnen de context van een project.

- **Machtigingen toewijzen**: Beheerders wijzen gebruikers of groepen specifieke machtigingen toe.
- **Soorten machtigingen in schema's**: 
    - **Projectmachtigingen** (bijvoorbeeld Issues aanmaken, Issues toewijzen, Issues bekijken).
    - **Issuemachtigingen** (bijvoorbeeld Issues bewerken, Issues overzetten).

**Stappen om machtigingsschema's te configureren:**
1. Ga naar **Jira-beheer** > **Issues** > **Machtigingsschema's**.
2. Selecteer het schema om te bewerken of maak een nieuw schema aan.
3. Voeg machtigingen toe of verwijder deze voor verschillende rollen of gebruikers.

---

### 4. **Projectrollen**

Projectrollen stellen je in staat om gebruikers toe te wijzen aan specifieke projectgerelateerde taken. Bijvoorbeeld, een project kan rollen hebben zoals **Projectmanager**, **Ontwikkelaar** en **Tester**. Deze rollen worden vervolgens gekoppeld aan specifieke machtigingen binnen het machtigingsschema.

- **Standaardrollen**: Jira biedt enkele standaardrollen zoals:
    - **Beheerders**: Kunnen projectconfiguraties, machtigingen, enz. beheren.
    - **Ontwikkelaars**: Kunnen meestal werken aan issues en deelnemen aan ontwikkelingsgerelateerde acties.
    - **Gebruikers**: Kunnen issues bekijken en erop reageren.

- **Aangepaste rollen**: Je kunt aangepaste rollen maken die passen bij de specifieke behoeften in je organisatie.

---

### 5. **Globale machtigingen**

Globale machtigingen gelden voor de gehele Jira-instantie, niet alleen voor individuele projecten. Deze omvatten machtigingen zoals:
- **Jira-beheerders**: Volledige toegang om de Jira-instantie te configureren en beheren.
- **Systeembeheerders**: Het hoogste toegangsniveau, inclusief systeeminstellingen en toegang tot de database.
- **Gebruikers doorbladeren**: Machtigingen om gebruikersprofielen en groepen te bekijken.

**Stappen om globale machtigingen te configureren:**
1. Ga naar **Jira-beheer** > **Systeem** > **Globale machtigingen**.
2. Bewerk rollen en gebruikers/groepen dienovereenkomstig.

---

### 6. **Beveiliging van Issues**

**Beveiligingsschema's voor Issues** worden gebruikt om te beperken wie bepaalde issues kan bekijken en ermee kan werken, op basis van hun beveiligingsniveau.

- **Beveiligingsniveaus**: Bepalen wie bepaalde issues kan bekijken op basis van criteria (bijvoorbeeld specifieke rollen of groepen).
- **Voorbeeld**: Een issue kan gemarkeerd zijn als "Confidentieel", en alleen gebruikers in de **Management** rol kunnen het bekijken.

**Stappen om Issue-beveiliging te configureren:**
1. Ga naar **Jira-beheer** > **Issues** > **Beveiligingsschema's voor Issues**.
2. Maak een beveiligingsschema en definieer beveiligingsniveaus.
3. Koppel het beveiligingsschema aan specifieke projecten.

---

### 7. **Machtigingsschema's versus Workflow-machtigingen**

**Workflow-machtigingen** stellen je in staat te bepalen wie issues van de ene status naar de andere kan overzetten. Deze machtigingen zijn essentieel voor het beheren van de voortgang van issues binnen de levenscyclus van een project.

- **Overzetmachtigingen**: Bepalen wie een issue van de ene status naar de andere kan overzetten (bijvoorbeeld van "In Behandeling" naar "Klaar").
- **Workflow-voorwaarden**: Aanvullende controles die kunnen beperken wie bepaalde acties in de workflow mag uitvoeren.

Deze machtigingen zijn gekoppeld aan de workflows die in een project worden gebruikt.

---

### 8. **Machtigingen aanpassen voor geavanceerde gebruikscases**

Jira maakt het mogelijk om machtigingen fijner af te stemmen met:
- **Aangepaste machtigingsschema's**: Als je meerdere teams met verschillende behoeften hebt, kun je aangepaste machtigingsschema's maken.
- **Geavanceerde machtigingen**: Het gebruik van aangepaste velden, beveiligingsniveaus voor issues of workflow-overgangen kan bepalen wie specifieke acties mag uitvoeren.

---

### 9. **Machtigingen beheren in Jira Service Management**

Voor Jira Service Management regelen machtigingen zowel de toegang van interne agenten als van klantenportalen. Deze worden doorgaans beheerd door:
- **Klantmachtigingen**: Bepalen wie verzoeken kan indienen in het portaal.
- **Queues**: Configureren van queues en bepalen wie toegang heeft tot deze queues.
- **Verzoektypen**: Configureren van verzoektypen om verschillende workflows en machtigingen voor verschillende soorten verzoeken mogelijk te maken.

**Voorbeeld**: Je wilt misschien alleen bepaalde gebruikers toestemming geven om bepaalde queues te bekijken (bijvoorbeeld alleen bepaalde agenten kunnen werken aan incidenten met hoge prioriteit).

---

### 10. **Problemen met machtigingen oplossen**

Wanneer machtigingen verkeerd zijn geconfigureerd, kunnen er problemen optreden zoals:
- **Toegang geweigerd**: Gebruikers kunnen geen toegang krijgen tot de functies die ze nodig hebben.
- **Te veel rechten voor gebruikers**: Gebruikers hebben meer toegang dan ze zouden moeten hebben.

Om problemen op te lossen:
1. **Controleer machtigingsschema's**: Zorg ervoor dat gebruikers de juiste machtigingen hebben.
2. **Bekijk rollen**: Zorg ervoor dat gebruikers in de juiste rollen zitten.
3. **Auditlogboeken**: Gebruik de auditlogboeken van Jira om wijzigingen in machtigingen en rollen te traceren.

---

### Conclusie

Het machtigingsbeheersysteem van Jira is uitgebreid en flexibel, maar het vereist zorgvuldige planning en configuratie. De sleutel tot succes is het begrijpen van hoe machtigingen op verschillende niveaus (globaal, project, issue) met elkaar samenwerken. Door je machtigingen goed in te stellen en regelmatig te herzien, zorg je ervoor dat gebruikers de juiste toegang hebben en hun taken efficiënt kunnen uitvoeren zonder de beveiliging of projectintegriteit in gevaar te brengen.
