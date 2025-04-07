### **Step-by-Step Guide to Creating Roles and Assigning Permissions in Jira**

#### **1. Understanding Roles in Jira**

In Jira, **roles** are used to assign specific permissions to users within a project. These roles determine what a user can do within a project, such as creating, editing, or transitioning issues.

**Key Role Types**:
- **Project Administrators**: Full access to configure project settings and manage permissions.
- **Developers**: Users who can work on issues, transition them, and sometimes manage versions and sprints.
- **Testers**: Usually users with permissions to view and test issues but with limited edit rights.
- **Users**: Basic users with permissions to view and comment on issues.

#### **2. Creating Custom Roles in Jira**

To create and manage roles, you need to have **Jira Administrator** rights.

##### **Steps to Create Custom Roles**:
1. **Navigate to the Project Role Settings**:
   - Go to **Jira Administration** (click on the gear icon in the top-right) > **System**.
   - Under the **Security** section, click on **Project Roles**.
   
2. **Add a New Role**:
   - On the **Project Roles** page, click **Add Project Role**.
   - Enter the **Role Name** (e.g., "QA Engineer", "Product Owner") and **Description** (optional).
   - Click **Add** to create the new role.

#### **3. Assigning Roles to Users in a Project**

After creating roles, you need to assign them to specific users in a project.

##### **Steps to Assign Users to Roles**:
1. **Go to Project Settings**:
   - Navigate to the project where you want to assign roles.
   - In the left sidebar, click **Project settings** > **Users and roles**.

2. **Add Users to Roles**:
   - On the **Users and Roles** page, you’ll see a list of all project roles.
   - Click **Manage roles**, and under each role, click **Add Users to Role**.
   - Search for the user by name or group and click **Add** to assign them to that role.
   - You can assign multiple users or groups to the same role.

---

### **4. Assigning Permissions to Roles**

Once roles are created, you can define permissions that will be granted to users in each role. Permissions in Jira are assigned through **Permission Schemes**.

#### **Permissions Types in Jira**:
- **Global Permissions**: Permissions that apply to the whole Jira instance (e.g., Jira Administrators).
- **Project Permissions**: Permissions specific to projects (e.g., creating issues, assigning issues).
- **Issue Permissions**: Permissions that control actions at the issue level (e.g., edit, comment, resolve).
- **Workflow Permissions**: Permissions for transitions between workflow states.

#### **Steps to Assign Permissions to Roles**:

##### **1. Create or Modify a Permission Scheme**:
1. **Go to Permission Schemes**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   
2. **Create a New Scheme** (Optional):
   - Click **Add Permission Scheme**.
   - Give the scheme a name (e.g., “Software Project Permissions”).
   
3. **Edit Existing Scheme**:
   - If you want to modify an existing scheme, click **Permissions** next to the scheme you wish to edit.

4. **Assign Permissions to Roles**:
   - Click **Permissions** in the scheme you want to edit.
   - Click **Add Permission** at the top of the page.
   - In the dropdown, choose the **Permission** you want to grant (e.g., **Browse Projects**, **Assign Issues**, **Create Issues**, etc.).
   - In the **Grant permission to** section, choose **Project Role** and select the role you want to assign this permission to.
   - Click **Grant** to assign the permission.

##### **2. Types of Permissions You Can Assign**:
Here are some of the permissions you can assign to project roles:
- **Browse Projects**: Allows a user to view the project.
- **Create Issues**: Allows a user to create issues in the project.
- **Assign Issues**: Grants the ability to assign issues to others.
- **Edit Issues**: Allows users to edit issues.
- **Delete Issues**: Grants the ability to delete issues.
- **Work on Issues**: Allows users to transition an issue through the workflow.
- **Resolve Issues**: Allows users to close or resolve issues.
- **Close Issues**: Gives the ability to mark issues as closed.
- **Transition Issues**: Allows users to move an issue from one status to another in the workflow.
- **Manage Sprints**: Grants permissions to manage sprints (specific to Scrum projects).
- **View Development Tools**: Allows viewing of code commits, branches, pull requests, etc., related to issues (specific to software projects).
- **Administer Projects**: Grants full control of project settings and permissions (usually assigned to Project Admin).

#### **Steps to Apply the Permission Scheme to a Project**:
1. **Go to Project Settings**:
   - Navigate to your project, then click on **Project settings** in the left sidebar.
   
2. **Apply the Permission Scheme**:
   - In the **Permissions** section of the project settings, select **Actions** > **Use a different permission scheme**.
   - Choose the scheme you want to apply and click **Associate**.

---

### **5. Managing Permissions for Specific Actions in the Workflow**

In addition to the permission schemes, you can also manage permissions at the workflow level, controlling who can transition issues between different workflow statuses.

#### **Steps to Assign Permissions in Workflows**:

1. **Edit a Workflow**:
   - Go to **Jira Administration** > **Issues** > **Workflows**.
   - Select the workflow to edit and click **Edit**.

2. **Add Workflow Conditions**:
   - Click on a transition between statuses (e.g., from **To Do** to **In Progress**).
   - Under the **Conditions** tab, add a **Condition** that specifies who can perform this transition. For example:
     - **User in Project Role**: Restrict the transition to users in a specific role (e.g., only developers can move an issue to **In Progress**).

3. **Add Post Functions** (optional):
   - You can also add **Post Functions** to perform certain actions automatically when an issue moves through a transition, such as assigning an issue to a specific user or sending a notification.

4. **Publish the Workflow**:
   - After making your changes, click **Publish** to apply the workflow to your project.

---

### **6. Verifying and Troubleshooting Permissions**

After setting up roles and permissions, it’s important to ensure everything works as expected. Jira provides a **Permission Helper** to help with troubleshooting.

#### **Using the Permission Helper**:
1. **Navigate to the Permission Helper**:
   - Go to **Jira Administration** > **System** > **Permission Helper**.
   
2. **Check Permissions for a Specific User**:
   - Enter the username and select the project and action (e.g., creating an issue, viewing an issue).
   - The Permission Helper will tell you why the user does or does not have the required permission.

3. **Audit Permissions**:
   - You can also use **Audit Logs** to track changes to permissions and roles.
   - Go to **Jira Administration** > **System** > **Audit Log** and review the logs for permission changes.

---

### **7. Best Practices for Role and Permission Management**

- **Minimize the Number of Roles**: Use as few roles as necessary to avoid confusion. Create roles that reflect real-world job functions (e.g., Developer, Tester, Project Manager).
- **Use Permission Schemes for Efficiency**: If your projects have similar requirements, create a permission scheme that can be applied across multiple projects, instead of assigning permissions to each project individually.
- **Limit Admin Permissions**: Grant **Project Administrator** and **Jira Administrator** roles only to those who need them. These roles provide full control over projects and Jira itself.

---

By following this guide, you can effectively create roles, assign permissions, and manage access in Jira, ensuring that users have the right level of access for their tasks. This process helps maintain security and ensures smooth project management.
