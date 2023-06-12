import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../providers/Authprovider';

const PaymentHistory = () => {
      const [axiosSecure] = useAxiosSecure();

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
      return (
            <div >
                  <h2 className='text-center font-serif text-2xl'>Payment History</h2>

                  <div className="overflow-x-auto">
                        <table className="table font-bold  ">
                              {/* head */}
                              <thead >
                                    <tr className='font-bold bg-black text-white' >
                                          <th>#</th>
                                          <th>User Email</th>
                                          <th>Transaction Id</th>
                                          <th>Date</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          data?.map((item,index) =>
                                                <tr>
                                                      <th>{index+1}</th>
                                                      <td>{item.userEmail}</td>
                                                      <td>{item.trensactionId}</td>
                                                      <td>{item.data}</td>
                                                </tr>
                                          )
                                    }

                              </tbody>
                        </table>
                  </div>



            </div>
      );
};

export default PaymentHistory;