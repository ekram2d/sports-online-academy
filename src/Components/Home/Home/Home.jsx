import React from 'react';

import Slider from './Slider/Slider';
import usemenu from '../../../Hooks/usemenu';


const Home = () => {
      const data=usemenu();
      // console.log(data)
      return (
            <div className=''>
                 
               <Slider></Slider>
                  
            </div>

            

            
      );
};

export default Home;