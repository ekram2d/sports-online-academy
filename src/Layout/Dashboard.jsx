import React, { useCallback, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Authprovider, { AuthContext } from '../providers/Authprovider';
import MycartClass from '../Pages/Dashboard/Mycart/MycartClass';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // TODO data from the server dynamic admin 

  // const isAdmin = true;
  const [isAdmin,,] = useAdmin();
  const isInstructor = false;
  const location = useLocation(isAdmin);
  console.log(isAdmin)
  // console.log(location.pathname.split('/')[2])
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        {/* {location.pathname.split('/')[2]=='mycartclass' && <MycartClass></MycartClass>} */}
        <Outlet></Outlet>

      </div>
      <div className="drawer-side bg-black">

        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* students deshboard */}


          {
            isAdmin ? <><li><Link className='font-bold' to='/dashboard/manageclass'>Manage Classes</Link></li>
              <li><Link className='font-bold' to='/dashboard/manageusers'>Manage Users</Link></li>
            </> : <>{
              isInstructor ? <><li><Link className='font-bold' to='/dashboard/myclass'>My Class</Link></li>
              <li><Link className='font-bold' to='/dashboard/addclass'>Add Class</Link></li></> : <><li><Link className='font-bold' to='/dashboard/mycartclass'>My cart Class</Link></li>
                <li><Link className='font-bold' to='/dashboard/enroll'>My enroll Class</Link></li>
                <li><Link className='font-bold' to='/dashboard/payhistory'>Payment History</Link></li></>
            }</>
          }
          {/* {user ? } */}


          <div className='divider'></div>
          <li><Link to='/' className='font-bold'>Home</Link></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;