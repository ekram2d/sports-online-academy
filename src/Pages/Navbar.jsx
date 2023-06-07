import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [cart] =useCart();
//   // console.log(cart)
//   const[isAdmin] =useAdmin();
//   const handlelogOut = () => {

//     logOut()
//       .then(res => {

//       })
//       .catch(error => console.log(error))

//   }

  const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order Food</Link></li>
    {/* ={isAdmin ?'/dashboard/adminhome':'/dashboard/userhome'} */}
    <li><Link to='/'>DashBoard</Link></li>
    <li><Link to="/dashboard/mycart">

      <button className="btn gap-2">
        {/* <FaShoppingCart></FaShoppingCart> */}
        <div className="badge badge-secondary">+{1 || 0}</div>
      </button>
    </Link></li>
{/* 
    {
      user ? <>
      
        <button  className='btn btn-primary'>LogOut</button></> : <>
        <li><Link to='/login'>Login</Link></li></>
    } 

    
onClick={handlelogOut}*/}


  </>
  return (
    <div className="navbar  fixed z-10 bg-slate-950 text-white max-w-screen-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavBar;