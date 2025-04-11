# **Complete Detailed Documentation: Permissions, Roles, and Configuration in Jira Service Management (JSM)**

## **1. Overview of Jira Service Management (JSM)**

Jira Service Management (JSM) is a popular IT service management (ITSM) platform that integrates with Jira Software. It allows teams to manage requests, incidents, changes, and problems. In JSM, permissions and roles are key for controlling access to various aspects of the system, such as managing projects, configuring boards, handling customer requests, and so on.

---

## **2. Jira Service Management Permissions**

Permissions in Jira are used to define what actions users can take within a project or a broader Jira instance. They can be applied at both **project-level** and **issue-level**.

### **2.1 Project Permissions**
**Project Permissions** determine who can perform various actions within a specific project. Some of the most common project permissions include:

#### Common Project Permissions:
| **Permission**           | **Description**                                         |
|--------------------------|---------------------------------------------------------|
| **Browse Projects**       | Ability to view the project and its issues.             |
| **Create Issues**         | Ability to create new issues.                           |
| **Assign Issues**         | Ability to assign issues to other users.                |
| **Manage Sprints**        | Ability to create and manage sprints (for Scrum boards).|
| **Service Project Agent** | Allows interaction with customers and access to Service Management features. |
| **View Development Tools**| Allows users to see commits, builds, and other development data linked to issues.|
| **Transition Issues**     | Ability to move issues through workflow stages.        |
| **Close Issues**          | Ability to close an issue when it is resolved.          |
| **Set Issue Security**    | Set security levels on issues so only specific people can view them. |

#### **Example Scenario:**
If a user has the **Browse Projects** permission, they can **view** the issues in the project, but they cannot edit or transition them unless they also have permissions like **Edit Issues** and **Transition Issues**.

---

### **2.2 Issue Permissions**
**Issue Permissions** control who can interact with issues in the system. For example:

| **Permission**         | **Description** |
|------------------------|-----------------|
| **Assignable User**     | Determines who can be assigned issues. |
| **Edit Issues**         | Allows users to modify existing issues. |
| **Delete Issues**       | Allows users to delete issues. |
| **Move Issues**         | Ability to move issues between projects or workflows. |
| **Resolve Issues**      | Ability to resolve issues (e.g., close or mark as completed). |
| **Work On Issues**      | Ability to log work against an issue (relevant for time tracking). |

#### **Example Scenario:**
If a user has the **Assignable User** permission, they can be **assigned** to issues within a project, but they cannot edit or transition the issue unless they also have permissions such as **Edit Issues** or **Transition Issues**.

---

## **3. Roles in Jira Service Management**

Roles in Jira are typically used to control **what actions** users can take within a specific project or at a global level (i.e., across multiple projects).

### **3.1 Project Roles**
**Project roles** define a user’s responsibilities within a specific project. Examples of project roles are:

| **Project Role**         | **Description** |
|--------------------------|-----------------|
| **Project Admin**         | Full administrative access within the project, including configuring workflows, boards, and permissions. |
| **Service Desk Agent**    | Handles customer requests, resolves tickets, and manages service desk operations. |
| **Developer**             | Works on technical tasks related to issues (e.g., development work). |
| **Requester**             | Customer or external user who submits requests, views their issues, and comments on them. |

#### **Example Scenario:**
- **Project Admin**: A user with this role can **configure project settings**, change **permissions**, and manage **boards**.
- **Service Desk Agent**: A user with this role can **resolve customer tickets**, interact with customers, and manage requests.
- **Requester**: A customer who raises an issue but cannot modify or view internal information.

---

### **3.2 Product Roles**
These roles govern **access** to products (e.g., Jira Software, Jira Service Management) across all sites.

| **Product Role**          | **Description** |
|---------------------------|-----------------|
| **Org Admin**             | Full administrative control over the entire organization (can manage all users, products, billing, and global settings). |
| **Site Admin**            | Manages site-level settings and user access to products like Jira Service Management. |
| **Product Admin**         | Configures settings, permissions, and workflows specific to a product (e.g., JSM or Jira Software). |
| **User Access Admin**     | Manages which users have access to specific products within the organization. |

#### **Example Scenario:**
- **Org Admin**: A user with this role can **manage billing**, add/remove users across the entire organization, and set up **SSO** for the organization.
- **Site Admin**: A user can **configure Jira Service Management** settings, manage users specific to the **Jira site**, and add/remove projects.

---

