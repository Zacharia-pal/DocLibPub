# **Documentation des Rôles et Autorisations dans Jira Service Management**

## **1. Vue d’ensemble**

Cette documentation fournit une vue complète des rôles disponibles dans **Jira Service Management** ainsi que leurs autorisations respectives. Elle inclut également une explication de la gestion des **autorisations d’automatisation**, distincte des autorisations classiques liées aux tickets. L’objectif est d’associer chaque rôle au bon niveau d’accès en fonction des besoins des utilisateurs, et de fournir des lignes directrices pour la gestion des règles d’automatisation.

---

## **2. Correspondance des Rôles et Autorisations**

Chaque rôle dans Jira Service Management possède des autorisations spécifiques selon les actions : consultation de projets, gestion de workflows, etc. Voici le détail des autorisations associées à chaque rôle.

---

### **Rôle 1 : Administrateur Produit**

- **Privilèges complets d’administration** (Super utilisateur)
- **Autorisations :**
  - ✅ **Administrer les projets** : Peut gérer les paramètres et configurations des projets.
  - ✅ **Gérer les mises en page des tickets** : Peut modifier l’apparence des tickets.
  - ✅ **Modifier les workflows** : Peut créer et modifier des workflows.
  - ✅ **Autres autorisations** : Accès à toutes les fonctions d’administration de Jira.
  
**Résumé** : L’administrateur produit a un contrôle total sur les projets et paramètres Jira. Il peut effectuer toute action administrative dans Jira Service Management.

---

### **Rôle 2 : Administrateur Utilisateurs**

- **Objectif principal** : Gestion des utilisateurs et contrôle des accès
- **Autorisations :**
  - ✅ **Gérer les observateurs** : Peut ajouter ou modifier les observateurs des tickets.
  - ✅ **Voir les votants et observateurs** : Peut consulter les personnes votant ou observant un ticket.
  - ✅ **Paramètres liés aux utilisateurs** : Peut gérer les droits d’accès et préférences utilisateur.

**Résumé** : Ce rôle gère les droits et la visibilité des utilisateurs dans les projets Jira. Il ne dispose probablement pas des droits complets d’administration de projet.

---

### **Rôle 3 : Client**

- **Objectif principal** : Accès via le portail uniquement
- **Autorisations :**
  - ✅ **Aucune autorisation projet** : Pas d’accès direct aux projets ou tickets dans l’interface Jira.
  - ✅ **Accès au portail** : Peut créer et consulter des tickets uniquement via le portail client.

**Résumé** : Le rôle client est limité à l’utilisation du portail de service, sans accès à l’interface principale de Jira.

---

### **Rôle 4 : Support Tickets**

- **Objectif principal** : Gestion et traitement des tickets
- **Autorisations :**
  - ✅ **Parcourir les projets** : Peut consulter les projets et leurs tickets.
  - ✅ **Travailler sur les tickets** : Peut intervenir sur les tickets assignés.
  - ✅ **Ajouter des commentaires** : Peut commenter les tickets.
  - ✅ **Modifier ses propres commentaires** : Peut modifier ses propres commentaires.
  - ✅ **Ajouter des pièces jointes** : Peut joindre des fichiers aux tickets.
  - ✅ **Modifier ses propres pièces jointes** : Peut les modifier.
  - ✅ **Modifier ses propres journaux de travail** : Peut ajuster ses temps de travail saisis.

**Résumé** : Le rôle Support Tickets se concentre sur l’interaction avec les tickets (commentaires, pièces jointes, journaux), pour aider à la résolution des demandes.

---

### **Rôle 5 : Adaptation Projet**

- **Objectif principal** : Gestion des workflows et automatisations
- **Autorisations :**
  - ✅ **Modifier les workflows** : Peut créer/modifier des workflows.
  - ✅ **Voir les outils de développement** : Accès aux outils liés au développement.
  - ✅ **Voir les données agrégées** : Accès aux données consolidées du projet.
  - ✅ **Gérer les sprints** : Peut créer et gérer les sprints.
  - ✅ **Supprimer/modifier ses propres commentaires et journaux** : Contrôle sur ses contributions.
  - ✅ **Supprimer toutes les pièces jointes et journaux** : Peut effectuer un nettoyage complet.

