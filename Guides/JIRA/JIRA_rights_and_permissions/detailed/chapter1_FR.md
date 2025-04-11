# **Documentation Complète et Détaillee : Permissions, Rôles et Configuration dans Jira Service Management (JSM)**

## **1. Aperçu de Jira Service Management (JSM)**

Jira Service Management (JSM) est une plateforme populaire pour la gestion des services informatiques (ITSM) qui s'intègre avec Jira Software. Elle permet aux équipes de gérer des demandes, des incidents, des changements et des problèmes. Dans JSM, les permissions et les rôles sont essentiels pour gérer l'accès à différentes parties du système, telles que la gestion des projets, la configuration des tableaux, le traitement des demandes des clients, etc.

---

## **2. Permissions dans Jira Service Management**

Les permissions dans Jira sont utilisées pour déterminer quelles actions les utilisateurs peuvent effectuer dans un projet ou dans une instance Jira plus large. Elles peuvent être appliquées à la fois au **niveau du projet** et au **niveau des issues**.

### **2.1 Permissions au Niveau du Projet**
Les **permissions de projet** déterminent qui peut effectuer quelles actions au sein d'un projet spécifique. Voici quelques permissions de projet courantes :

#### Permissions de Projet Courantes :
| **Permission**             | **Description**                                         |
|----------------------------|---------------------------------------------------------|
| **Browse Projects**         | Permet de consulter les projets et les issues associées. |
| **Create Issues**           | Permet de créer de nouvelles issues.                   |
| **Assign Issues**           | Permet d'assigner des issues à d'autres personnes.     |
| **Manage Sprints**          | Permet de gérer les sprints (pour les tableaux Scrum).  |
| **Service Project Agent**   | Permet d'interagir avec les clients et d'accéder aux fonctionnalités du Service Management. |
| **View Development Tools**  | Permet de voir les informations liées au développement sur l'issue, comme les commits, les builds et autres. |
| **Transition Issues**       | Permet de faire passer les issues d'une étape à l'autre dans le flux de travail. |
| **Close Issues**            | Permet de fermer les issues une fois résolues.        |
| **Set Issue Security**      | Permet de définir le niveau de sécurité des issues pour que seules certaines personnes puissent les voir. |

#### **Scénario Exemple :**
Si un utilisateur dispose de la permission **Browse Projects**, il peut **voir les issues** d'un projet mais ne pourra pas les modifier ni changer leur statut, à moins d'avoir des permissions supplémentaires telles que **Edit Issues** ou **Transition Issues**.

---

### **2.2 Permissions au Niveau des Issues**
Les **permissions des issues** déterminent qui peut effectuer quelles actions sur des issues spécifiques dans le système. Par exemple :

| **Permission**             | **Description** |
|----------------------------|-----------------|
| **Assignable User**         | Définit qui peut être affecté à des issues. |
| **Edit Issues**             | Permet de modifier des issues existantes. |
| **Delete Issues**           | Permet de supprimer des issues. |
| **Move Issues**             | Permet de déplacer des issues entre des projets ou des workflows. |
| **Resolve Issues**          | Permet de résoudre et de réouvrir des issues. |
| **Work On Issues**          | Permet d'enregistrer du travail effectué sur une issue (utile pour le suivi du temps). |

#### **Scénario Exemple :**
Si un utilisateur a la permission **Assignable User**, il peut être affecté à des **issues**, mais ne pourra pas les modifier ni changer leur statut à moins qu'il ne dispose aussi des permissions **Edit Issues** ou **Transition Issues**.

---

## **3. Rôles dans Jira Service Management**

Les rôles dans Jira sont principalement utilisés pour définir **quelles actions** les utilisateurs peuvent effectuer dans un projet spécifique ou à l'échelle globale (sur plusieurs projets).

### **3.1 Rôles de Projet**
Les **rôles de projet** définissent les responsabilités d'un utilisateur dans un projet spécifique. Voici quelques rôles de projet courants :

