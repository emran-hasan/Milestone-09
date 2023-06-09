import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('products.json')
      },
      {
        path: '/review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
