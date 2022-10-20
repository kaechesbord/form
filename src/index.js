import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import './index.css';
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';

const routes = createBrowserRouter([
  {
    path:"/",
    element: <Registration />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/home",
    element: <Home/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
reportWebVitals();