| **Rôle de Projet**          | **Description** |
|-----------------------------|-----------------|
| **Project Admin**           | Contrôle administratif complet au sein du projet, y compris la configuration des workflows, des tableaux et des permissions. |
| **Service Desk Agent**      | Traite les demandes des clients, résout les tickets et gère le support. |
| **Developer**               | Travaille sur les tâches techniques liées aux issues (par exemple, travail de développement). |
| **Requester**               | Client ou utilisateur externe qui soumet une demande et qui peut visualiser et commenter les issues. |

#### **Scénario Exemple :**
- **Project Admin** : Un utilisateur avec ce rôle peut **configurer le projet**, **modifier les permissions** et **gérer les tableaux**.
- **Service Desk Agent** : Un utilisateur avec ce rôle peut **gérer les demandes des clients**, **résoudre les tickets** et **communiquer avec les clients**.
- **Requester** : Un client soumet une demande mais ne peut pas modifier ou consulter les informations internes.

---

### **3.2 Rôles Produit**
Les rôles **produit** définissent l'accès aux **produits** (par exemple, Jira Software, Jira Service Management) au niveau de toutes les sites.

| **Rôle Produit**            | **Description** |
|-----------------------------|-----------------|
| **Org Admin**               | Contrôle administratif complet de l'organisation entière (peut gérer tous les utilisateurs, produits, facturation et paramètres globaux). |
| **Site Admin**              | Gère les paramètres au niveau du site, et attribue les permissions pour les produits comme Jira Service Management. |
| **Product Admin**           | Configure les paramètres, les permissions et les workflows pour un produit spécifique (par exemple, JSM ou Jira Software). |
| **User Access Admin**       | Gère l'accès des utilisateurs à des produits spécifiques dans l'organisation. |

#### **Scénario Exemple :**
- **Org Admin** : Un utilisateur avec ce rôle peut gérer les **paramètres de sécurité**, **l'intégration SSO**, **les licences** et **les facturations** pour l'organisation entière.
- **Site Admin** : Un utilisateur peut gérer les **paramètres Jira Service Management**, configurer les **projets** et **assigner des rôles** aux utilisateurs dans le système Jira de l'organisation.

---

## **4. Gestion des Clients dans Jira Service Management**

### **4.1 Qui Sont les Clients dans JSM ?**
Les **clients** dans JSM sont des **utilisateurs externes** (par exemple, des clients, des partenaires ou des employés internes) qui soumettent **des demandes** et **interagissent avec les agents**. Ils accèdent généralement à un **portail client** pour soumettre, suivre et commenter leurs tickets.

#### **Points Clés à Propos des Clients :**
- **Gratuit** : Les clients n'ont pas besoin de licence payante. Ils sont **illimités** dans les plans **Standard**, **Premium** et **Enterprise** de JSM.
- **Portail Client** : Les clients communiquent via le portail, où ils peuvent soumettre de nouvelles demandes, suivre leurs issues et ajouter des commentaires.
- **Participants à la Demande** : Les clients peuvent être ajoutés en tant que **participants** à une demande, ce qui leur donne plus de visibilité et leur permet d'interagir avec l'issue.

#### **Scénario Exemple :**
**Patronale Life** a entre **150 et 500 clients** qui interagissent avec leur instance Jira Service Management. Ces clients peuvent **soumettre des demandes de support**, consulter leurs **issues** et communiquer via le **portail client**.

**Mathias**, un client de Patronale Life, soumet une demande concernant un problème de facturation. **Erika** et **Dieter**, d'autres clients, sont ajoutés en tant que **participants** à la demande, afin qu'ils puissent voir l'issue et ajouter des commentaires pendant que celle-ci est traitée.

---

## **5. Org vs Site : Comprendre la Différence**

### **5.1 Niveau Organisation (Org)**
L'**organisation (Org)** est le plus haut niveau dans Jira. Elle gère tous les utilisateurs, les paramètres de domaine, la facturation et l'accès aux produits à travers tous les sites.

| **Org Admin** | Peut gérer les utilisateurs, les produits, les paramètres de sécurité et la facturation pour l'organisation entière. |
|---------------|-------------------------------------------------------------|

