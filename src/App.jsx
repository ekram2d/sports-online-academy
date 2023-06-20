import React, { useContext } from 'react';
import Home from './Components/Home/Home/Home';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from './Pages/Footer';
import NavBar from './Pages/Navbar';
import { ThemeContext } from './providers/ThemeProvider';

const App = () => {
  const {darkmode, toggleMode}= useContext(ThemeContext);

  const location = useLocation();
  const noheaderfooter = location.pathname.includes('login') || location.pathname.includes('register');
  return (
    <div className={`${darkmode ?'dark':'light'}`}>
      

      {
        noheaderfooter || <NavBar toggleMode={toggleMode}></NavBar>
      }

      <Outlet></Outlet>
      {
        noheaderfooter || <Footer></Footer>}
    </div>
  );
};

export default App;