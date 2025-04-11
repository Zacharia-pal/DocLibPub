# **Jira Service Management Roles and Permissions Documentation**

## **1. Overview**

This documentation provides a comprehensive breakdown of roles within **Jira Service Management** and their corresponding permissions, along with an explanation of how **automation permissions** are handled separately from standard issue-based permissions. The goal is to align each role with appropriate access levels based on user requirements and provide guidance on automation rule management.

---

## **2. Role Mapping to Permissions**

Each role within Jira Service Management has specific permissions tied to various actions, from viewing projects to managing workflows. Below is a detailed breakdown of how each role maps to Jira permissions.

---

### **Role 1: Product Admin**

- **Full Admin Privileges** (Superuser)
- **Permissions:**
  - ✅ **Administer Projects**: Can manage project settings and configurations.
  - ✅ **Manage Issue Layouts**: Can modify the layout of issues.
  - ✅ **Edit Workflows**: Has the ability to modify and create workflows.
  - ✅ **Other Permissions**: Access to all other Jira administration features.
  
**Summary**: The Product Admin role has full control over the Jira projects and settings. They can perform any administrative action within Jira Service Management.

---

### **Role 2: User Admin**

- **Primary Focus**: User management and project access control
- **Permissions:**
  - ✅ **Manage Watchers**: Can modify and add watchers to issues.
  - ✅ **View Voters and Watchers**: Can view the list of voters and watchers for issues.
  - ✅ **User-level Adjustments**: Can manage user-specific settings, including permissions tied to issues and projects.

**Summary**: User Admins focus on managing user roles and visibility within Jira projects. They likely do not have full project admin rights but can manage user-level settings and watchers.

---

### **Role 3: Customer**

- **Primary Focus**: Portal access only
- **Permissions:**
  - ✅ **No Project Permissions**: Customers do not have access to projects or issues directly within the Jira interface.
  - ✅ **Portal Access**: Customers can raise and view issues exclusively via the Jira Service Management portal.

**Summary**: The Customer role is restricted to interacting with issues through the service portal, without direct access to the Jira project or issue management interface.

---

### **Role 4: Ticket Support**

- **Primary Focus**: Issue management and support tickets
- **Permissions:**
  - ✅ **Browse Projects**: Can browse the available projects and their issues.
  - ✅ **Work On Issues**: Can actively work on issues assigned to them.
  - ✅ **Add Comments**: Can add comments to issues.
  - ✅ **Edit Own Comments**: Can edit their own comments.
  - ✅ **Create Attachments**: Can upload files to issues.
  - ✅ **Edit Own Attachments**: Can modify their own attachments.
  - ✅ **Edit Own Worklogs**: Can make changes to their work logs.

**Summary**: The Ticket Support role is focused on interacting with tickets, adding comments, attachments, and worklogs, and performing tasks related to issue resolution.

---

### **Role 5: Project Adaptations**

- **Primary Focus**: Workflow and automation management for projects
- **Permissions:**
  - ✅ **Edit Workflows**: Can modify and create workflows within the project.
  - ✅ **View Development Tools**: Can access and view development-related tools.
  - ✅ **View Aggregated Data**: Can view project-level aggregated data for adaptations.
  - ✅ **Manage Sprints**: Can manage sprints if they are part of the project.
  - ✅ **Delete/Edit Own Comments and Worklogs**: Can delete or edit their own worklogs or comments.
  - ✅ **Delete All Attachments and Worklogs**: Can delete all attachments and worklogs within the project.

**Summary**: The Project Adaptations role focuses on modifying workflows, managing sprints, and making adaptations to project processes.

---

### **Role 6: Project User Admin**

- **Primary Focus**: User and project-level administration
- **Permissions:**
  - ✅ **Manage Watchers**: Can add or remove watchers from issues.
  - ✅ **View Voters and Watchers**: Can view all voters and watchers.
  - ✅ **Administer Projects**: Can perform project-level administrative tasks, though may not have full superuser access.
  - ✅ **Manage Issue Layouts**: Can manage how issues are displayed within the project.

**Summary**: The Project User Admin role combines user management and limited project administration. They can control project configurations and manage user-related permissions.

---

### **Role 7: Project Adaptations Viewer**

- **Primary Focus**: View workflows and adaptations without editing rights
- **Permissions:**
  - ✅ **View Read-Only Workflow**: Can view workflows, but not edit them.
  - ✅ **View Aggregated Data**: Can access project-level aggregated data.
  - ✅ **Browse Projects**: Can view the projects, but does not have edit permissions.

**Summary**: The Project Adaptations Viewer role is primarily a read-only role, allowing the user to observe workflows and project data without the ability to modify them.

---

### **Role 8: Approver**

- **Primary Focus**: Approving issues and providing feedback
- **Permissions:**
  - ✅ **View Voters and Watchers**: Can see who is voting or watching an issue, especially for decision-making.
  - ✅ **Add Comments**: Can add comments, typically for approval notes.
  - ❌ **No Edit/Delete**: Cannot edit or delete any issues, comments, or attachments.
  - ❌ **No Project Admin Rights**: Limited access to project admin functions unless necessary for approval tasks.

