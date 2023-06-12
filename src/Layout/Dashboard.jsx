import React, { useContext } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Authprovider, { AuthContext } from '../providers/Authprovider';
import MycartClass from '../Pages/Dashboard/Mycart/MycartClass';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  // const isAdmin =true;
  const location = useLocation();
  console.log(location.pathname);
console.log(isAdmin);
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        {location.pathname === '/dashboard' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl font-bold font-serif text-orange-600 uppercase'>Welcome To Your DashBoard</h2>
            </motion.h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
        
        {location.pathname === '/dashboard' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='uppercase font-bold'>Please click the left side button</h3>
            {/* Add your desired animation components or elements here */}
          </motion.div>
        )}
      </div>
      <div className="drawer-side bg-black">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink className=' font-bold btn btn-primary m-2' to='/dashboard/manageclass'>
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink className=' font-bold btn btn-primary m-2' to='/dashboard/manageusers'>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {isInstructor ? (
                <>
                  <li>
                    <NavLink className=' font-bold btn btn-primary m-2' to='/dashboard/myclass'>
                      My Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className=' font-bold btn btn-primary m-2'to='/dashboard/addclass'>
                      Add Class
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink className=' font-bold btn btn-primary m-2' to='/dashboard/mycartclass'>
                      My cart Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className=' font-bold btn btn-primary m-2' to='/dashboard/enroll'>
                      My enroll Class
                    </NavLink>
                  </li>
                  <li>
                  
                    <NavLink className=' font-bold btn btn-primary m-2' to='/dashboard/payhistory'>
                      Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </>
          )}
          <div className='divider'></div>
          <li>
            <Link to='/' className=' font-bold btn btn-primary m-2'>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
