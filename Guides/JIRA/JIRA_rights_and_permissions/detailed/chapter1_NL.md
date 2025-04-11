# **Complete Gedetailleerde Documentatie: Machtigingen, Rollen en Configuratie in Jira Service Management (JSM)**

## **1. Overzicht van Jira Service Management (JSM)**

Jira Service Management (JSM) is een populair platform voor IT-servicebeheer (ITSM) dat integreert met Jira Software. Hiermee kunnen teams verzoeken, incidenten, wijzigingen en problemen beheren. In JSM zijn machtigingen en rollen essentieel voor het beheren van de toegang tot verschillende onderdelen van het systeem, zoals het beheren van projecten, het configureren van borden, het afhandelen van klantverzoeken, enz.

---

## **2. Jira Service Management Machtigingen**

Machtigingen in Jira worden gebruikt om te bepalen welke acties gebruikers kunnen uitvoeren binnen een project of in een bredere Jira-instantie. Ze kunnen zowel op **projectniveau** als **issue-niveau** worden toegepast.

### **2.1 Project Machtigingen**
**Project Machtigingen** bepalen wie welke acties kan uitvoeren binnen een specifiek project. Enkele van de meest voorkomende projectmachtigingen zijn:

#### Veelvoorkomende Project Machtigingen:
| **Machtiging**            | **Beschrijving**                                         |
|---------------------------|---------------------------------------------------------|
| **Browse Projects**        | Mogelijkheid om projecten en de bijbehorende issues te bekijken. |
| **Create Issues**          | Mogelijkheid om nieuwe issues aan te maken.             |
| **Assign Issues**          | Mogelijkheid om issues aan andere gebruikers toe te wijzen. |
| **Manage Sprints**         | Mogelijkheid om sprints te maken en te beheren (voor Scrum-borden). |
| **Service Project Agent**  | Maakt het mogelijk om met klanten te communiceren en toegang te krijgen tot de Service Management-functies. |
| **View Development Tools** | Mogelijkheid om ontwikkelingsgerelateerde informatie te bekijken die aan een issue gekoppeld is, zoals commits, builds en andere gegevens. |
| **Transition Issues**      | Mogelijkheid om issues door verschillende stadia van de workflow te verplaatsen. |
| **Close Issues**           | Mogelijkheid om een issue te sluiten wanneer het is opgelost. |
| **Set Issue Security**     | Mogelijkheid om de beveiligingsniveaus op issues in te stellen, zodat alleen bepaalde mensen ze kunnen zien. |

#### **Voorbeeldscenario:**
Als een gebruiker de machtiging **Browse Projects** heeft, kan deze **de issues** in het project **bekijken**, maar niet bewerken of de status wijzigen, tenzij hij ook machtigingen heeft zoals **Edit Issues** en **Transition Issues**.

---

### **2.2 Issue Machtigingen**
**Issue Machtigingen** bepalen wie welke acties kan uitvoeren op specifieke issues in het systeem. Bijvoorbeeld:

| **Machtiging**            | **Beschrijving** |
|---------------------------|-----------------|
| **Assignable User**        | Bepaalt wie toegewezen kan worden aan issues. |
| **Edit Issues**            | Maakt het mogelijk om bestaande issues te bewerken. |
| **Delete Issues**          | Maakt het mogelijk om issues te verwijderen. |
| **Move Issues**            | Mogelijkheid om issues te verplaatsen tussen projecten of workflows. |
| **Resolve Issues**         | Mogelijkheid om issues op te lossen (bijv. afsluiten of markeren als voltooid). |
| **Work On Issues**         | Mogelijkheid om werk te registreren tegen een issue (relevant voor tijdregistratie). |

#### **Voorbeeldscenario:**
Als een gebruiker de machtiging **Assignable User** heeft, kan hij/zij aan **issues** worden **toegewezen**, maar niet bewerken of de status van het issue wijzigen, tenzij deze gebruiker ook machtigingen heeft zoals **Edit Issues** of **Transition Issues**.

---

## **3. Rollen in Jira Service Management**

Rollen in Jira worden doorgaans gebruikt om te bepalen **welke acties** gebruikers kunnen uitvoeren binnen een specifiek project of op globaal niveau (bijv. over meerdere projecten).

