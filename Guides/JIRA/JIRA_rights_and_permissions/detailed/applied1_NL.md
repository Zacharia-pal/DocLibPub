# **Jira Service Management Rollen en Rechten Documentatie**

## **1. Overzicht**

Deze documentatie biedt een uitgebreid overzicht van de rollen binnen **Jira Service Management** en de bijbehorende rechten. Daarnaast wordt uitgelegd hoe **automatiseringsrechten** apart worden behandeld van de standaard rechten op issues. Het doel is om elke rol te koppelen aan het juiste toegangs- en machtigingsniveau op basis van gebruikersbehoeften, en richtlijnen te geven voor het beheren van automatiseringsregels.

---

## **2. Rollen en Rechten Koppeling**

Elke rol binnen Jira Service Management heeft specifieke rechten gekoppeld aan verschillende acties, van het bekijken van projecten tot het beheren van workflows. Hieronder volgt een gedetailleerd overzicht van hoe elke rol zich verhoudt tot de Jira-rechten.

---

### **Rol 1: Productbeheerder**

- **Volledige beheerdersrechten** (Superuser)
- **Rechten:**
  - ✅ **Projecten beheren**: Kan projectinstellingen en configuraties beheren.
  - ✅ **Issue-indelingen beheren**: Kan de indeling van issues aanpassen.
  - ✅ **Workflows bewerken**: Kan workflows aanmaken en aanpassen.
  - ✅ **Overige rechten**: Toegang tot alle andere Jira-beheerfuncties.
  
**Samenvatting**: De rol Productbeheerder heeft volledige controle over Jira-projecten en instellingen. Deze gebruiker kan elke beheeractie uitvoeren binnen Jira Service Management.

---

### **Rol 2: Gebruikersbeheerder**

- **Hoofdfocus**: Gebruikersbeheer en projecttoegang
- **Rechten:**
  - ✅ **Watchers beheren**: Kan watchers toevoegen of wijzigen.
  - ✅ **Stemmen en Watchers bekijken**: Kan stemmers en watchers van issues bekijken.
  - ✅ **Gebruikersinstellingen beheren**: Kan gebruikersspecifieke instellingen en rechten beheren.

**Samenvatting**: Gebruikersbeheerders richten zich op het beheren van gebruikersrollen en zichtbaarheid binnen Jira-projecten. Ze hebben meestal geen volledige projectbeheerrechten, maar kunnen wel gebruikersrechten en zichtbaarheid beheren.

---

### **Rol 3: Klant**

- **Hoofdfocus**: Alleen toegang tot het klantenportaal
- **Rechten:**
  - ✅ **Geen projectrechten**: Klanten hebben geen directe toegang tot projecten of issues binnen Jira.
  - ✅ **Toegang tot portaal**: Klanten kunnen issues aanmaken en bekijken via het Service Management portaal.

**Samenvatting**: De Klant-rol is beperkt tot interactie via het serviceportaal zonder directe toegang tot het Jira-project of de interface voor issuebeheer.

---

### **Rol 4: Ticket Support**

- **Hoofdfocus**: Beheer van supporttickets
- **Rechten:**
  - ✅ **Projecten bekijken**: Kan projecten en bijbehorende issues bekijken.
  - ✅ **Werken aan issues**: Kan actief werken aan toegewezen issues.
  - ✅ **Reacties toevoegen**: Kan opmerkingen plaatsen.
  - ✅ **Eigen reacties bewerken**: Kan eigen opmerkingen bewerken.
  - ✅ **Bijlagen toevoegen**: Kan bestanden toevoegen aan issues.
  - ✅ **Eigen bijlagen bewerken**: Kan eigen bijlagen wijzigen.
  - ✅ **Eigen werklogs bewerken**: Kan werklogs aanpassen die door henzelf zijn toegevoegd.

**Samenvatting**: De Ticket Support-rol richt zich op interactie met tickets, het toevoegen van opmerkingen, bijlagen en werklogs, en het uitvoeren van taken met betrekking tot issueoplossing.

---

### **Rol 5: Projectaanpassingen**

- **Hoofdfocus**: Workflow- en automatiseringsbeheer
- **Rechten:**
  - ✅ **Workflows bewerken**: Kan workflows aanmaken en bewerken.
  - ✅ **Ontwikkelhulpmiddelen bekijken**: Toegang tot ontwikkeltools.
  - ✅ **Geaggregeerde data bekijken**: Inzicht in projectdata op geaggregeerd niveau.
  - ✅ **Sprints beheren**: Kan sprints aanmaken en beheren.
  - ✅ **Eigen opmerkingen en werklogs bewerken/verwijderen**: Kan eigen werk bewerken.
  - ✅ **Alle bijlagen en werklogs verwijderen**: Kan alles binnen het project verwijderen.

