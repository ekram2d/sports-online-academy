import React from 'react';
import usemenu from '../Hooks/usemenu';
import ClassDetailsDesc from './ClassDetailsDesc';

const ClassDetails = () => {
      const [data,]=usemenu();
      return (
            <div className='lg:grid lg:grid-cols-2 gap-3 '>
            {
                  data?.map((data, index) =>
<ClassDetailsDesc key={index + 1} data={data}></ClassDetailsDesc>
                        // {data?.status=='approved' ? <></>:<div><p>not approved</p></div>} 
                  )
            }
      </div>
      );
};

export default ClassDetails;