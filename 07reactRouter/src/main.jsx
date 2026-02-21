import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { createBrowserRouter, Route } from 'react-router'

import Home from './components/Home/home.jsx'
import About from './components/Home/About.jsx'
import Contact from './components/Home/Contact.jsx'
import Users from './components/User/Users.jsx'
import Github from './components/Github/Github.jsx'
import { GithubInfoLoader } from './components/Github/GithubInfoLoader.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
      
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<Users />} />
      <Route 
        loader={GithubInfoLoader}
        hydrateFallbackElement={<div>Loading...</div>}
        path='github' 
        element={<Github />} 
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
