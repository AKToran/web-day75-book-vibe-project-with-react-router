import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {
    path:'/',
    Component: App
  },
  {
    path:'*',
    element: <div className='my-34 text-5xl text-center text-black flex align-center justify-center'>404 NOT FOUND</div>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
