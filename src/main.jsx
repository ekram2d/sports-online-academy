import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home/Home.jsx';
import Login from './Pages/Login.jsx';
import Authprovider from './providers/Authprovider.jsx';
import Register from './Pages/Register.jsx';




// import AuthProvider from './providers/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: 'login',
        element: <Login></Login>
      }, {
        path: 'register',
        element: <Register></Register>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>

      <div className='max-w-screen-lg mx-auto'>
        <RouterProvider router={router} />

      </div>
    </Authprovider>


  </React.StrictMode>,
)
