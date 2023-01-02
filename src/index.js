import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './components/App';
import About from './components/about';
import Contact from './components/contact-us';
import Menu from './components/menu';

let menuItems = [ 
  { id:1, name : "Home", path : "/", isActive : true },
  { id:2, name : "About", path : "/about", isActive : false },
  { id:3, name : "Contact Us", path : "/contact",  isActive : false }
];

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Menu menuList={menuItems} />,
    children: [
      {
        path: "/home",
        element: <App />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={routing} /> );
