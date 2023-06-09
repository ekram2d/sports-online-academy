import React from 'react';
import useCartClass from '../../../Hooks/useCartClass';

const MycartClass = () => {
      const [cart,] = useCartClass();
      console.log(cart)
      const total = cart.reduce((sum, item) => item.price + sum, 0)
      return (
            <div className='w-full ms-2'>
                  <div className='lg:flex justify-between items-center '>
                        <h3 className='text-2xl'>Total Class select:{cart.length}</h3>
                        <h3 className='text-2xl'>Total: ${total}</h3>
                        <button className='btn btn-sm btn-warning'>Pay</button>
                  </div>
                  <div className="overflow-x-auto mt-3">
                        <table className="table ">
                              {/* head */}
                              <thead className='font-bold text-black'>
                                    <tr>
                                          <th>
                                                #
                                          </th>
                                          <th>Class Image</th>
                                          <th>Class Name</th>
                                          <th>Price</th>
                                          <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}

                                    {
                                          cart?.map((item, index) =>
                                                <tr key={item._id}>
                                                      <th>
                                                            <label>
                                                                  {index + 1}
                                                            </label>
                                                      </th>
                                                      <td>
                                                            <div className="flex items-center space-x-3">
                                                                  <div className="avatar">
                                                                        <img src={item.classImage} alt="" />
                                                                  </div>

                                                            </div>
                                                      </td>
                                                      <td>
                                                            <div>
                                                                  <div className="">{item.className}</div>

                                                            </div>

                                                      </td>
                                                      <td>{item.price}</td>
                                                      <th>
                                                            <button className='btn btn-sm btn-warning'>delete</button>
                                                      </th>
                                                </tr>
                                          )
                                    }




                              </tbody>



                        </table>
                  </div>

            </div>
      );
};

export default MycartClass;