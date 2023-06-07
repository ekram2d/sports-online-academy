import React from 'react';
import Home from './Components/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default App;