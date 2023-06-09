import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';
import { FaShoppingCart } from "react-icons/fa"
import useCartClass from '../Hooks/useCartClass';
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.photoURL)
  const [classCart, refetch] = useCartClass();
  // console.log(classCart)
  //   const[isAdmin] =useAdmin();
  const handlelogOut = () => {

    logOut()
      .then(res => {

      })
      .catch(error => console.log(error))

  }

  const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructor'>Instructors</Link></li>
    <li><Link to='/class'>classes</Link></li>
    {/* ={isAdmin ?'/dashboard/adminhome':'/dashboard/userhome'} */}
    <li><Link to='dashboard'>DashBoard</Link></li>
    <li><Link to="dashboard">

      <button className="btn btn-sm gap-2 ">
        <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary ">+{classCart?.length || 0}</div>
      </button>
    </Link></li>

    {
      user ? <>
      <li> <button onClick={handlelogOut} className='btn btn-primary btn-sm'>LogOut</button> </li>
      <li> <img className='w-16 rounded-lg' src={user?.photoURL}></img>
      </li> 
     
        </> : <>
        <li><Link to='/login'><button className='btn btn-primary btn-sm'>Login</button></Link></li></>
    }




  </>
  return (
    <div className="navbar  fixed z-10 bg-opacity-80 bg-slate-500 text-white max-w-screen-lg  rounded-lg font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SportsAcademy</a>
      </div>
      <div className="navbar-center hidden lg:flex  items-center justify-center">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <Link to='/login' className="btn">Started</Link>
      </div> */}
    </div>
  );
};

export default NavBar;