import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Homepage from './Pages/Homepage.jsx';
import Mylist from './Pages/Mylist.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/mylist",  
    element: <Mylist />,
  },
  {
    path: "/",
    element: <App />,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
