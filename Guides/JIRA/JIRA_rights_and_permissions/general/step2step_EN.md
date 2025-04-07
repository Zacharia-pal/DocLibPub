### **Step2Step Guide**

### **1. Jira Permissions Overview**

**Permissions in Jira** are divided into:
- **Global Permissions**: Apply across the entire Jira instance.
- **Project Permissions**: Apply within specific projects.
- **Issue Permissions**: Tied to actions on individual issues.

#### Step-by-Step Guide to Setting Permissions:
1. **Accessing Permission Settings**:
   - **Jira Admin**: Navigate to **Jira Administration** > **Issues** > **Permission Schemes**.
   - You can either create a new scheme or edit an existing one.
  
2. **Assigning Global Permissions**:
   - Go to **Jira Administration** > **System** > **Global Permissions**.
   - Add users/groups to roles like **System Administrators**, **Jira Administrators**, or **Browse Users**.

3. **Assigning Project Permissions**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Assign permissions like **Create Issues**, **Assign Issues**, **View Issues**, etc., to users or groups.

4. **Assigning Issue Permissions**:
   - Issue permissions like **Edit Issues** and **Transition Issues** are configured within workflows, not directly through the permission scheme, but you can manage access through workflow settings.

---

### **2. Jira Products and Their Specific Permissions**

Jira has different products like **Jira Software**, **Jira Service Management**, and **Jira Work Management**, each with specific permission types.

#### Step-by-Step Guide to Configuring Permissions for Jira Software:
1. **Assigning Permissions in Jira Software**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Edit the scheme and assign permissions like **Manage Sprints**, **Create Versions**, and **View Boards** to the relevant project roles.

#### Step-by-Step Guide to Configuring Permissions for Jira Service Management:
1. **Managing Service Desk Permissions**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Assign permissions related to customer portals and queues, such as **Create Requests**, **Respond to Requests**, and **Manage Queues**.

#### Step-by-Step Guide to Configuring Permissions for Jira Work Management:
1. **Configuring Business Project Permissions**:
   - Similar to **Jira Software**, go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Assign permissions for actions like **Create Issues**, **Transition Issues**, and **Manage Issues**.

---

### **3. Permission Schemes**

**Permission Schemes** define what users can do in a project, like creating issues or assigning tasks. 

#### Step-by-Step Guide to Create/Modify Permission Schemes:
1. **Create a New Permission Scheme**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Click **Add Permission Scheme**, name the scheme, and provide a description.
  
2. **Assign Permissions to Roles or Groups**:
   - Select a permission scheme and click **Permissions**.
   - Use the **Grant Permission** option to add permissions like **Create Issues**, **Assign Issues**, or **View Issues** to specific roles/groups.

3. **Apply the Permission Scheme to a Project**:
   - Go to **Project Settings** > **Permissions**.
   - Choose the desired Permission Scheme from the dropdown.

---

### **4. Project Roles**

Project Roles allow you to assign different sets of permissions to users based on their role in a project.

#### Step-by-Step Guide to Creating/Managing Project Roles:
1. **Creating Custom Project Roles**:
   - Go to **Jira Administration** > **System** > **Project Roles**.
   - Click **Add Project Role**, then name the role (e.g., Developer, Tester).

2. **Assigning Users to Roles**:
   - In your project, go to **Project Settings** > **Users and Roles**.
   - Assign users to specific roles (e.g., assign a developer to the **Developer** role).

3. **Assigning Roles to Permissions**:
   - Return to **Jira Administration** > **Issues** > **Permission Schemes**.
   - In the permission scheme, assign permissions to the relevant project roles (e.g., **Developers** may get **Edit Issues** permissions).

---

### **5. Global Permissions**

Global Permissions allow users to access Jira-wide functions such as system administration or viewing user profiles.

#### Step-by-Step Guide to Configuring Global Permissions:
1. **Navigate to Global Permissions**:
   - Go to **Jira Administration** > **System** > **Global Permissions**.

2. **Modify Permissions**:
   - Use the **Grant Permission** button to assign global permissions like **Jira Administrators** or **Browse Users** to specific users or groups.

3. **Review Existing Permissions**:
   - Check which users or groups are already assigned to global roles like **System Administrator** or **Jira Software Administrator**.

---

### **6. Issue Security**

**Issue Security** controls visibility at the issue level, specifying who can view particular issues.

#### Step-by-Step Guide to Setting Up Issue Security:
1. **Create Issue Security Scheme**:
   - Go to **Jira Administration** > **Issues** > **Issue Security Schemes**.
   - Click **Add Issue Security Scheme**, name it, and provide a description.

2. **Define Security Levels**:
   - After creating the scheme, click **Add Security Level**.
   - Name the level (e.g., Confidential), and then choose which roles/groups will have access.

3. **Assign Security Scheme to a Project**:
   - In **Project Settings** > **Issue Security**, select the security scheme you created.
   - Apply the security scheme to issues based on roles or groups.

---

### **7. Permission Schemes vs. Workflow Permissions**

Workflow permissions are closely tied to how issues transition through different stages of a project.

#### Step-by-Step Guide to Setting Up Workflow Permissions:
1. **Edit Workflow**:
   - Go to **Jira Administration** > **Issues** > **Workflows**.
   - Select the workflow to edit, then click **Edit**.

2. **Set Transition Permissions**:
   - Click on a transition (e.g., from **In Progress** to **Done**).
   - Under the **Conditions** tab, specify who can execute the transition (e.g., **Developers**).

3. **Apply Workflow to Project**:
   - Once editing the workflow is complete, go to **Project Settings** > **Workflows**.
   - Assign the workflow to the project.

---

### **8. Customizing Permissions for Advanced Use Cases**

You can create custom permissions to meet advanced use cases, like limiting access to specific parts of the project or custom fields.

#### Step-by-Step Guide to Customizing Permissions:
1. **Create Custom Permissions**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Choose a scheme and click **Add Permission** to create custom permissions for things like **Manage Custom Fields** or **View Workflow Transitions**.

2. **Use Conditions in Workflows**:
   - In the workflow editor, use **Conditions** to specify who can transition issues based on custom criteria.

---

### **9. Managing Permissions in Jira Service Management**

Jira Service Management has specialized permissions related to customers and service desk agents.

#### Step-by-Step Guide to Managing Service Desk Permissions:
1. **Assign Permissions to Service Desk Roles**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Assign permissions like **Create Requests** and **Respond to Requests** to roles like **Service Desk Agents**.

2. **Configure Customer Portal Permissions**:
   - In **Project Settings** > **Customer Permissions**, set who can raise requests and who can view customer portals.

3. **Queue Management**:
   - Go to **Project Settings** > **Queues**.
   - Configure queues based on issue types or other criteria, then assign permissions to roles for accessing specific queues.

---

### **10. Troubleshooting Permissions Issues**

Permissions issues can lead to access errors, so it's important to troubleshoot when things go wrong.

#### Step-by-Step Guide to Troubleshooting Permissions:
1. **Audit Permission Changes**:
   - Go to **Jira Administration** > **System** > **Audit Log**.
   - Review the logs to see recent permission changes or role assignments that might be causing issues.

2. **Check Permission Scheme**:
   - Go to **Jira Administration** > **Issues** > **Permission Schemes**.
   - Ensure the permissions are correctly assigned to the right roles/groups.

3. **Verify User Group Membership**:
   - Go to **Jira Administration** > **User Management**.
   - Check if users are in the correct groups or roles, as this will determine their access rights.

---

By following these step-by-step instructions, you can effectively manage Jira permissions and ensure that your team members have the correct access and security.
