### ✅ **Main Scheme Types in Jira:**

| Scheme Type | Used For | Has Permissions? | Priority? |
|-------------|----------|------------------|-----------|
| **Permission Scheme** | Controls access within a project (e.g. edit, assign, comment, etc.) | ✅ YES | **Project level – primary access control** |
| **Issue Security Scheme** | Controls visibility of individual issues | ✅ YES | Overrides project permission visibility |
| **Notification Scheme** | Who gets emails for certain actions | ❌ NO | Doesn’t affect permissions |
| **Workflow Scheme** | Controls issue lifecycle (statuses, transitions) | ❌ NO (but has *conditions*) | Workflow **conditions** can block actions |
| **Screen Scheme** | What fields show up when creating/editing issues | ❌ NO | UI-only |
| **Field Configuration Scheme** | Customizes field behavior (required, hidden) | ❌ NO | UI-only |
| **Permission Helper Tool** | Debugging tool – not a scheme | ❌ NO | Just helps investigate permission issues |

---

### 🥇 **What Has Priority When Conflicting?**

Here’s the **priority hierarchy** when considering all “permission-affecting” systems:

1. **Global Permissions**  
   (If you can’t log in or use Jira, nothing else matters)

2. **Project Permission Scheme**  
   (Determines what you can do in the project — the core system)

3. **Issue Security Scheme**  
   (Overrides whether you can *see* an issue, regardless of project access)

4. **Workflow Conditions**  
   (Overrides what actions you can perform based on issue state)

5. **Board Filters / Sharing**  
   (Overrides whether you can see a board or its issues via the filter)

### BUT

## Key Concepts:

- **Project Permission Scheme** controls:  
  > *What you're allowed to do in a project* (like browse, comment, edit, assign issues).

- **Issue Security Scheme** controls:  
  > *Which individual issues you’re allowed to **see*** — even if you normally have project access.

---

## ✅ So, Which Has Higher Priority?

> 🔥 **Issue Security has *higher* priority when it comes to issue visibility.**

### Why?
Because even if you have the **Browse Projects** permission from the **Project Permission Scheme**, Jira will **still check issue-level security** before showing you the issue.

---

## 📊 Simple Example:

You are in a group that has this:

| Permission             | Granted? |
|------------------------|----------|
| Browse Projects        | ✅ Yes   |
| Edit Issues            | ✅ Yes   |

BUT an issue in the project has an **Issue Security Level** set to:
- “Visible to Developers Only”
- And you’re **not** in the “Developers” group

> 🚫 Result: You **won’t see the issue at all**.  
> You **can’t edit it, comment, or even know it exists** — despite your project permissions.

---

## 🔁 So Why Did I Say “Lower Priority”?

You're calling out a nuance in how I explained it — thanks for pointing it out!

- What I meant is that **project permissions** are the **main layer** of permissions — they determine **what actions** are allowed.
- But **issue security** acts like a **filter** on top of that, specifically for **visibility**.

Think of it like:

### 🔐 Permission Flow (Access Chain)

1. ✅ **Do you have “Browse Projects” permission**?  
   → *From the Project Permission Scheme*

2. ✅ **Does the issue’s security level include you**?  
   → *From the Issue Security Scheme*

3. ✅ Then you can **see the issue** and do other things (if you have permission to do them).

If **any of those fails**, you're locked out.

---

## 🪟 Real-World Analogy

Imagine a **building (project)**:
- Having a **keycard (project permission)** lets you in the building.
- But each **room (issue)** might also have a **separate lock (issue security)**.
- If you don’t have the code to that room, you’re not getting in — **even if your keycard gets you into the building.**

---

## ✅ TL;DR — Final Clarification:

| Layer                | Role                               | Priority for visibility |
|---------------------|------------------------------------|-------------------------|
| Project Permission  | Grants general access to a project | ✅ First check           |
| Issue Security      | Restricts access to *specific issues* | 🔥 Overrides visibility |

So yes — **issue security overrides project permissions for visibility.**  
It doesn’t replace the permission scheme, but it *adds a stricter rule on top of it*.

