import React from 'react';
import useCartClass from '../../../Hooks/useCartClass';
import Swal from 'sweetalert2';

const MycartClass = () => {
      const [cart,refetch] = useCartClass();

      // console.log(cart)
      const total = cart.reduce((sum, item) => item.price + sum, 0)
      const hanldleDelete = (id) => {
            // console.log(id);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {

                        fetch(`http://localhost:5001/carts/${id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                          )
                                          refetch();
                                    }
                              })
                        //   Swal.fire(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        //   )
                  }
            })
      }
      return (
            <div className='w-full ms-2 mt-3'>
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
                                                            <button onClick={() => hanldleDelete(item._id)} className='btn btn-sm btn-warning'>delete</button>
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