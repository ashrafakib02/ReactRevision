
# 📌 React To‑Do App with Deep Context API & Local Storage

**Git Repo:** [https://github.com/ashrafakib02/ReactRevision/tree/main/10todocontextlocal](https://github.com/ashrafakib02/ReactRevision/tree/main/10todocontextlocal)

A clean, modern, and user‑friendly **To‑Do application** built with **React** leveraging **Context API for deep state sharing** and **Local Storage for data persistence**.

This project demonstrates an efficient approach to managing app‑wide state using Context instead of prop drilling, while also ensuring that to‑do items are saved across browser sessions.

---

## 🚀 Features

✔️ Add, view, and remove to‑do items
✔️ Tasks persist automatically using browser Local Storage
✔️ Global state accessible across components using Context API
✔️ Simple and intuitive interface for task management
✔️ Ideal for learning core React patterns (hooks + context + local storage)

---

## 💡 Why This Project Matters

Managing state across multiple components in a React app usually involves passing props down through several layers (prop drilling). Using **Context API** simplifies this by making state globally accessible where needed, while **Local Storage** ensures that users won’t lose their tasks even if they refresh or close the browser. This combination models real‑world React state management and persistence strategies at a beginner‑to‑intermediate level. ([Gist][1])

---

## 🛠️ Built With

* **React** – UI library for building component‑based interfaces
* **Context API** – React’s way to avoid prop drilling and share state deeply
* **Local Storage** – Stores and retrieves to‑do items so they persist
* **Hooks (useState, useEffect, useContext)** – Manage component state and lifecycle

---

## 📥 Getting Started

These are the high‑level steps to get the project running locally:

1. Clone the repository to your local machine
2. Install all project dependencies
3. Start the development server
4. Open the app in your browser at `http://localhost:3000`

*(Detailed running instructions should be included in your local README)*

---

## 🧠 How It Works (Overview)

* On initial load, the app checks **Local Storage** for previously saved tasks.
* Tasks are stored in a **global context**, allowing any component to read/update them without prop drilling.
* Any add/remove action updates both the global state and Local Storage, ensuring persistence across refreshes and browser restarts. ([IQRA Technology][2])

---

## 🎯 Who Is This For?

This project is perfect for:

* React beginners learning how to manage state beyond local component state
* Developers exploring the **Context API** as an alternative to Redux for lightweight state management
* Anyone wanting to see **Local Storage integration** in a real app

---

## ⭐ Contributing

Contributions are welcome! Please follow these guidelines:

* Fork the repo
* Create a new feature branch
* Open a pull request with clear details of your changes
* Include clear commit messages

---

## 📝 License

This project is open‑source and available under the terms specified in the project repository.

---
