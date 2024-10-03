import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';

// pages imported 
import Root from './Pages/Root';
import Error from './Pages/Error';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Single from './Pages/Single';
import Write from './Pages/Write';
import Index from './Pages/Index';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Index/>
      },
      {
        path:'/:id',
        element:<Single/>
      },{
      path:'write',
      element:<Write/>
      },{
      path:'write/:id',
      element:<Write/>
    },{
      path:'/category/:category',
      element:<Index/>
    }
  ]
  },{
    path:'/login',
    element:<Login/>,
  },{
    path:'/login/register',
    element:<Register/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/> 
  </React.StrictMode>
);
reportWebVitals();