## **4. Customer Management in Jira Service Management**

### **4.1 Who Are Customers in JSM?**
In JSM, **customers** are **external users** (e.g., clients, partners, or internal employees) who **raise requests** and **interact with agents**. They can access the **Customer Portal** to submit, view, and comment on their tickets.

#### **Important Points about Customers:**
- **Free to add**: Customers do not require a paid license. They are unlimited in the JSM Standard, Premium, and Enterprise plans.
- **Customer Portal**: Customers interact with issues through the portal, where they can submit new requests, track issues, and comment.
- **Request Participants**: Customers can also be added as request participants, which grants them additional visibility and participation in specific issues.

#### **Example Scenario:**
**Patronale Life** has between **150-500 customers** who interact with their Jira Service Management instance. These customers are able to submit requests for service, view their issues, and communicate with support agents through the **Customer Portal**. 

**Mathias**, a customer from Patronale Life, submits a request for a billing issue. **Erika** and **Dieter**, other customers, are added as **request participants**, allowing them to see and comment on the issue as it progresses through the system.

---

## **5. Org vs Site: Understanding the Difference**

### **5.1 Organization (Org) Level**
The **Org** is the highest-level unit in Jira. It governs all your users, domain settings, billing, and product access across all sites.

| **Org Admin** | Can manage users, products, security settings, and billing for the entire organization. |
|---------------|-------------------------------------------------------------|

#### **Example Scenario:**
**Patronale Life** has a global **Org Admin** who can manage the settings for all of their Jira products. For instance, the **Org Admin** handles **SSO** integration for their team members, manages user access, and ensures proper billing for the organization.

### **5.2 Site Level**
Each **Site** refers to a single Jira instance (e.g., `patronalelife.atlassian.net`). A site can have multiple projects, and each site is managed by **Site Admins**.

| **Site Admin** | Can manage a specific Jira instance (e.g., `patronalelife.atlassian.net`), configure products, and manage user access to the site. |
|----------------|-------------------------------------------------------------|

#### **Example Scenario:**
- The **Org Admin** adds a **Site Admin** for `patronalelife.atlassian.net` (the Jira site for the customer support team at Patronale Life).
- The **Site Admin** manages the **Jira Service Management** settings, including creating and managing **projects**, controlling **permissions**, and assigning **roles** to users within the organization.

---

## **6. Admin Permissions for Creating Projects and Configuring Boards**

### **6.1 Who Can Create Jira Projects?**
- **Jira Admins (Product Admin)**: Can create both **company-managed** and **team-managed** projects across the Jira instance.
- **Site Admins**: Can create projects if granted the necessary permissions.

#### **Example Scenario:**
A **Jira Admin** at **Patronale Life** creates a **company-managed project** for managing customer support tickets related to health insurance policies. This project is structured with custom workflows and issue types, ensuring agents can efficiently process claims.

---

### **6.2 Who Can Configure Boards?**
- **Project Admins**: Can configure **team-managed boards** within their project (e.g., columns, filters).
- **Jira Admins (Product Admins)**: Can configure **company-managed boards**, including managing filters, workflows, and permissions tied to the boards.

#### **Example Scenario:**
- A **Project Admin** at **Patronale Life** manages the board for the **Support Team** (team-managed project), setting up columns for **To Do**, **In Progress**, and **Done** to track incoming support requests.
- A **Jira Admin** configures the board for the **Development Team** (company-managed project), including **swimlanes**, **quick filters**, and **board permissions** to manage the development of features for a new health insurance portal.

---

## **7. Unlimited Customers in JSM Standard Plan**

The **Jira Service Management (Standard Plan)** offers **unlimited customers**, allowing you to add as many customers as needed without any additional cost.

- **Unlimited customers** can raise requests, view their issues, and comment on them.
- **Customers do not require paid licenses**, only **agents** (internal team members) need to be licensed.

#### **Example Scenario:**
**Patronale Life** has **300 customers** in the **JSM Standard Plan**. These customers can submit support requests, view their issues via the **Customer Portal**, and communicate with agents. The organization is not charged extra for having this many customers, making the **Standard Plan** a cost-effective choice for managing their customer service operations.

---

## **8. Conclusion**

This document provides a detailed guide to understanding **permissions**, **roles**, **customer management**, and **admin responsibilities** within Jira Service Management. By understanding these concepts and how they interact, **Patronale Life** can effectively manage its JSM projects, set up permissions correctly, and ensure the right users have the right access.
