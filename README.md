 This week marks a transition from static components to dynamic, data-driven applications. I am focusing on advanced React patterns, including side effects, API integration, and client-side routing.

## 📌 Project Overview: CommunityHub
The goal for this week is to transform the CommunityHub into a full-scale Multi-Page Application (MPA) using **React Router** and real-world data from the **JSONPlaceholder API**.

### Key Learning Objectives
- **Side Effects:** Mastering the `useEffect` hook for data fetching and manual DOM updates.
- **Routing:** Implementing `react-router-dom` for seamless navigation.
- **Custom Hooks:** Creating reusable logic with `useFetch` and `useLocalStorage`.
- **State Management:** Handling loading states and error boundaries.

---

## 🛠️ Tech Stack
- **Library:** React.js
- **Routing:** React Router v6
- **Styling:** CSS Modules / Tailwind CSS
- **API:** JSONPlaceholder
- **Environment:** GitHub Codespaces

---

## 📂 Repository Structure
```text
src/
├── components/       # Reusable UI components (Button, Input, Card)
├── hooks/            # Custom hooks (useFetch, useLocalStorage)
├── pages/            # Page-level components (Home, Posts, PostDetail)
├── App.jsx           # Routing configuration
└── main.jsx          # Entry point