### **3.1 Project Rollen**
**Projectrollen** bepalen de verantwoordelijkheden van een gebruiker binnen een specifiek project. Voorbeelden van projectrollen zijn:

| **Projectrol**            | **Beschrijving** |
|---------------------------|-----------------|
| **Project Admin**          | Volledige administratieve toegang binnen het project, inclusief het configureren van workflows, borden en machtigingen. |
| **Service Desk Agent**     | Behandelt klantverzoeken, lost tickets op en beheert de servicedesk. |
| **Developer**              | Werkt aan technische taken met betrekking tot issues (bijv. ontwikkelingswerk). |
| **Requester**              | Klant of externe gebruiker die verzoeken indient, issues bekijkt en opmerkingen toevoegt. |

#### **Voorbeeldscenario:**
- **Project Admin**: Een gebruiker met deze rol kan **projectinstellingen configureren**, **machtigingen** wijzigen en **borden beheren**.
- **Service Desk Agent**: Een gebruiker met deze rol kan **klantverzoeken** afhandelen, communiceren met klanten en **tickets beheren**.
- **Requester**: Een klant die een issue indient maar geen interne informatie kan bewerken of bekijken.

---

### **3.2 Product Rollen**
Deze rollen bepalen de **toegang** tot producten (bijv. Jira Software, Jira Service Management) over alle sites heen.

| **Productrol**             | **Beschrijving** |
|----------------------------|-----------------|
| **Org Admin**              | Volledige administratieve controle over de gehele organisatie (kan alle gebruikers, producten, facturering en globale instellingen beheren). |
| **Site Admin**             | Beheert de instellingen op site-niveau en de gebruikers toegang tot producten zoals Jira Service Management. |
| **Product Admin**          | Configureert instellingen, machtigingen en workflows specifiek voor een product (bijv. JSM of Jira Software). |
| **User Access Admin**      | Beheert welke gebruikers toegang hebben tot specifieke producten binnen de organisatie. |

#### **Voorbeeldscenario:**
- **Org Admin**: Een gebruiker met deze rol kan **facturering beheren**, gebruikers over de hele organisatie toevoegen/verwijderen en **SSO** instellen.
- **Site Admin**: Een gebruiker kan **Jira Service Management-instellingen configureren**, **projecten beheren** en **rollen** toewijzen aan gebruikers binnen de organisatie.

---

## **4. Klantbeheer in Jira Service Management**

### **4.1 Wie zijn Klanten in JSM?**
In JSM zijn **klanten** **externe gebruikers** (bijv. klanten, partners of interne medewerkers) die **verzoeken indienen** en **interageren met agenten**. Ze hebben toegang tot het **Klantenportaal** om hun tickets in te dienen, in te zien en erop te reageren.

#### **Belangrijke punten over Klanten:**
- **Gratis toe te voegen**: Klanten vereisen geen betaalde licentie. Ze zijn onbeperkt beschikbaar in de JSM **Standard**, **Premium**, en **Enterprise** plannen.
- **Klantenportaal**: Klanten communiceren via het portaal, waar ze nieuwe verzoeken kunnen indienen, hun issues kunnen volgen en opmerkingen kunnen toevoegen.
- **Verzoekdeelnemers**: Klanten kunnen ook als verzoekdeelnemers worden toegevoegd, wat hen extra zichtbaarheid en deelname aan specifieke issues biedt.

#### **Voorbeeldscenario:**
**Patronale Life** heeft tussen de **150-500 klanten** die interactie hebben met hun Jira Service Management-instantie. Deze klanten kunnen **serviceverzoeken indienen**, hun **issues bekijken** en communiceren via het **Klantenportaal**. 

**Mathias**, een klant van Patronale Life, dient een verzoek in voor een probleem met de facturering. **Erika** en **Dieter**, andere klanten, worden toegevoegd als **verzoekdeelnemers**, zodat zij het issue kunnen zien en opmerkingen kunnen toevoegen terwijl het door het systeem gaat.

---

## **5. Org vs Site: Het Verschil Begrijpen**

### **5.1 Organisatieniveau (Org)**
De **Org** is het hoogste niveau binnen Jira. Het regelt alle gebruikers, domeinstellingen, facturering en producttoegang over alle sites heen.

| **Org Admin** | Kan gebruikers, producten, beveiligingsinstellingen en facturering voor de gehele organisatie beheren. |
|---------------|-------------------------------------------------------------|

