### **Stap-voor-Stap Handleiding voor het Maken van Rollen en het Toewijzen van Permissies in Jira**

#### **1. Begrip van Rollen in Jira**

In Jira worden **rollen** gebruikt om specifieke permissies toe te wijzen aan gebruikers binnen een project. Deze rollen bepalen wat een gebruiker kan doen binnen een project, zoals het maken, bewerken of overdragen van issues.

**Belangrijke Roltypen**:
- **Projectbeheerders**: Volledige toegang om projectinstellingen te configureren en permissies te beheren.
- **Ontwikkelaars**: Gebruikers die aan issues kunnen werken, ze overdragen en soms versies en sprints beheren.
- **Testers**: Gebruikers met beperkte bewerkingsrechten, meestal met toestemming om issues te bekijken en te testen.
- **Gebruikers**: Basisgebruikers met permissies om issues te bekijken en erop te reageren.

#### **2. Het Maken van Aangepaste Rollen in Jira**

Om rollen te maken en te beheren, moet je **Jira-beheerder** zijn.

##### **Stappen om Aangepaste Rollen te Maken**:
1. **Ga naar de Instellingen van Projectrollen**:
   - Ga naar **Jira Beheer** (klik op het tandwielpictogram rechtsboven) > **Systeem**.
   - Onder de sectie **Beveiliging**, klik op **Projectrollen**.
   
2. **Voeg een Nieuwe Rol toe**:
   - Op de **Projectrollen** pagina, klik op **Voeg Projectrol toe**.
   - Geef de rol een **Naam** (bijvoorbeeld "QA Engineer", "Product Owner") en een **Beschrijving** (optioneel).
   - Klik op **Toevoegen** om de nieuwe rol te maken.

#### **3. Gebruikers Toewijzen aan Rollen binnen een Project**

Nadat je rollen hebt gemaakt, moet je deze toewijzen aan specifieke gebruikers in een project.

##### **Stappen om Gebruikers aan Rollen toe te Wijzen**:
1. **Ga naar de Projectinstellingen**:
   - Navigeer naar het project waar je rollen wilt toewijzen.
   - In de linkerzijbalk, klik op **Projectinstellingen** > **Gebruikers en rollen**.

2. **Voeg Gebruikers toe aan Rollen**:
   - Op de **Gebruikers en Rollen** pagina zie je een lijst van alle projectrollen.
   - Klik op **Beheer rollen**, en onder elke rol klik je op **Gebruikers aan rol toevoegen**.
   - Zoek de gebruiker op naam of groep en klik op **Toevoegen** om deze aan de rol toe te wijzen.
   - Je kunt meerdere gebruikers of groepen aan dezelfde rol toewijzen.

---

### **4. Het Toewijzen van Permissies aan Rollen**

Nadat je rollen hebt aangemaakt, kun je de permissies definiëren die aan de gebruikers in elke rol worden gegeven. Permissies in Jira worden toegewezen via **Permissieschema's**.

#### **Soorten Permissies in Jira**:
- **Globale Permissies**: Permissies die van toepassing zijn op de gehele Jira-instance (bijvoorbeeld Jira-beheerders).
- **Projectpermissies**: Permissies die specifiek voor projecten gelden (bijvoorbeeld het maken van issues, het toewijzen van issues).
- **Issue-permissies**: Permissies die acties op issue-niveau regelen (bijvoorbeeld bewerken, reageren, oplossen).
- **Workflow-permissies**: Permissies voor het overdragen van issues tussen verschillende workflowstatussen.

#### **Stappen om Permissies aan Rollen toe te Wijzen**:

##### **1. Maak of Wijzig een Permissieschema**:
1. **Ga naar Permissieschema's**:
   - Ga naar **Jira Beheer** > **Problemen** > **Permissieschema's**.
   
2. **Maak een Nieuw Schema** (Optioneel):
   - Klik op **Voeg Permissieschema toe**.
   - Geef het schema een naam (bijvoorbeeld “Software Project Permissies”).
   
3. **Wijzig een Bestaand Schema**:
   - Als je een bestaand schema wilt aanpassen, klik dan op **Permissies** naast het schema dat je wilt bewerken.

4. **Permissies aan Rollen Toewijzen**:
   - Klik op **Permissies** in het schema dat je wilt bewerken.
   - Klik op **Voeg Permissie toe** bovenaan de pagina.
   - Kies in de vervolgkeuzelijst de **Permissie** die je wilt toewijzen (bijvoorbeeld **Project doorbladeren**, **Issues toewijzen**, **Issues maken**, enz.).
   - In de sectie **Geef permissie aan** kies je **Projectrol** en selecteer je de rol waaraan je deze permissie wilt toewijzen.
   - Klik op **Geef** om de permissie toe te wijzen.

