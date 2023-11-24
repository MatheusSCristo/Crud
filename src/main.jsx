import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import Home from './Pages/Home/Home.jsx';

import './index.css'
/*const router = createHashRouter([
  {
    path: "/Crud",
    element: <App />,
    children: [
      {
        path: "/Crud",
        element: <Home />,
      },
      {
        path: "/Crud/register",
        element: <Register />,
      },
      {
        path: "/Crud/login",
        element: <Login />,
      },

    ],
  },
])*/;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
)
