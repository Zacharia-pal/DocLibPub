### **Step2Step NL**

### **1. Overzicht van Jira-rechten**

**Rechten in Jira** zijn verdeeld in:
- **Globale Rechten**: Geldt voor het hele Jira-platform.
- **Projectrechten**: Geldt binnen specifieke projecten.
- **Issue-rechten**: Tied aan acties binnen individuele issues.

#### Stapsgewijze Handleiding voor het Instellen van Rechten:
1. **Toegang tot Rechinstellingen**:
   - **Jira-beheerder**: Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Je kunt een nieuw schema aanmaken of een bestaand schema bewerken.
  
2. **Globale Rechten Toewijzen**:
   - Ga naar **Jira-beheer** > **Systeem** > **Globale machtigingen**.
   - Voeg gebruikers/groepen toe aan rollen zoals **Systeembeheerder**, **Jira-beheerder** of **Bekijk Gebruikers**.

3. **Projectrechten Toewijzen**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Wijs rechten toe zoals **Problemen Maken**, **Problemen Toewijzen**, **Problemen Bekijken**, enz., aan gebruikers of groepen.

4. **Issue-rechten Toewijzen**:
   - Issue-rechten zoals **Problemen Bewerken** en **Problemen Overdragen** worden geconfigureerd binnen workflows, niet direct via het machtigingsschema, maar je kunt toegang beheren via workflowinstellingen.

---

### **2. Jira Producten en Hun Specifieke Rechten**

Jira heeft verschillende producten zoals **Jira Software**, **Jira Service Management** en **Jira Work Management**, die elk specifieke machtigingsmogelijkheden hebben.

#### Stapsgewijze Handleiding voor het Configureren van Rechten in Jira Software:
1. **Rechten Toewijzen in Jira Software**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Bewerk het schema en wijs rechten zoals **Sprints Beheren**, **Versies Maken** en **Borden Bekijken** toe aan de relevante projectrollen.

#### Stapsgewijze Handleiding voor het Configureren van Rechten in Jira Service Management:
1. **Service Desk Rechten Beheren**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Wijs rechten toe die betrekking hebben op klantenportalen en wachtrijen, zoals **Verzoeken Maken**, **Reageren op Verzoeken** en **Wachtrijen Beheren**.

#### Stapsgewijze Handleiding voor het Configureren van Rechten in Jira Work Management:
1. **Rechten voor Bedrijfsprojecten Configureren**:
   - Net als bij **Jira Software**, ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Wijs rechten toe voor acties zoals **Problemen Maken**, **Problemen Overdragen** en **Problemen Beheren**.

---

### **3. Machtigingsschema's**

**Machtigingsschema's** definiëren wat gebruikers kunnen doen in een project, zoals het maken van problemen of het toewijzen van taken. 

#### Stapsgewijze Handleiding voor het Maken/Bewerken van Machtigingsschema's:
1. **Nieuw Machtigingsschema Maken**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Klik op **Machtigingsschema Toevoegen**, geef het schema een naam en een beschrijving.
  
2. **Rechten Toewijzen aan Rollen of Groepen**:
   - Selecteer een machtigingsschema en klik op **Machtigingen**.
   - Gebruik de optie **Rechten Toewijzen** om rechten zoals **Problemen Maken**, **Problemen Toewijzen** of **Problemen Bekijken** toe te wijzen aan specifieke rollen/groepen.

3. **Machtigingsschema Toepassen op een Project**:
   - Ga naar **Projectinstellingen** > **Machtigingen**.
   - Kies het gewenste machtigingsschema uit de dropdown.

---

### **4. Projectrollen**

Projectrollen stellen je in staat verschillende sets machtigingen toe te wijzen aan gebruikers, afhankelijk van hun rol in een project.

#### Stapsgewijze Handleiding voor het Maken/Beheren van Projectrollen:
1. **Aangepaste Projectrollen Maken**:
   - Ga naar **Jira-beheer** > **Systeem** > **Projectrollen**.
   - Klik op **Projectrol Toevoegen**, geef de rol een naam (bijv. Ontwikkelaar, Tester).

2. **Gebruikers aan Rollen Toewijzen**:
   - In je project, ga naar **Projectinstellingen** > **Gebruikers en Rollen**.
   - Wijs gebruikers toe aan specifieke rollen (bijv. een ontwikkelaar aan de **Ontwikkelaar**-rol).

3. **Rollen Toewijzen aan Rechten**:
   - Ga terug naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Wijs rechten toe aan de relevante projectrollen (bijv. **Ontwikkelaars** kunnen **Problemen Bewerken**).

---

### **5. Globale Machtigingen**

Globale machtigingen stellen gebruikers in staat om Jira-brede functies te openen, zoals systeembeheer of het bekijken van gebruikersprofielen.

#### Stapsgewijze Handleiding voor het Configureren van Globale Machtigingen:
1. **Naar Globale Machtigingen Navigeren**:
   - Ga naar **Jira-beheer** > **Systeem** > **Globale Machtigingen**.

2. **Machtigingen Bewerken**:
   - Gebruik de knop **Rechten Toewijzen** om globale machtigingen zoals **Jira-beheerders** of **Bekijk Gebruikers** toe te wijzen aan specifieke gebruikers of groepen.

