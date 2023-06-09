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
import InstructorFilter from './Pages/InstructorFilter.jsx';
import ClassDetails from './Pages/ClassDetails.jsx';
import Privateroute from './Pages/Privateroute.jsx';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard.jsx';
import MycartClass from './Pages/Dashboard/Mycart/MycartClass.jsx';

import Enroll from './Pages/Dashboard/Mycart/Myenroll/Enroll.jsx';
import PaymentHistory from './Pages/Dashboard/Mycart/Payment/PaymentHistory.jsx';
const queryClient = new QueryClient()


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
      },
      {
        path: '/instructor',
        element: <InstructorFilter></InstructorFilter>
      },
      {
        path: '/class',
        element: <ClassDetails></ClassDetails>
      },
      


    ]
  },
  {
    path:'dashboard',
    element: <Privateroute><Dashboard></Dashboard></Privateroute>,
    children: [


      {
        path:'mycartclass',
        element:<MycartClass></MycartClass>

      },
      {
        path:'enroll',
        element:<Enroll></Enroll>
      },
      {
        path: 'payhistory',
        element: <PaymentHistory></PaymentHistory>
      }
     

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-lg mx-auto'>
          <RouterProvider router={router} />

        </div>
      </QueryClientProvider>


    </Authprovider>


  </React.StrictMode>,
)
