### **Guide étape par étape pour créer des rôles et attribuer des permissions dans Jira**

#### **1. Comprendre les Rôles dans Jira**

Dans Jira, les **rôles** sont utilisés pour attribuer des permissions spécifiques aux utilisateurs au sein d'un projet. Ces rôles déterminent ce qu'un utilisateur peut faire dans un projet, comme créer, modifier ou transférer des tickets.

**Types de rôles principaux** :
- **Administrateurs de projet** : Accès complet pour configurer les paramètres du projet et gérer les permissions.
- **Développeurs** : Utilisateurs qui peuvent travailler sur des tickets, les transférer et parfois gérer les versions et les sprints.
- **Testeurs** : Généralement des utilisateurs ayant des droits limités, leur permettant de voir et tester les tickets.
- **Utilisateurs** : Utilisateurs de base ayant des permissions pour visualiser et commenter les tickets.

#### **2. Créer des Rôles Personnalisés dans Jira**

Pour créer et gérer des rôles, vous devez avoir des droits d'**administrateur Jira**.

##### **Étapes pour créer des rôles personnalisés** :
1. **Accédez aux paramètres des rôles de projet** :
   - Allez dans **Administration Jira** (cliquez sur l'icône en forme de rouage en haut à droite) > **Système**.
   - Dans la section **Sécurité**, cliquez sur **Rôles de projet**.
   
2. **Ajouter un nouveau rôle** :
   - Sur la page **Rôles de projet**, cliquez sur **Ajouter un rôle de projet**.
   - Entrez un **Nom du rôle** (par exemple "QA Engineer", "Product Owner") et une **Description** (facultative).
   - Cliquez sur **Ajouter** pour créer le nouveau rôle.

#### **3. Attribuer des rôles aux utilisateurs dans un projet**

Une fois que vous avez créé des rôles, vous devez les attribuer à des utilisateurs spécifiques dans un projet.

##### **Étapes pour attribuer des rôles aux utilisateurs** :
1. **Allez dans les paramètres du projet** :
   - Naviguez vers le projet dans lequel vous souhaitez attribuer des rôles.
   - Dans la barre latérale gauche, cliquez sur **Paramètres du projet** > **Utilisateurs et rôles**.

2. **Ajouter des utilisateurs aux rôles** :
   - Sur la page **Utilisateurs et rôles**, vous verrez une liste de tous les rôles du projet.
   - Cliquez sur **Gérer les rôles**, puis sous chaque rôle, cliquez sur **Ajouter des utilisateurs au rôle**.
   - Recherchez l'utilisateur par nom ou groupe, puis cliquez sur **Ajouter** pour l'attribuer à ce rôle.
   - Vous pouvez attribuer plusieurs utilisateurs ou groupes au même rôle.

---

### **4. Attribuer des permissions aux rôles**

Une fois que vous avez créé des rôles, vous pouvez définir les permissions qui seront attribuées aux utilisateurs dans chaque rôle. Les permissions dans Jira sont attribuées via des **schémas de permissions**.

#### **Types de permissions dans Jira** :
- **Permissions globales** : Permissions qui s'appliquent à l'ensemble de l'instance Jira (par exemple, les administrateurs Jira).
- **Permissions de projet** : Permissions spécifiques aux projets (par exemple, créer des tickets, attribuer des tickets).
- **Permissions sur les tickets** : Permissions qui régissent les actions sur les tickets (par exemple, modifier, commenter, résoudre).
- **Permissions de workflow** : Permissions pour les transitions entre les différents états du workflow.

#### **Étapes pour attribuer des permissions aux rôles** :

##### **1. Créer ou modifier un schéma de permissions** :
1. **Accédez aux schémas de permissions** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   
2. **Créer un nouveau schéma** (facultatif) :
   - Cliquez sur **Ajouter un schéma de permissions**.
   - Donnez un nom au schéma (par exemple "Permissions du projet logiciel").
   
3. **Modifier un schéma existant** :
   - Si vous souhaitez modifier un schéma existant, cliquez sur **Permissions** à côté du schéma que vous voulez éditer.

4. **Attribuer des permissions aux rôles** :
   - Cliquez sur **Permissions** dans le schéma que vous souhaitez modifier.
   - Cliquez sur **Ajouter une permission** en haut de la page.
   - Dans le menu déroulant, choisissez la **Permission** que vous souhaitez attribuer (par exemple, **Parcourir les projets**, **Attribuer des tickets**, **Créer des tickets**, etc.).
   - Dans la section **Accorder la permission à**, choisissez **Rôle de projet** et sélectionnez le rôle auquel vous souhaitez attribuer cette permission.
   - Cliquez sur **Accorder** pour attribuer la permission.

##### **2. Types de permissions que vous pouvez attribuer** :
Voici quelques permissions que vous pouvez attribuer aux rôles de projet :
- **Parcourir les projets** : Permet à un utilisateur de voir le projet.
- **Créer des tickets** : Permet à un utilisateur de créer des tickets dans le projet.
- **Attribuer des tickets** : Permet à un utilisateur d'attribuer des tickets à d'autres utilisateurs.
- **Modifier les tickets** : Permet à un utilisateur de modifier les tickets.
- **Supprimer les tickets** : Permet à un utilisateur de supprimer des tickets.
- **Travailler sur des tickets** : Permet à un utilisateur de faire progresser un ticket dans le workflow.
- **Résoudre des tickets** : Permet à un utilisateur de fermer ou résoudre des tickets.
- **Clore des tickets** : Permet à un utilisateur de marquer un ticket comme fermé.
- **Transférer des tickets** : Permet à un utilisateur de déplacer un ticket d'un statut à un autre dans le workflow.
- **Gérer les sprints** : Permet à un utilisateur de gérer les sprints (spécifique aux projets Scrum).
- **Voir les outils de développement** : Permet à un utilisateur de voir les commits de code, les branches, les pull requests, etc., liés aux tickets (spécifique aux projets logiciels).
- **Administrer des projets** : Permet à un utilisateur de contrôler les paramètres du projet et les permissions (généralement attribué aux administrateurs de projet).

#### **Étapes pour appliquer un schéma de permissions à un projet** :
1. **Allez dans les paramètres du projet** :
   - Naviguez vers votre projet, puis cliquez sur **Paramètres du projet** dans la barre latérale gauche.
   
2. **Appliquez le schéma de permissions** :
   - Dans la section **Permissions** des paramètres du projet, sélectionnez **Actions** > **Utiliser un autre schéma de permissions**.
   - Choisissez le schéma que vous souhaitez appliquer et cliquez sur **Associer**.

---

### **5. Attribuer des permissions dans le workflow**

En plus des schémas de permissions, vous pouvez également gérer des permissions au niveau du workflow, permettant ainsi de contrôler qui peut transférer des tickets entre les différents statuts du workflow.

#### **Étapes pour attribuer des permissions dans les workflows** :

1. **Modifier un workflow** :
   - Allez dans **Administration Jira** > **Problèmes** > **Workflows**.
   - Sélectionnez le workflow que vous souhaitez modifier et cliquez sur **Modifier**.

2. **Ajouter des conditions de workflow** :
   - Cliquez sur une transition entre les statuts (par exemple, de **À faire** à **En cours**).
   - Sous l'onglet **Conditions**, ajoutez une **Condition** qui spécifie qui peut effectuer cette transition. Par exemple :
     - **Utilisateur dans le rôle de projet** : Limiter la transition aux utilisateurs dans un rôle spécifique (par exemple, seuls les développeurs peuvent déplacer un ticket vers **En cours**).

3. **Ajouter des fonctions post-transition** (facultatif) :
   - Vous pouvez également ajouter des **Fonctions post-transition** pour effectuer certaines actions automatiquement lorsque le ticket passe par une transition, telles que l'attribution d'un ticket à un utilisateur spécifique ou l'envoi d'une notification.

4. **Publier le workflow** :
   - Après avoir effectué vos modifications, cliquez sur **Publier** pour appliquer le workflow à votre projet.

---

### **6. Vérifier et résoudre les problèmes de permissions**

Après avoir configuré les rôles et les permissions, il est important de s'assurer que tout fonctionne comme prévu. Jira propose un **Aide à la permission** pour vous aider à résoudre les problèmes.

#### **Utiliser l'Aide à la permission** :
1. **Accédez à l'Aide à la permission** :
   - Allez dans **Administration Jira** > **Système** > **Aide à la permission**.
   
2. **Vérifier les permissions pour un utilisateur spécifique** :
   - Entrez le nom d'utilisateur et sélectionnez le projet et l'action (par exemple, créer un ticket, afficher un ticket).
   - L'Aide à la permission vous expliquera pourquoi l'utilisateur a ou non la permission requise.

3. **Audit des permissions** :
   - Vous pouvez également utiliser les **Logs d'audit** pour suivre les modifications des permissions et des rôles.
   - Allez dans **Administration Jira** > **Système** > **Logs d'audit** et consultez les logs des modifications des permissions.

---

### **7. Bonnes pratiques pour la gestion des rôles et des permissions**

- **Minimisez le nombre de rôles** : Utilisez le moins de rôles possible pour éviter toute confusion. Créez des rôles qui reflètent les fonctions réelles dans un projet (par exemple, Développeur, Testeur, Chef de projet).
- **Utilisez des schémas de permissions pour plus d'efficacité** : Si vos projets ont des besoins similaires, créez un schéma de permissions qui peut être appliqué à plusieurs projets, au lieu de configurer manuellement les permissions pour chaque projet.
- **Limitez les permissions d'administrateur** : Attribuez les rôles **Administrateur de projet** et **Administrateur Jira** uniquement à ceux qui en ont besoin. Ces rôles offrent un contrôle total sur les projets et Jira lui-même.

---

En suivant ce guide, vous pourrez efficacement créer des rôles, attribuer des permissions et gérer l'accès dans Jira, assurant ainsi que les utilisateurs disposent du bon niveau d'accès pour leurs tâches. Ce processus aide à maintenir la sécurité et à garantir une gestion fluide des projets.
