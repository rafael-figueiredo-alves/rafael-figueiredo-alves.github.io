import React from 'react'
import ReactDOM from 'react-dom/client'
//import './main.css'
import { RouterProvider } from 'react-router-dom'
import MyRoutes from './utils/MyRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={MyRoutes} />
  </React.StrictMode>,
)
