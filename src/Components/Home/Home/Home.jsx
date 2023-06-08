import React from 'react';

import Slider from './Slider/Slider';
import usemenu from '../../../Hooks/usemenu';
import ClaseeDes from './ClaseeDes';
import Instructors from './Instructors';


const Home = () => {
      const data = usemenu();
      // console.log(data)
      return (
            <>

                  <Slider></Slider>
                  <h1 className='text-center text-2xl m-3 font-bold'>Popular Classes Section</h1>
                  <div className='lg:grid lg:grid-cols-2 gap-3 '>
                       
                        {
                              data?.slice(0, 6).map((data, index) =>

                                    <ClaseeDes key={index + 1} data={data}></ClaseeDes>
                              )
                        }
                  </div>
                  <h1 className='text-center text-2xl m-3 font-bold'>Popular Instructors Section</h1>
                  <div className='lg:grid lg:grid-cols-2 gap-3 '>
                        {
                              data?.slice(0, 6).map((data, index) =>

                                    <Instructors key={index + 1} data={data}></Instructors>
                              )
                        }
                  </div>

            </>






      );
};

export default Home;