**Samenvatting**: De rol Projectaanpassingen is gericht op het aanpassen van workflows, het beheren van sprints en het optimaliseren van projectprocessen.

---

### **Rol 6: Project Gebruikersbeheerder**

- **Hoofdfocus**: Beheer van gebruikers en projectinstellingen
- **Rechten:**
  - ✅ **Watchers beheren**: Kan watchers toevoegen/verwijderen.
  - ✅ **Stemmen en Watchers bekijken**: Kan deze lijsten inzien.
  - ✅ **Projecten beheren**: Kan bepaalde projectbeheerfuncties uitvoeren.
  - ✅ **Issue-indelingen beheren**: Kan weergave van issues configureren.

**Samenvatting**: De Project Gebruikersbeheerder combineert gebruikersbeheer met beperkte projectadministratie.

---

### **Rol 7: Viewer Projectaanpassingen**

- **Hoofdfocus**: Alleen-lezen toegang tot workflows en aanpassingen
- **Rechten:**
  - ✅ **Workflows bekijken (alleen-lezen)**: Kan workflows inzien, maar niet bewerken.
  - ✅ **Geaggregeerde data bekijken**: Inzicht in projectoverzicht en data.
  - ✅ **Projecten bekijken**: Alleen leesrechten binnen projecten.

**Samenvatting**: De Viewer Projectaanpassingen-rol is gericht op observatie van workflows en projectgegevens zonder bewerkingsrechten.

---

### **Rol 8: Accordeerder**

- **Hoofdfocus**: Goedkeuren van issues en feedback geven
- **Rechten:**
  - ✅ **Stemmen en Watchers bekijken**: Voor besluitvorming.
  - ✅ **Reacties toevoegen**: Bijvoorbeeld ter goedkeuring.
  - ❌ **Geen bewerk-/verwijderrechten**: Kan geen issues, opmerkingen of bijlagen bewerken/verwijderen.
  - ❌ **Geen projectbeheerdersrechten**: Alleen toegang voor goedkeuringstaken.

**Samenvatting**: De Accordeerder-rol richt zich op het goedkeuren van issues en het geven van feedback, zonder mogelijkheid tot wijzigingen.

---

## **3. Voorgesteld Machtigingenschema per Rol**

### **Overzicht Rechten per Rol**

*Let op: deze tabel is **niet meer actueel** en dient te worden geüpdatet.*

---

## **4. Automatiseringsrechten**

Automatiseringsrechten worden los behandeld van het **standaard machtigingenschema** in Jira Service Management. Deze worden meestal beheerd via **globale rechten** en **projectrollen** in plaats van via specifieke issue-permissies.

### **Overzicht Automatiseringsrechten**

1. **Globale rechten / Jira-systeemrollen**:
   - Voor het beheren van globale of project-specifieke automatiseringsregels moet een gebruiker **Jira-beheerder** of **Projectbeheerder** zijn.

2. **Projectrollen + automatiseringsregels**:
   - Een gebruiker kan automatiseringsregels pas aanpassen of aanmaken als hij of zij de juiste projectbeheerdersrechten heeft, of expliciet toegang heeft gekregen binnen de regelinstellingen.

3. **Auditlogs en eigenaarschap regels**:
   - De eigenaar van de automatiseringsregel beïnvloedt of anderen deze kunnen bewerken. Als de eigenaar onvoldoende rechten heeft, kan de regel mislukken.

### **Specifieke Automatiseringsrechten per Rol**:

| **Automatiseringsrecht**   | **Wie heeft wat nodig**                                |
|-----------------------------|--------------------------------------------------------|
| **Automatiseringen bekijken** | Rol 7 (Viewer Projectaanpassingen) heeft **Projecten bekijken** en mogelijk **Ontwikkelhulpmiddelen bekijken** nodig |
| **Automatiseringen bewerken** | Rol 5 (Projectaanpassingen) heeft **Projectbeheerrechten** nodig |

---

## **5. Conclusie**

Deze documentatie biedt een duidelijke structuur voor het begrijpen en toewijzen van rechten in Jira Service Management. Door rollen goed af te stemmen op machtigingen, zorg je voor correcte toegangscontrole, stroomlijning van workflows en helderheid bij het beheren van automatiseringsregels.
