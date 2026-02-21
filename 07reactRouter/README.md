
# 07reactRouter

A basic React web application demonstrating routing functionality using **React Router**, dynamic route parameters, and API data fetching from the GitHub API.

## 🚀 Features

* Client-side routing using **React Router**
* Route optimization using `createRoutesFromElements`
* Dynamic routing with URL parameters using `useParams`
* Data fetching from the GitHub API
* **Loader functions** for preloading route data
* Display GitHub user avatar and followers count
* Clean and simple UI structure for learning purposes

---

## 🛠️ Technologies Used

* React
* React Router DOM
* GitHub REST API
* JavaScript (ES6+)
* Tailwind CSS

---

## 🔀 Routing Implementation

This project uses:

* `createBrowserRouter`
* `createRoutesFromElements`
* `Route`
* `RouterProvider`
* `useParams`
* `loader` functions

Example:

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route
        path="github/:username"
        element={<Github />}
        loader={githubLoader} // preloads GitHub data
      />
    </Route>
  )
);
```

### 🔹 Dynamic Routing with useParams

The `useParams` hook is used to capture dynamic URL parameters:

```javascript
const { username } = useParams();
```

This allows fetching GitHub data based on the username in the URL.

---

## 🌐 GitHub API Integration

We fetch GitHub user data using:

```text
https://api.github.com/users/{username}
```

Fetched data includes:

* Avatar image
* Followers count
* User name

Example loader function:

```javascript
export const githubLoader = async ({ params }) => {
  const response = await fetch(`https://api.github.com/users/${params.username}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};
```

This allows data to be **preloaded before rendering the component**, improving UX.

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ashrafakib02/ReactRevision/tree/main/07reactRouter
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

---

## 📸 Example Route

```text
http://localhost:5173/github/ashrafakib02
```

This will display:

* GitHub avatar
* Follower count
* Profile information (loaded via `loader`)

---

## 🎯 Learning Purpose

This project is created for learning:

* React Router v6+
* Nested Routes
* Dynamic URL parameters
* **Loader functions for data fetching**
* API integration
* Route optimization techniques

---

## 📌 Future Improvements

* Add loading spinner while data is fetching
* Add error handling
* Improve UI styling
* Add more GitHub user details
* Add search functionality

---

## 📄 License

This project is created for educational purposes.