#### **Scénario Exemple :**
**Patronale Life** dispose d'un **Org Admin** global qui gère les paramètres de tous leurs produits Jira. L'**Org Admin** configure l'intégration **SSO** pour tous les membres de l'équipe, gère l'accès des utilisateurs et s'assure de la facturation appropriée pour l'organisation.

### **5.2 Niveau Site**
Un **site** représente une instance Jira individuelle (par exemple, `patronalelife.atlassian.net`). Un site peut contenir plusieurs projets, et chaque site est géré par un **Site Admin**.

| **Site Admin** | Peut gérer les paramètres pour un site spécifique de Jira (par exemple, `patronalelife.atlassian.net`), configurer les produits et attribuer des utilisateurs à l'accès au site. |
|----------------|-------------------------------------------------------------|

#### **Scénario Exemple :**
- L'**Org Admin** crée un **Site Admin** pour `patronalelife.atlassian.net` (le site Jira pour l'équipe de support de Patronale Life).
- Le **Site Admin** gère les paramètres de **Jira Service Management**, crée et gère les **projets**, **les permissions** et assigne des **rôles** aux utilisateurs au sein de l'organisation.

---

## **6. Permissions des Administrateurs pour Créer des Projets et Configurer des Tableaux**

### **6.1 Qui Peut Créer des Projets Jira ?**
- **Jira Admins (Product Admins)** : Peuvent créer des projets **company-managed** et **team-managed** à travers toute l'instance Jira.
- **Site Admins** : Peuvent créer des projets si elles ont les permissions nécessaires.

#### **Scénario Exemple :**
Un **Jira Admin** chez **Patronale Life** crée un projet **company-managed** pour gérer les demandes de support client concernant les assurances santé. Ce projet est structuré avec des **workflows** et des **types d'issues** personnalisés pour faciliter le traitement des demandes des clients.

---

### **6.2 Qui Peut Configurer des Tableaux ?**
- **Project Admins** : Peuvent configurer des **tableaux team-managed** dans leur projet (par exemple, les colonnes, les filtres).
- **Jira Admins (Product Admins)** : Peuvent configurer des **tableaux company-managed**, y compris la gestion des filtres, des workflows et des permissions associées aux tableaux.

#### **Scénario Exemple :**
- Un **Project Admin** chez **Patronale Life** gère un tableau pour l'équipe de **Support Client** (projet team-managed), et définit les colonnes pour **À faire**, **En cours** et **Terminé** pour suivre les demandes de support.
- Un **Jira Admin** configure un tableau pour l'équipe de **Développement** (projet company-managed), incluant des **swimlanes**, des **filtres rapides** et des **permissions de tableau** pour gérer le développement des fonctionnalités pour un nouveau portail d'assurances santé.

---

## **7. Clients Illimités dans le Plan Standard JSM**

Le **Plan Standard Jira Service Management** permet des **clients illimités**, ce qui signifie que vous pouvez ajouter autant de clients que nécessaire sans frais supplémentaires.

- **Clients illimités** peuvent soumettre des demandes, consulter leurs issues et interagir avec les agents.
- **Seuls les agents** (membres internes de l'équipe) ont besoin d'une licence payante.

#### **Scénario Exemple :**
**Patronale Life** a **300 clients** dans le **Plan Standard JSM**. Ces clients peuvent **soumettre des demandes**, consulter leurs **issues** via le **Portail Client** et communiquer avec les agents. L'organisation ne paye pas de frais supplémentaires pour avoir un nombre illimité de clients, ce qui rend le **Plan Standard** un choix rentable pour la gestion de leur service client.

---

## **8. Conclusion**

Ce document fournit un guide détaillé pour comprendre les **permissions**, **rôles**, **gestion des clients** et **responsabilités des administrateurs** dans Jira Service Management. En comprenant ces concepts et la manière dont ils interagissent, **Patronale Life** peut gérer efficacement ses projets JSM, configurer les permissions correctement et s'assurer que les bons utilisateurs ont le bon accès.
