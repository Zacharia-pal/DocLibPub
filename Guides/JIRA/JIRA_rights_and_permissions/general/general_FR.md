### Guide Complet des Droits et Permissions dans Jira et ses Produits

Jira, l'outil populaire de gestion de projet d'Atlassian, propose un système de permissions flexible et détaillé qui permet aux administrateurs de contrôler l'accès à diverses fonctionnalités à travers différents produits (Jira Software, Jira Service Management, Jira Work Management, etc.). Comprendre comment gérer ces permissions est crucial pour garantir que les utilisateurs disposent du bon niveau d'accès pour accomplir leurs tâches tout en protégeant l'intégrité de vos données.

Ce guide couvre :

1. **Vue d'ensemble des permissions dans Jira**
2. **Les produits Jira et leurs permissions spécifiques**
3. **Schémas de permissions**
4. **Rôles de projet**
5. **Permissions globales**
6. **Sécurité des problèmes**
7. **Schémas de permissions vs Permissions de workflow**
8. **Personnalisation des permissions pour des cas d'utilisation avancés**
9. **Gestion des permissions dans Jira Service Management**
10. **Résolution des problèmes de permissions**

---

### 1. **Vue d'ensemble des permissions dans Jira**

Les permissions dans Jira déterminent qui peut accéder à des fonctionnalités spécifiques de Jira, effectuer certaines actions et modifier des problèmes, des projets ou des configurations. Les permissions sont généralement organisées en :

- **Permissions globales** : Elles s'appliquent à l'ensemble de l'instance Jira (par exemple, Administrateurs système, Administrateurs Jira).
- **Permissions de projet** : Elles s'appliquent à un projet spécifique (par exemple, Créer un problème, Modifier un problème).
- **Permissions de problème** : Permissions liées à des actions spécifiques au sein d'un problème (par exemple, Transitionner un problème, Ajouter des commentaires).

En plus des permissions, Jira utilise des **Rôles de projet** et des **Groupes** pour un contrôle plus précis.

---

### 2. **Les produits Jira et leurs permissions spécifiques**

Chacun des produits Jira—Jira Software, Jira Service Management et Jira Work Management—dispose d'un ensemble de permissions adaptées aux besoins des utilisateurs dans ce contexte.

#### **Permissions Jira Software**
Ces permissions permettent aux utilisateurs de gérer des projets de développement logiciel. Quelques exemples :
- **Créer des problèmes** : Permet aux utilisateurs de créer des problèmes (par exemple, histoires, bugs).
- **Gérer les sprints** : Permet aux utilisateurs de gérer les sprints dans des tableaux Scrum ou Kanban.
- **Gérer les versions** : Permet aux utilisateurs de créer, modifier et supprimer des versions/livrables.

#### **Permissions Jira Service Management**
Ces permissions sont destinées aux équipes de support informatique et de service client. Elles incluent :
- **Permissions clients** : Définissent qui peut consulter et soumettre des demandes dans le portail.
- **Gérer les files d'attente** : Permet aux utilisateurs de configurer et gérer les files d'attente du service desk.
- **Répondre aux demandes** : Permission de répondre aux demandes des clients dans la file d'attente.

#### **Permissions Jira Work Management**
Ces permissions sont axées sur la gestion de projet dans le domaine des affaires et sont similaires à Jira Software, mais simplifiées pour des utilisateurs non techniques. Les permissions courantes incluent :
- **Créer des problèmes** : Les utilisateurs peuvent créer des problèmes liés aux affaires (par exemple, tâches, to-do).
- **Transitionner des problèmes** : Les utilisateurs peuvent déplacer un problème à travers les étapes du workflow.

---

### 3. **Schémas de permissions**

Les **schémas de permissions** sont un ensemble de permissions associées à un projet. Ces schémas sont essentiels car ils définissent qui peut faire quoi dans le contexte d'un projet.

- **Attribuer des permissions** : Les administrateurs attribuent des permissions à des utilisateurs ou groupes spécifiques.
- **Types de permissions dans les schémas** : 
    - **Permissions de projet** (par exemple, Créer des problèmes, Assigner des problèmes, Voir des problèmes).
    - **Permissions de problème** (par exemple, Modifier des problèmes, Transitionner des problèmes).

**Étapes pour configurer un schéma de permissions :**
1. Allez dans **Administration Jira** > **Problèmes** > **Schémas de permissions**.
2. Sélectionnez le schéma à modifier ou créez un nouveau schéma.
3. Ajoutez ou supprimez des permissions pour différents rôles ou utilisateurs.

---

### 4. **Rôles de projet**

Les rôles de projet permettent d'affecter des utilisateurs à des tâches spécifiques liées au projet. Par exemple, un projet pourrait avoir des rôles comme **Chef de projet**, **Développeur**, et **Testeur**. Ces rôles sont ensuite associés à des permissions spécifiques dans le schéma de permissions.

