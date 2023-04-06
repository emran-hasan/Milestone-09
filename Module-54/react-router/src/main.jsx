import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
<<<<<<< HEAD
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
=======
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Header from './components/Header/Header';
import User from './components/User/User';
import FriendsDetails from './components/FriendDetails/FriendsDetails';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>This is Blank page</div>
//   },
//   {
//     path: '/home',
//     element: <Home></Home>,
//     errorElement: <Error></Error>
//   },
//   {
//     path:'/contact',
//     element:<Contact></Contact>
//   },
//   {
//     path:'/about',
//     element: <About></About>
//   },
//   {
//     path:'/vite',
//     element: <App></App>
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'user',
        element:<User></User>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path:'friend/:friendId',
        element: <FriendsDetails></FriendsDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'post',
        element:<Post></Post>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'posts/:postsId',
        element: <PostDetails></PostDetails>,
        loader: ({params})=> console.log(params)
        
      },
      {
         path:'/contact',
         element: <Contact></Contact>
      },
      {
         path:'/vite',
         element: <App></App>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
>>>>>>> b4168bbfd1bf041d762184e95f764b449fe4c466