#### **Voorbeeldscenario:**
**Patronale Life** heeft een globale **Org Admin** die de instellingen voor al hun Jira-producten beheert. De **Org Admin** beheert bijvoorbeeld de integratie van **SSO** voor hun teamleden, beheert de toegang van gebruikers en zorgt voor de juiste facturering voor de organisatie.

### **5.2 Site-niveau**
Elke **Site** verwijst naar een enkele Jira-instantie (bijv. `patronalelife.atlassian.net`). Een site kan meerdere projecten bevatten en elke site wordt beheerd door **Site Admins**.

| **Site Admin**  | Kan de instellingen voor een specifieke Jira-instantie (bijv. `patronalelife.atlassian.net`) beheren, producten configureren en gebruikers toegang geven tot de site. |
|-----------------|-------------------------------------------------------------|

#### **Voorbeeldscenario:**
- De **Org Admin** voegt een **Site Admin** toe voor `patronalelife.atlassian.net` (de Jira-site voor het klantondersteuningsteam bij Patronale Life).
- De **Site Admin** beheert de **Jira Service Management** instellingen, maakt en beheert **projecten**, **machtigingen** en wijst **rollen** toe aan gebruikers binnen de organisatie.

---

## **6. Beheerdersmachtigingen voor het Maken van Projecten en het Configureren van Borden**

### **6.1 Wie Kan Jira-projecten Maken?**
- **Jira Admins (Product Admin)**: Kunnen zowel **company-managed** als **team-managed** projecten aanmaken over de gehele Jira-instantie.
- **Site Admins**: Kunnen projecten aanmaken als ze de nodige machtigingen hebben.

#### **Voorbeeldscenario:**
Een **Jira Admin** bij **Patronale Life** maakt een **company-managed project** voor het beheren van klantondersteuningsverzoeken met betrekking tot zorgverzekeringen. Dit project is gestructureerd met aangepaste workflows en issuetypes, zodat agenten efficiënt claims kunnen verwerken.

---

### **6.2 Wie Kan Borden Configureren?**
- **Project Admins**: Kunnen **team-managed borden** configureren binnen hun project (bijv. kolommen, filters).
- **Jira Admins (Product Admins)**: Kunnen **company-managed borden** configureren, inclusief het beheren van filters, workflows en machtigingen die aan de borden zijn gekoppeld.

#### **Voorbeeldscenario:**
- Een **Project Admin** bij **Patronale Life** beheert het bord voor het **Support Team** (team-managed project), en stelt kolommen in voor **To Do**, **In Progress** en **Done** om inkomende supportverzoeken bij te houden.
- Een **Jira Admin** configureert het bord voor het **Development Team** (company-managed project), inclusief **swimlanes**, **quick filters** en **bordmachtigingen** om de ontwikkeling van functies voor een nieuw zorgverzekeringsportaal te beheren.

---

## **7. Onbeperkte Klanten in JSM Standard Plan**

Het **Jira Service Management (Standard Plan)** biedt **onbeperkte klanten**, wat betekent dat je zoveel klanten kunt toevoegen als je wilt zonder extra kosten.

- **Onbeperkte klanten** kunnen verzoeken indienen, hun issues bekijken en erop reageren.
- **Klanten vereisen geen betaalde licenties**, alleen **agenten** (interne teamleden) hebben een licentie nodig.

#### **Voorbeeldscenario:**
**Patronale Life** heeft **300 klanten** in het **JSM Standard Plan**. Deze klanten kunnen **supportverzoeken indienen**, hun **issues bekijken** via het **Klantenportaal** en communiceren met agenten. De organisatie wordt niet extra in rekening gebracht voor het hebben van zoveel klanten, waardoor het **Standard Plan** een kosteneffectieve keuze is voor het beheren van hun klantenserviceactiviteiten.

---

## **8. Conclusie**

Dit document biedt een gedetailleerde gids voor het begrijpen van **machtigingen**, **rollen**, **klantbeheer** en **beheerdersverantwoordelijkheden** binnen Jira Service Management. Door deze concepten te begrijpen en hoe ze met elkaar samenwerken, kan **Patronale Life** effectief hun JSM-projecten beheren, machtigingen correct instellen en ervoor zorgen dat de juiste gebruikers de juiste toegang hebben.
