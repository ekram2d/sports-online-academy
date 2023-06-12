import React from 'react';

import Slider from './Slider/Slider';
import usemenu from '../../../Hooks/usemenu';
import ClaseeDes from './ClaseeDes';
import Instructors from './Instructors';

const Home = () => {
  const [data,] = usemenu();

  return (
    <>
      <Slider />
      
      <h1 className='text-center text-2xl m-3 font-bold'>Popular Classes Section</h1>
      <div className='lg:grid lg:grid-cols-2 gap-3'>
        {data?.slice(0, 6).map((data, index) => (
          <ClaseeDes key={index + 1} data={data} />
        ))}
      </div>

      <h1 className='text-center text-2xl m-3 font-bold'>Popular Instructors Section</h1>
      <div className='lg:grid lg:grid-cols-2 gap-3'>
        {data?.slice(0, 6).map((data, index) => (
          <Instructors key={index + 1} data={data} />
        ))}
      </div>

      {/* Extra Section: Upcoming Events */}
      <div className='bg-gray-100 py-8'>
        <div className='container mx-auto'>
          <h1 className='text-center text-2xl font-bold'>Upcoming Events</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
            {/* Add your upcoming events here */}
            <div className='bg-white p-4 rounded shadow'>
              <h2 className='text-lg font-bold'>Event 1</h2>
              <p className='text-gray-600'>Date: 01/01/2023</p>
              <p className='text-gray-600'>Location: Sports Center</p>
            </div>
            <div className='bg-white p-4 rounded shadow'>
              <h2 className='text-lg font-bold'>Event 2</h2>
              <p className='text-gray-600'>Date: 02/01/2023</p>
              <p className='text-gray-600'>Location: Stadium</p>
            </div>
            <div className='bg-white p-4 rounded shadow'>
              <h2 className='text-lg font-bold'>Event 3</h2>
              <p className='text-gray-600'>Date: 02/01/2023</p>
              <p className='text-gray-600'>Location: TownRoad</p>
            </div>
            {/* Add more upcoming events here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
