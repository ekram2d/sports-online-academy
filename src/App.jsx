import React from 'react';
import Home from './Components/Home/Home/Home';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from './Pages/Footer';
import NavBar from './Pages/Navbar';

const App = () => {
  const location = useLocation();
  const noheaderfooter = location.pathname.includes('login') || location.pathname.includes('register');
  return (
    <div >

      {
        noheaderfooter || <NavBar></NavBar>
      }

      <Outlet></Outlet>
      {
        noheaderfooter || <Footer></Footer>}
    </div>
  );
};

export default App;