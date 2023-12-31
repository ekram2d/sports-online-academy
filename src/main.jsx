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
// import Privateroute from './Pages/Privateroute.jsx';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard.jsx';
import MycartClass from './Pages/Dashboard/Mycart/MycartClass.jsx';

import Enroll from './Pages/Dashboard/Mycart/Myenroll/Enroll.jsx';
import PaymentHistory from './Pages/Dashboard/Mycart/Payment/PaymentHistory.jsx';
import MangeUser from './Pages/Dashboard/Admin/MangeUser.jsx';
import ManageClasses from './Pages/Dashboard/Admin/ManageClasses.jsx';
import Myclass from './Pages/Dashboard/Instructor/Myclass.jsx';
import AddClass from './Pages/Dashboard/Instructor/AddClass.jsx';
// import PrivateRouteAdmin from './Pages/Dashboard/Instructor/PrivateRouteInstructor.jsx';
import PrivateRouteInstructor from './Pages/Dashboard/Instructor/PrivateRouteInstructor.jsx';
import UpdateClass from './Pages/Dashboard/Instructor/UpdateClass.jsx';
import Payment from './Pages/Dashboard/Mycart/Payment/Payment.jsx';
import Erropage from './Pages/Dashboard/Mycart/Erropage.jsx';
import PrivRoute from './providers/PrivRoute.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';
import PrivateRouteAdmin from './Pages/Dashboard/Admin/PrivateRouteAdmin.jsx';
const queryClient = new QueryClient()


// import AuthProvider from './providers/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,


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
    path: 'dashboard',
    element: <PrivRoute><Dashboard></Dashboard></PrivRoute>,
    errorElement: <Erropage></Erropage>,
    children: [


      {
        path: 'mycartclass',
        element: <MycartClass></MycartClass>

      },
      {
        path: 'enroll',
        element: <Enroll></Enroll>
      },
      {
        path: 'payhistory',
        element: <PaymentHistory></PaymentHistory>
      },

      {
        path: 'payment',
        element: <Payment></Payment>
      }, {
        path: 'manageusers',
        element: <PrivateRouteAdmin><MangeUser></MangeUser></PrivateRouteAdmin>
      }, {
        path: 'manageclass',
        element: <PrivateRouteAdmin><ManageClasses></ManageClasses></PrivateRouteAdmin>
      }, {
        path: 'myclass',
        element: <PrivateRouteInstructor><Myclass></Myclass></PrivateRouteInstructor>
      },
      {

        path: 'addclass',
        element: <PrivateRouteInstructor><AddClass></AddClass></PrivateRouteInstructor>
      },
      {
        path: "update",
        element: <PrivateRouteInstructor><UpdateClass></UpdateClass></PrivateRouteInstructor>
      }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div className='max-w-screen-lg mx-auto'>
            <RouterProvider router={router} />

          </div>
        </ThemeProvider>
      </QueryClientProvider>


    </Authprovider>


  </React.StrictMode>,
)
