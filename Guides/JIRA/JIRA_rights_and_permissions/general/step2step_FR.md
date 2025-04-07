### **étape par étape FR**

### **1. Vue d'ensemble des permissions Jira**

Les **permissions dans Jira** sont divisées en :
- **Permissions globales** : Appliquées à l'ensemble de l'instance Jira.
- **Permissions de projet** : Appliquées au sein de projets spécifiques.
- **Permissions d'issue** : Liées aux actions sur des issues individuelles.

#### Guide étape par étape pour configurer les permissions :
1. **Accéder aux paramètres de permissions** :
   - **Administrateur Jira** : Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Vous pouvez soit créer un nouveau schéma, soit modifier un schéma existant.

2. **Attribuer des permissions globales** :
   - Allez dans **Administration Jira** > **Système** > **Permissions globales**.
   - Ajoutez des utilisateurs/groupes aux rôles comme **Administrateurs Système**, **Administrateurs Jira** ou **Parcourir les utilisateurs**.

3. **Attribuer des permissions de projet** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Attribuez des permissions comme **Créer des issues**, **Assigner des issues**, **Voir des issues**, etc., aux utilisateurs ou groupes.

4. **Attribuer des permissions d'issue** :
   - Les permissions d'issue telles que **Éditer les issues** et **Faire passer les issues** sont configurées au sein des workflows, pas directement via le schéma de permissions, mais vous pouvez gérer l'accès via les paramètres de workflow.

---

### **2. Produits Jira et leurs permissions spécifiques**

Jira propose différents produits comme **Jira Software**, **Jira Service Management** et **Jira Work Management**, chacun ayant des types de permissions spécifiques.

#### Guide étape par étape pour configurer les permissions dans Jira Software :
1. **Attribuer des permissions dans Jira Software** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Modifiez le schéma et attribuez des permissions telles que **Gérer les sprints**, **Créer des versions** et **Voir les tableaux** aux rôles de projet appropriés.

#### Guide étape par étape pour configurer les permissions dans Jira Service Management :
1. **Gérer les permissions du service desk** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Attribuez des permissions liées aux portails clients et aux files d'attente, comme **Créer des demandes**, **Répondre aux demandes** et **Gérer les files d'attente**.

#### Guide étape par étape pour configurer les permissions dans Jira Work Management :
1. **Configurer les permissions des projets Business** :
   - Comme pour **Jira Software**, allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Attribuez des permissions pour des actions comme **Créer des issues**, **Faire passer des issues**, et **Gérer des issues**.

---

### **3. Schémas de permissions**

Les **schémas de permissions** définissent ce que les utilisateurs peuvent faire dans un projet, comme créer des issues ou assigner des tâches.

#### Guide étape par étape pour créer/modifier des schémas de permissions :
1. **Créer un nouveau schéma de permissions** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Cliquez sur **Ajouter un schéma de permissions**, donnez-lui un nom et une description.
  
2. **Attribuer des permissions aux rôles ou groupes** :
   - Sélectionnez un schéma de permissions et cliquez sur **Permissions**.
   - Utilisez l'option **Attribuer une permission** pour attribuer des permissions comme **Créer des issues**, **Assigner des issues**, ou **Voir des issues** à des rôles/groupes spécifiques.

3. **Appliquer un schéma de permissions à un projet** :
   - Allez dans **Paramètres du projet** > **Permissions**.
   - Sélectionnez le schéma de permissions souhaité dans le menu déroulant.

---

### **4. Rôles de projet**

Les **rôles de projet** vous permettent d'attribuer des ensembles différents de permissions aux utilisateurs en fonction de leur rôle dans un projet.

#### Guide étape par étape pour créer/gestion des rôles de projet :
1. **Créer des rôles de projet personnalisés** :
   - Allez dans **Administration Jira** > **Système** > **Rôles de projet**.
   - Cliquez sur **Ajouter un rôle de projet**, donnez-lui un nom (par exemple, Développeur, Testeur).

2. **Attribuer des utilisateurs aux rôles** :
   - Dans votre projet, allez dans **Paramètres du projet** > **Utilisateurs et rôles**.
   - Attribuez des utilisateurs aux rôles spécifiques (par exemple, un développeur au rôle **Développeur**).

3. **Attribuer des rôles aux permissions** :
   - Retournez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Attribuez des permissions aux rôles de projet appropriés (par exemple, **Développeurs** peuvent avoir la permission **Éditer des issues**).

---

### **5. Permissions globales**

Les **permissions globales** permettent aux utilisateurs d'accéder à des fonctions Jira au niveau global, comme l'administration système ou la consultation des profils des utilisateurs.

#### Guide étape par étape pour configurer des permissions globales :
1. **Naviguer vers les permissions globales** :
   - Allez dans **Administration Jira** > **Système** > **Permissions globales**.

