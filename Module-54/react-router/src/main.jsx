import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/home",
//     element: <div>This is Home page</div>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
// ]);


const router =createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "about",
        element: <About></About>
      },
    ]
  
  }
])





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