**Résumé** : Ce rôle permet de gérer les processus et automatisations du projet, incluant la planification agile.

---

### **Rôle 6 : Admin Utilisateur Projet**

- **Objectif principal** : Gestion des utilisateurs et de certains aspects projets
- **Autorisations :**
  - ✅ **Gérer les observateurs** : Peut les ajouter ou retirer.
  - ✅ **Voir les votants et observateurs** : Consultation des suivis.
  - ✅ **Administrer les projets** : Peut effectuer certaines tâches administratives.
  - ✅ **Gérer la mise en page des tickets** : Peut organiser l’affichage des informations dans les tickets.

**Résumé** : Ce rôle combine la gestion des utilisateurs avec des fonctions d’administration limitées sur les projets.

---

### **Rôle 7 : Observateur des Adaptations**

- **Objectif principal** : Visualisation des workflows et données, sans modification
- **Autorisations :**
  - ✅ **Voir les workflows (lecture seule)** : Accès en lecture uniquement.
  - ✅ **Voir les données agrégées** : Vue d’ensemble sur le projet.
  - ✅ **Parcourir les projets** : Lecture seule du contenu projet.

**Résumé** : Rôle en lecture seule pour observer les processus et données projet sans aucun droit d’édition.

---

### **Rôle 8 : Approbateur**

- **Objectif principal** : Donner des validations et du feedback
- **Autorisations :**
  - ✅ **Voir les votants et observateurs** : Pour prendre des décisions éclairées.
  - ✅ **Ajouter des commentaires** : Souvent pour valider ou demander des modifications.
  - ❌ **Aucune modification possible** : Ne peut modifier ou supprimer des éléments.
  - ❌ **Aucun droit d’administration projet** : Limité à son rôle d’approbateur.

**Résumé** : Ce rôle sert uniquement à approuver des demandes, sans droit de modification ou d’administration.

---

## **3. Schéma d’Autorisations Suggéré par Rôle**

### **Tableau des Autorisations par Rôle**

> **Ce tableau n’est plus à jour !** Une mise à jour est nécessaire.

---

## **4. Autorisations d’Automatisation**

Les droits liés à l’**automatisation** sont gérés **à part** du schéma standard d’autorisations. Ils dépendent principalement des **rôles globaux** ou de **l’appartenance aux rôles de projet**, plutôt que des autorisations d’issue.

### **Détail des Autorisations d’Automatisation**

1. **Rôles globaux / Système Jira** :
   - Pour gérer les règles d’automatisation globales ou spécifiques à un projet, un utilisateur doit être **Administrateur Jira** ou **Administrateur du Projet**.

2. **Rôles projet + règles d’automatisation** :
   - Même si un utilisateur voit les règles, il ne pourra les modifier ou créer que s’il est administrateur du projet ou s’il dispose d’une autorisation explicite dans la configuration de la règle.

3. **Propriétaire de la règle & journaux d’audit** :
   - Le propriétaire de la règle influence la capacité des autres à la modifier. Si le propriétaire n’a pas les droits suffisants, la règle peut échouer.

### **Rôles et Besoins Spécifiques pour l’Automatisation** :

| **Droit d’Automatisation**     | **Qui a besoin de quoi**                                   |
|-------------------------------|-------------------------------------------------------------|
| **Voir les automatisations**  | Rôle 7 (Observateur des Adaptations) a besoin de **Parcourir les projets** + **Voir les outils de développement** |
| **Modifier les automatisations** | Rôle 5 (Adaptation Projet) a besoin de **droits d’administration projet** |

---

## **5. Conclusion**

Cette documentation fournit une structure claire pour comprendre et attribuer les autorisations dans Jira Service Management. En alignant les rôles aux bonnes autorisations, vous garantissez un contrôle d’accès adapté, une gestion fluide des workflows, et une meilleure supervision des automatisations.
