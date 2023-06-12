import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useCartClass from '../../../../Hooks/useCartClass';
import { AuthContext } from '../../../../providers/Authprovider';

const Enroll = () => {


      const [axiosSecure] = useAxiosSecure();
      const [cart, refetch] = useCartClass();
      const { user } = useContext(AuthContext);
      const [data, setData] = useState([]);

      console.log(user);

      useEffect(() => {
            axiosSecure
                  .get(`/enroll/data/${user?.email}`)
                  .then((response) => {
                        const enrollments = response.data;
                        console.log('Enrollments:', enrollments);
                        setData(enrollments);
                  })
                  .catch((error) => {
                        console.error('Error retrieving enrollments:', error);
                  });
      }, [axiosSecure, user?.email]);
      // console.log(data)
      return (
            <>
                  <div >
                        <h2 className='text-center font-serif text-2xl'>Enroll classe</h2>
                        {
                              data?.map(item =>
                                    <div key={item._id} className="card lg:w-96 bg-gray-300 shadow-xl m-3 text-center">
                                          <figure><img className='w-[40%] rounded-lg m-2' src={item.classImage} alt="Shoes" /></figure>
                                          <h2 className='text-center text-xl'>Course Image</h2>
                                          <div className="card-body">
                                                <h2 className="card-title">


                                                </h2>
                                                CourseName:  {item.className}
                                                <p>Price: ${item.price}</p>

                                          </div>
                                    </div>

                              )
                        }
                  </div>
            </>
      );
};

export default Enroll;