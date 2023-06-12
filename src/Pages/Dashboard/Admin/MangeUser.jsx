import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/Authprovider';
import { useQuery } from '@tanstack/react-query';
import { BiUserCheck,BiUserCircle} from "react-icons/bi";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const MangeUser = () => {

      const { user, loading } = useContext(AuthContext);
      const[axiosSecure]=useAxiosSecure();
      const { isLoading, refetch, data: userscart = [], error } = useQuery({
            queryKey: ['users'],
            enabled: !loading,
            queryFn: async () => {

                  const response = await axiosSecure.get('/users')
                  // , {
                  //       headers: {
                  //             authorization: `bearer ${token}`
                  //       }
                  // })
                  return response.data;
            },

      })
      const handleAdmin=(user,data)=>{
            // console.log(id);

            const data1 = {
                  field1: data, // Replace 'new_value1' with the new value for field1
                  
                };
                
                fetch(`https://summer-camp-server-opal.vercel.app/users/admin/${user?._id}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data1),
                })
                  .then(response => response.json())
                  .then(updatedUser => {
                      
                    console.log('User updated:', updatedUser.modifiedCount);
                    if(updatedUser.modifiedCount >=1){
                        refetch();
                        Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: `${user?.name} are now ${data}`,
                              showConfirmButton: false,
                              timer: 1500
                            })
                    }
                    // Handle the updated user data as needed
                  })
                  .catch(error => {
                    console.error('Error updating user:', error);
                    // Handle errors
                  });
      }

      // console.log(userscart)
      return (
            <div className='w-full ms-2'>
                 <p className='text-center uppercase font-serif text-black'> manage users : {userscart.length}</p>

                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr className='text-black font-bold'>
                                          <th>
                                               #
                                          </th>
                                          <th>Name</th>
                                          <th>email</th>
                                          <th>role</th>
                                          <th>Make Admin</th>
                                          <th>Make Instructor</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          userscart?.map((user,index)=>
                                                <tr key={user?._id}>
                                                <th>
                                                     {index+1}
                                                </th>
                                                <td>
                                                      <div className="flex items-center space-x-3">
                                                            
                                                            <div>
                                                                  <div className="">{user?.name}</div>
                                                                  
                                                            </div>
                                                      </div>
                                                </td>
                                                <td>
                                                      {user?.email}
                                                    
                                                </td>
                                                <td>{user?.role}</td>
                                                <th>
                                                     {
                                                      user?.role !='admin' ? <button onClick={()=>handleAdmin(user,'admin')} className="btn btn-primary btn-sm">
                                                        <BiUserCircle></BiUserCircle>

                                                      </button>: <button  className="btn btn-sm bg-white btn-disabled"> <BiUserCircle></BiUserCircle></button>
                                                     }
                                                </th>
                                                <th>
                                                {
                                                      user?.role !='instructor' ? <button onClick={()=>handleAdmin(user,'instructor')} className="btn btn-primary btn-sm">
                                                            <BiUserCheck></BiUserCheck>
                                                      </button>: <button  className="btn btn-sm bg-white  btn-disabled"><BiUserCheck></BiUserCheck></button>
                                                     }
                                                </th>
                                          </tr>

                                          )
                                    }
                                   
                                    {/* row 2 */}
                                   
                              </tbody>
                             

                        </table>
                  </div>
            </div>
      );
};

export default MangeUser;