3. **Bestaande Machtigingen Controleren**:
   - Controleer welke gebruikers of groepen al zijn toegewezen aan globale rollen zoals **Systeembeheerder** of **Jira Software Beheerder**.

---

### **6. Issue-beveiliging**

**Issue-beveiliging** regelt wie specifieke issues kan zien en bewerken.

#### Stapsgewijze Handleiding voor het Instellen van Issue-beveiliging:
1. **Maak een Issue-beveiligingsschema**:
   - Ga naar **Jira-beheer** > **Problemen** > **Issue-beveiligingsschema's**.
   - Klik op **Issue-beveiligingsschema Toevoegen**, geef het een naam en beschrijving.

2. **Beveiligingsniveaus Definiëren**:
   - Na het maken van het schema, klik op **Beveiligingsniveau Toevoegen**.
   - Geef het niveau een naam (bijv. Vertrouwelijk) en kies welke rollen/groepen toegang hebben.

3. **Beveiligingsschema Toepassen op een Project**:
   - Ga naar **Projectinstellingen** > **Issue-beveiliging**, selecteer het beveiligingsschema dat je hebt gemaakt.
   - Pas het beveiligingsschema toe op issues op basis van rollen of groepen.

---

### **7. Machtigingsschema's vs. Workflow Machtigingen**

Workflow-machtigingen bepalen wie issues kan overdragen naar verschillende statussen binnen een project.

#### Stapsgewijze Handleiding voor het Instellen van Workflow Machtigingen:
1. **Workflow Bewerken**:
   - Ga naar **Jira-beheer** > **Problemen** > **Workflows**.
   - Selecteer de workflow die je wilt bewerken en klik op **Bewerken**.

2. **Machtigingen voor Overgangen Instellen**:
   - Klik op een overgang (bijv. van **In Progress** naar **Done**).
   - Onder het tabblad **Voorwaarden** kun je instellen wie de overgang mag uitvoeren (bijv. **Ontwikkelaars**).

3. **Workflow Toepassen op een Project**:
   - Na het bewerken van de workflow, ga naar **Projectinstellingen** > **Workflows**.
   - Wijs de workflow toe aan het project.

---

### **8. Rechten voor Geavanceerde Gebruiken Aanpassen**

Jira biedt de mogelijkheid om aangepaste machtigingen te maken voor geavanceerde toepassingen, zoals het beperken van toegang tot specifieke delen van het project of aangepaste velden.

#### Stapsgewijze Handleiding voor het Aanpassen van Rechten:
1. **Aangepaste Machtigingen Maken**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Kies een schema en klik op **Machtigheid Toevoegen** om aangepaste machtigingen te maken voor zaken zoals **Beheer Aangepaste Velden** of **Bekijk Workflow-overgangen**.

2. **Gebruik Voorwaarden in Workflows**:
   - In de workflow-editor kun je **Voorwaarden** gebruiken om in te stellen wie bepaalde acties kan uitvoeren, op basis van aangepaste criteria.

---

### **9. Rechten Beheren in Jira Service Management**

Jira Service Management heeft speciale rechten die betrekking hebben op klanten en service desk-agenten.

#### Stapsgewijze Handleiding voor het Beheren van Service Desk Rechten:
1. **Rechten Toewijzen aan Service Desk Rollen**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Wijs rechten toe zoals **Verzoeken Maken** en **Reageren op Verzoeken** aan rollen zoals **Service Desk Agenten**.

2. **Configureren van Klantenportal Rechten**:
   - Ga naar **Projectinstellingen** > **Klantenmachtigingen**, stel in wie verzoeken kan indienen en wie toegang heeft tot het klantenportaal.

3. **Wachtrijen Beheren**:
   - Ga naar **Projectinstellingen** > **Wachtrijen**.
   - Configureer wachtrijen op basis van probleemtypes of andere criteria, en wijs rechten toe aan rollen voor toegang tot specifieke wachtrijen.

---

### **10. Problemen met Rechten Oplossen**

Wanneer machtigingen verkeerd zijn ingesteld, kan dit leiden tot toegangsfouten, dus het is belangrijk om problemen met rechten te verhelpen.

#### Stapsgewijze Handleiding voor het Oplossen van Rechtenproblemen:
1. **Audit van Machtigingswijzigingen**:
   - Ga naar **Jira-beheer** > **Systeem** > **Auditlog**.
   - Bekijk de logboeken om recente wijzigingen in machtigingen of roltoewijzingen te zien die mogelijk problemen veroorzaken.

2. **Machtigingsschema Controleren**:
   - Ga naar **Jira-beheer** > **Problemen** > **Machtigingsschema's**.
   - Controleer of de machtigingen correct zijn toegewezen aan de juiste rollen/groepen.

3. **Gebruikers Groep Lidmaatschap Verifiëren**:
   - Ga naar **Jira-beheer** > **Gebruikersbeheer**.
   - Controleer of gebruikers in de juiste groepen of rollen zitten, aangezien dit hun toegang bepaalt.

---

Door deze stapsgewijze instructies te volgen, kun je effectief de rechten en machtigingen in Jira beheren en ervoor zorgen dat teamleden de juiste toegang en beveiliging hebben.