##### **2. Soorten Permissies die je kunt Toewijzen**:
Hier zijn enkele van de permissies die je kunt toewijzen aan projectrollen:
- **Project doorbladeren**: Hiermee kan een gebruiker het project bekijken.
- **Issues maken**: Hiermee kan een gebruiker issues maken binnen het project.
- **Issues toewijzen**: Hiermee kan een gebruiker issues aan anderen toewijzen.
- **Issues bewerken**: Hiermee kan een gebruiker issues bewerken.
- **Issues verwijderen**: Hiermee kan een gebruiker issues verwijderen.
- **Aan issues werken**: Hiermee kan een gebruiker issues door de workflow heen verplaatsen.
- **Issues oplossen**: Hiermee kan een gebruiker issues afsluiten of oplossen.
- **Issues sluiten**: Hiermee kan een gebruiker issues als gesloten markeren.
- **Issues overdragen**: Hiermee kan een gebruiker een issue van de ene status naar de andere in de workflow overdragen.
- **Sprints beheren**: Hiermee kan een gebruiker sprints beheren (specifiek voor Scrum-projecten).
- **Ontwikkeltools bekijken**: Hiermee kan een gebruiker codecommits, branches, pull-verzoeken, enz. in verband met issues bekijken (specifiek voor softwareprojecten).
- **Projecten beheren**: Hiermee kan een gebruiker volledige controle krijgen over de projectinstellingen en permissies (meestal toegewezen aan Projectbeheerders).

#### **Stappen om het Permissieschema toe te Wijzen aan een Project**:
1. **Ga naar de Projectinstellingen**:
   - Navigeer naar je project en klik op **Projectinstellingen** in de linkerzijbalk.
   
2. **Wijs het Permissieschema toe**:
   - In de sectie **Permissies** van de projectinstellingen selecteer je **Acties** > **Gebruik een ander permissieschema**.
   - Kies het schema dat je wilt toepassen en klik op **Associëren**.

---

### **5. Het Toewijzen van Permissies binnen de Workflow**

Naast de permissieschema's kun je ook permissies beheren op workflow-niveau, waardoor je kunt bepalen wie een issue tussen verschillende workflow-statussen kan overdragen.

#### **Stappen om Permissies binnen Workflows toe te Wijzen**:

1. **Bewerk een Workflow**:
   - Ga naar **Jira Beheer** > **Problemen** > **Workflows**.
   - Selecteer de workflow die je wilt bewerken en klik op **Bewerken**.

2. **Voeg Workflow-voorwaarden toe**:
   - Klik op een overgang tussen statussen (bijvoorbeeld van **Te Doen** naar **In Behandeling**).
   - Onder het tabblad **Voorwaarden**, voeg een **Voorwaarde** toe die bepaalt wie deze overgang kan uitvoeren. Bijvoorbeeld:
     - **Gebruiker in Projectrol**: Beperk de overgang tot gebruikers in een specifieke rol (bijvoorbeeld alleen ontwikkelaars kunnen een issue naar **In Behandeling** verplaatsen).

3. **Voeg Post-functies toe** (optioneel):
   - Je kunt ook **Post-functies** toevoegen om bepaalde acties automatisch uit te voeren wanneer een issue door een overgang wordt verplaatst, zoals het toewijzen van een issue aan een specifieke gebruiker of het versturen van een notificatie.

4. **Publiceer de Workflow**:
   - Nadat je je wijzigingen hebt aangebracht, klik je op **Publiceren** om de workflow toe te passen op je project.

---

### **6. Het Verifiëren en Troubleshooten van Permissies**

Na het instellen van rollen en permissies is het belangrijk om te zorgen dat alles werkt zoals het hoort. Jira biedt een **Permissieshelper** die kan helpen bij het oplossen van problemen.

#### **Gebruik van de Permissieshelper**:
1. **Navigeer naar de Permissieshelper**:
   - Ga naar **Jira Beheer** > **Systeem** > **Permissieshelper**.
   
2. **Controleer Permissies voor een Specifieke Gebruiker**:
   - Vul de gebruikersnaam in en kies het project en de actie (bijvoorbeeld het maken van een issue, het bekijken van een issue).
   - De Permissieshelper zal je vertellen waarom de gebruiker wel of niet de vereiste permissie heeft.

3. **Audit Permissies**:
   - Je kunt ook **Auditlogboeken** gebruiken om wijzigingen in permissies en rollen bij te houden.
   - Ga naar **Jira Beheer** > **Systeem** > **Auditlogboek** en bekijk de logboeken voor wijzigingen in permissies.

---

### **7. Best Practices voor het Beheren van Rollen en Permissies**

- **Minimaliseer het Aantal Rollen**: Gebruik zo min mogelijk rollen om verwarring te voorkomen. Maak rollen die echte functies binnen een project weerspiegelen (bijvoorbeeld Ontwikkelaar, Tester, Projectmanager).
- **Gebruik Permissieschema's voor Efficiëntie**: Als je projecten hebt met vergelijkbare vereisten, maak dan een permissieschema dat op meerdere projecten kan worden toegepast, in plaats van permissies handmatig voor elk project in te stellen.
- **Beperk Admin Permissies**: Wijs **Projectbeheerder** en **Jira-beheerder** rollen alleen toe aan degenen die ze nodig hebben. Deze rollen geven volledige controle over projecten en Jira zelf.

---

Door deze stappen te volgen, kun je effectief rollen creëren, permissies toewijzen en toegang beheren in Jira, zodat gebruikers de juiste toegang hebben voor hun taken. Dit proces helpt om de beveiliging te waarborgen en zorgt voor een soepele projectbeheerervaring.