- **Rôles par défaut** : Jira propose quelques rôles par défaut tels que :
    - **Administrateurs** : Peuvent gérer les configurations du projet, les permissions, etc.
    - **Développeurs** : Peuvent généralement travailler sur les problèmes et participer aux actions liées au développement.
    - **Utilisateurs** : Peuvent voir et commenter les problèmes.

- **Rôles personnalisés** : Vous pouvez créer des rôles personnalisés pour répondre aux besoins spécifiques de votre organisation.

---

### 5. **Permissions globales**

Les permissions globales s'appliquent à l'ensemble de l'instance Jira, et non à des projets individuels. Elles incluent des permissions comme :
- **Administrateurs Jira** : Accès complet pour configurer et administrer l'instance Jira.
- **Administrateurs système** : Niveau d'accès le plus élevé, y compris la configuration globale du système et l'accès à la base de données.
- **Parcourir les utilisateurs** : Permissions pour consulter les profils d'utilisateurs et les groupes.

**Étapes pour configurer les permissions globales :**
1. Allez dans **Administration Jira** > **Système** > **Permissions globales**.
2. Modifiez les rôles et utilisateurs/groupes en conséquence.

---

### 6. **Sécurité des problèmes**

Les **schémas de sécurité des problèmes** sont utilisés pour restreindre qui peut voir et interagir avec certains problèmes en fonction de leur niveau de sécurité.

- **Niveaux de sécurité** : Définissent qui peut voir certains problèmes en fonction de critères (par exemple, rôles ou groupes spécifiques).
- **Exemple** : Un problème peut être marqué comme "Confidentiel", et seuls les utilisateurs dans le rôle **Direction** peuvent le voir.

**Étapes pour configurer la sécurité des problèmes :**
1. Allez dans **Administration Jira** > **Problèmes** > **Schémas de sécurité des problèmes**.
2. Créez un schéma de sécurité et définissez des niveaux de sécurité.
3. Associez le schéma de sécurité à des projets spécifiques.

---

### 7. **Schémas de permissions vs Permissions de workflow**

Les **permissions de workflow** permettent de contrôler qui peut déplacer les problèmes d'un statut à un autre. Ces permissions sont essentielles pour gérer la progression des problèmes au sein du cycle de vie d'un projet.

- **Permissions de transition** : Définissent qui peut déplacer un problème d'un statut à un autre (par exemple, de "En cours" à "Terminé").
- **Conditions de workflow** : Des contrôles supplémentaires qui peuvent limiter qui peut effectuer certaines actions dans le workflow.

Celles-ci sont liées aux workflows utilisés dans un projet.

---

### 8. **Personnalisation des permissions pour des cas d'utilisation avancés**

Jira permet un réglage plus fin des permissions à l'aide de :
- **Schémas de permissions personnalisés** : Si vous avez plusieurs équipes avec des besoins différents, vous pouvez créer des schémas de permissions personnalisés.
- **Permissions avancées** : L'utilisation de champs personnalisés, de niveaux de sécurité des problèmes ou de transitions de workflow peut contrôler qui peut effectuer des actions spécifiques.

---

### 9. **Gestion des permissions dans Jira Service Management**

Pour Jira Service Management, les permissions régissent l'accès des agents internes et du portail client. Elles sont généralement gérées via :
- **Permissions clients** : Déterminent qui peut soumettre des demandes dans le portail.
- **Files d'attente** : Configurer les files d'attente et déterminer qui peut y accéder et y travailler.
- **Types de demandes** : Configurer les types de demandes pour permettre différents workflows et permissions selon le type de demande.

**Exemple** : Vous pourriez vouloir permettre à certains utilisateurs seulement de voir certaines files d'attente (par exemple, seuls certains agents peuvent travailler sur des incidents à haute priorité).

---

### 10. **Résolution des problèmes de permissions**

Lorsque les permissions sont mal configurées, cela peut entraîner des problèmes tels que :
- **Accès refusé** : Les utilisateurs ne peuvent pas accéder aux fonctionnalités dont ils ont besoin.
- **Utilisateurs trop privilégiés** : Les utilisateurs ont plus de droits qu'ils ne devraient.

Pour résoudre ces problèmes :
1. **Vérifiez les schémas de permissions** : Assurez-vous que les utilisateurs ont les bonnes permissions.
2. **Revoyez les rôles** : Assurez-vous que les utilisateurs sont dans les bons rôles.
3. **Journaux d'audit** : Utilisez les journaux d'audit de Jira pour tracer les modifications apportées aux permissions et aux rôles.

---

### Conclusion

Le système de gestion des permissions de Jira est complet et flexible, mais il nécessite une planification et une configuration minutieuses. La clé du succès réside dans la compréhension de la manière dont les permissions à différents niveaux (globales, de projet, de problème) interagissent entre elles. En structurant correctement vos permissions et en les révisant régulièrement, vous vous assurez que les utilisateurs disposent du bon accès et peuvent accomplir leurs tâches efficacement sans compromettre la sécurité ou l'intégrité des projets.
