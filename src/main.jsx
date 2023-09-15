import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'
import Seguros from './routes/Seguros/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import Login from './routes/Login/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/integrantes',
        element:<Integrantes/>
      },
      {
        path:'/seguros',
        element:<Seguros/>
      },
      {
        path:'/vistoria',
        element:<Vistoria/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path: '/antiga',
        element: <Navigate to='/'/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
