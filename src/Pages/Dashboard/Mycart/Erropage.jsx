import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Erropage = () => {
      const { error, status } = useRouteError()
      return (
            <div className='w-[80%] mx-auto mt-4'>

                  <div>
                        <img className='w-[45%] mx-auto mt-4' src="https://amplethemes.com/blog/wp-content/uploads/2020/09/error404-1024x576.jpg"></img>
                  </div>
                  <p className='text-red-700 text-center mt-3'>
                        {error?.message}
                        <p> <Link
                              to='/'
                              className='text-blue-800 text-center'
                        >
                              Back to homepage
                        </Link></p>

                  </p>


            </div>
      );
};

export default Erropage;