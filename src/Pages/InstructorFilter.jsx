import React from 'react';
import usemenu from '../Hooks/usemenu';
import Instructors from '../Components/Home/Home/Instructors';

const InstructorFilter = () => {
      const [data,]=usemenu();
      return (
           
                  <div className='lg:grid lg:grid-cols-2 gap-3 '>
                        {
                              data?.slice(0, 6).map((data, index) =>

                                    <Instructors key={index + 1} data={data}></Instructors>
                              )
                        }
                  </div>
            
      );
};

export default InstructorFilter;