**Summary**: The Approver role is focused on approving issues and adding comments but does not have permissions to modify issues, workflows, or project settings.

---

## **3. Suggested Permission Scheme by Role**

### **Permissions Mapping**

Below is a table mapping the permissions to each role, illustrating what actions each role can perform:

| **Permission**                  | **Role 1**<br>(Product Admin) | **Role 2**<br>(User Admin) | **Role 3**<br>(Customer) | **Role 4**<br>(Ticket Support) | **Role 5**<br>(Project Adapts) | **Role 6**<br>(Project User Admin) | **Role 7**<br>(Adapts Viewer) | **Role 8**<br>(Approver) |
|----------------------------------|-------------------------------|-----------------------------|---------------------------|-------------------------------|-------------------------------------|------------------------------------|-------------------------------------|---------------------------|
| Administer Projects              | ✅                            |                             |                           |                               |                                     | ✅                                 |                                     |                           |
| Manage Issue Layouts             | ✅                            |                             |                           |                               |                                     | ✅                                 |                                     |                           |
| Edit Workflows                   | ✅                            |                             |                           |                               | ✅                                  |                                    |                                     |                           |
| Browse Projects                  | ✅                            |                             |                           | ✅                            | ✅                                  | ✅                                 | ✅                                  |                           |
| Manage Sprints                   | ✅                            |                             |                           |                               | ✅                                  |                                     |                                     |                           |
| Service Project Agent            | ✅                            |                             |                           | ✅                            |                                     |                                     |                                     |                           |
| View Aggregated Data             | ✅                            |                             |                           |                               | ✅                                  |                                     | ✅                                  |                           |
| View Development Tools           | ✅                            |                             |                           |                               | ✅                                  |                                     |                                     |                           |
| View Read-Only Workflow          | ✅                            |                             |                           |                               |                                     |                                     | ✅                                  |                           |
| Manage Watchers                  | ✅                            | ✅                          |                           |                               |                                     | ✅                                 |                                     |                           |
| View Voters and Watchers         | ✅                            | ✅                          |                           |                               |                                     | ✅                                 |                                     | ✅                        |
| Add Comments                     | ✅                            |                             |                           | ✅                            |                                     |                                     |                                     | ✅                        |
| Delete All Comments              | ✅                            |                             |                           |                               |                                     |                                     |                                     |                           |
| Delete Own Comments              | ✅                            |                             |                           | ✅                            | ✅                                  |                                     |                                     |                           |
| Edit All Comments                | ✅                            |                             |                           |                               |                                     |                                     |                                     |                           |
| Edit Own Comments                | ✅                            |                             |                           | ✅                            | ✅                                  |                                     |                                     |                           |
| Create Attachments               | ✅                            |                             |                           | ✅                            |                                     |                                     |                                     |                           |
| Delete All Attachments           | ✅                            |                             |                           |                               | ✅                                  |                                     |                                     |                           |
| Delete Own Attachments           | ✅                            |                             |                           | ✅                            | ✅                                  |                                     |                                     |                           |
| Delete All Worklogs              | ✅                            |                             |                           |                               | ✅                                  |                                     |                                     |                           |
| Delete Own Worklogs              | ✅                            |                             |                           | ✅                            | ✅                                  |                                     |                                     |                           |
| Edit All Worklogs                | ✅                            |                             |                           |                               | ✅                                  |                                     |                                     |                           |
| Edit Own Worklogs                | ✅                            |                             |                           | ✅                            | ✅                                  |                                     |                                     |                           |
| Work On Issues                   | ✅                            |                             |                           | ✅                            | ✅                                  |                                     |                                     |                           |

> this is no longer accurate!

---

## **4. Automation Permissions**

Automation permissions are handled separately from the **standard permission scheme** in Jira Service Management. They are typically managed through **global permissions** and **project roles** rather than direct issue-level permissions.

### **Automation Permissions Breakdown**

1. **Global Permissions / Jira System Role**:
   - To manage global or project-specific automation rules, users must have **Jira Administrator** or **Project Administrator** privileges.

2. **Project Roles + Automation Rules**:
   - Even if a user can view automation rules, they can only edit or create rules if they are granted **Project Administrator** permissions or explicit access inside the rule configuration.

3. **Audit Logs and Rule Ownership**:
   - The owner of the automation rule can affect the user’s ability to manage or edit it. If the rule is owned by a user who lacks sufficient permissions, the rule may fail.

### **Specific Automation Permissions for Roles**:

| **Automation Permission**   | **Who Needs What**                                |
|-----------------------------|----------------------------------------------------|
| **View Automations**        | Role 7 (Adaptations Viewer) needs **Browse Projects** and possibly **View Development Tools** |
| **Edit Automations**        | Role 5 (Project Adaptations) requires **Administer Projects** or **Project Admin** access |

---

## **5. Conclusion**

This documentation provides a clear structure for understanding and assigning Jira Service Management permissions across different roles. By aligning these roles with specific permissions, you ensure proper access control, streamline workflow management, and provide clear guidelines for automation rule management.