2. **Modifier les permissions** :
   - Utilisez le bouton **Attribuer une permission** pour attribuer des permissions globales comme **Administrateurs Jira** ou **Voir les utilisateurs** à des utilisateurs ou groupes spécifiques.

3. **Vérifier les permissions existantes** :
   - Vérifiez quels utilisateurs ou groupes sont déjà affectés à des rôles globaux comme **Administrateur Système** ou **Administrateur Jira Software**.

---

### **6. Sécurité des issues**

La **sécurité des issues** contrôle la visibilité des issues, spécifiant qui peut voir des issues particulières.

#### Guide étape par étape pour configurer la sécurité des issues :
1. **Créer un schéma de sécurité des issues** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de sécurité des issues**.
   - Cliquez sur **Ajouter un schéma de sécurité des issues**, donnez-lui un nom et une description.

2. **Définir des niveaux de sécurité** :
   - Après avoir créé le schéma, cliquez sur **Ajouter un niveau de sécurité**.
   - Nommez le niveau (par exemple, Confidentiel), puis choisissez quels rôles/groupes auront accès.

3. **Appliquer un schéma de sécurité à un projet** :
   - Allez dans **Paramètres du projet** > **Sécurité des issues**, puis sélectionnez le schéma de sécurité que vous avez créé.
   - Appliquez le schéma de sécurité aux issues en fonction des rôles ou groupes.

---

### **7. Schémas de permissions vs permissions de workflow**

Les permissions de **workflow** sont étroitement liées à la manière dont les issues passent par les différentes étapes d'un projet.

#### Guide étape par étape pour configurer les permissions de workflow :
1. **Éditer un workflow** :
   - Allez dans **Administration Jira** > **Problèmes** > **Workflows**.
   - Sélectionnez le workflow à modifier, puis cliquez sur **Éditer**.

2. **Définir des permissions pour les transitions** :
   - Cliquez sur une transition (par exemple, de **En cours** à **Terminé**).
   - Sous l'onglet **Conditions**, spécifiez qui peut effectuer cette transition (par exemple, **Développeurs**).

3. **Appliquer le workflow à un projet** :
   - Une fois que vous avez terminé d’éditer le workflow, allez dans **Paramètres du projet** > **Workflows**.
   - Assignez le workflow au projet.

---

### **8. Personnalisation des permissions pour des cas d'utilisation avancés**

Il est possible de créer des permissions personnalisées pour répondre à des besoins plus avancés, comme limiter l'accès à des parties spécifiques d'un projet ou à des champs personnalisés.

#### Guide étape par étape pour personnaliser les permissions :
1. **Créer des permissions personnalisées** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Choisissez un schéma et cliquez sur **Ajouter une permission** pour créer des permissions personnalisées pour des choses comme **Gérer les champs personnalisés** ou **Voir les transitions de workflow**.

2. **Utiliser des conditions dans les workflows** :
   - Dans l’éditeur de workflow, vous pouvez utiliser des **Conditions** pour spécifier qui peut effectuer certaines actions en fonction de critères personnalisés.

---

### **9. Gérer les permissions dans Jira Service Management**

Jira Service Management a des permissions spécialisées liées aux clients et aux agents du service desk.

#### Guide étape par étape pour gérer les permissions du service desk :
1. **Attribuer des permissions aux rôles du service desk** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Attribuez des permissions comme **Créer des demandes** et **Répondre aux demandes** aux rôles comme **Agents du service desk**.

2. **Configurer les permissions du portail client** :
   - Allez dans **Paramètres du projet** > **Permissions clients**, définissez qui peut créer des demandes et qui peut voir le portail client.

3. **Gérer les files d'attente** :
   - Allez dans **Paramètres du projet** > **Files d'attente**.
   - Configurez les files d'attente en fonction des types d'issues ou d'autres critères, puis attribuez des permissions pour accéder à des files spécifiques.

---

### **10. Résolution des problèmes de permissions**

Les problèmes de permissions peuvent entraîner des erreurs d'accès, il est donc essentiel de résoudre les problèmes lorsque quelque chose ne va pas.

#### Guide étape par étape pour résoudre les problèmes de permissions :
1. **Auditer les modifications des permissions** :
   - Allez dans **Administration Jira** > **Système** > **Journal d'audit**.
   - Examinez les journaux pour voir les modifications récentes des permissions ou des attributions de rôles qui peuvent poser problème.

2. **Vérifier le schéma de permissions** :
   - Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
   - Vérifiez que les permissions sont correctement attribuées aux bons rôles/groupes.

3. **Vérifier l'appartenance aux groupes des utilisateurs** :
   - Allez dans **Administration Jira** > **Gestion des utilisateurs**.
   - Vérifiez que les utilisateurs sont dans les bons groupes ou rôles, car cela détermine leurs droits d'accès.

---

En suivant ces étapes, vous pouvez gérer efficacement les permissions dans Jira et garantir que vos membres d’équipe disposent de l’accès approprié et de la sécurité nécessaire.
