import React from 'react';
import Home from './Components/Home/Home/Home';
import { Outlet } from 'react-router-dom';

import Footer from './Pages/Footer';
import NavBar from './Pages/Navbar';

const App = () => {
  return (
    <div >
      
      <NavBar></NavBar>
     
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default App;