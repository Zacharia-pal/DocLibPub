# **Transferring a GitHub Repository Between Organizations**

## **Introduction**
This guide explains step by step how to transfer a repository from one organization to another on GitHub. This is useful when moving a project to a new organization or merging repositories into a different team.

> **Note**: This process is irreversible, so make sure to create a backup before starting!

---

## **Requirements**
⭕ You are the **owner** of the repository you want to transfer.  
⭕ You are a member of the **target organization** with admin rights.  
⭕ The **target organization has enough repository slots** (free accounts have limitations).  
⭕ You have **internet access** and a **web browser**.

---

## **Step 1: Log in to GitHub**
1. Open your browser and go to [GitHub](https://github.com/).
2. Click **Sign In** in the top-right corner and log in with your username and password.

![Login page](https://github.com/Zacharia-pal/DocLibPub/blob/main/Guides/Repo_Transfer/Repo_Transfer_1.png)

*Reference: Login page.*

---

## **Step 2: Go to the Repository Settings**
1. Click on your **profile picture** in the top-right corner and select **Your repositories**.
2. Find the repository you want to transfer and click on it.
3. Click on **Settings** at the top.

![Settings page](https://github.com/Zacharia-pal/DocLibPub/blob/main/Guides/Repo_Transfer/Repo_Transfer_2.png)

*Reference: settings menu.*

---

## **Step 3: Start the Transfer Process**
1. Scroll down to the **"Danger Zone"** section.
2. Click **"Transfer ownership"**.
3. Enter the name of the repository to confirm.
4. Enter the **name of the target organization** (e.g., `NewOrganization`).
5. Click **"I understand, transfer this repository"** to start the transfer.

![Transfer](https://github.com/Zacharia-pal/DocLibPub/blob/main/Guides/Repo_Transfer/Repo_Transfer_3.png)

*Reference: transfer.*

---

## **Step 4: Accept the Transfer (if required)**
- In some cases, an administrator of the new organization must **approve** the transfer.
- GitHub will send a notification to the new owner or organization.
- Once the transfer is complete, the repository will appear under the new organization.


---

## **What Happens After the Transfer?**
🟢 **All code, issues, pull requests, and commit history remain intact.**  
🟢 **The old URL will temporarily redirect to the new location.**  
🟢 **Repository settings may change**, so review permissions and branches.

---

## **Please note:**
*Individual users, teams, and apps will be removed from the following options:*

- Repository ruleset bypassers
- Protected branch pull request bypassers
- Protected branch authorized pull request review dismissers
- Protected branch authorized pushers
- Protected branch allowed force pushers

---

## **Common Issues & Solutions**
| Issue | Solution |
|----------|----------|
| Transfer failed | Ensure you are the repository owner. |
| Target organization does not appear | Make sure you are a member of the organization with admin rights. |
| Repository slot limit reached | Upgrade the organization's plan or delete old repositories. |
| Old URL no longer works | Update documentation and integrations to use the new repository URL. |

---

## **Conclusion**
Congratulations! You have successfully transferred a repository to another organization on GitHub. Make sure to inform your team members and update your documentation.

---

🟡 **Tip:** Want to verify everything is set up correctly? Go to the new repository and check the settings and permissions!

