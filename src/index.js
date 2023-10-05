import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Viwes/Contact/Contact';
import Home from './Viwes/Home/Home';
import About from './Viwes/About/About';

const router = createBrowserRouter([
  {
    path: "/Home",
    element:<Home/>
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  
);

