import React, { useState } from 'react';
import usemenu from '../../../Hooks/usemenu';
import { BiAccessibility, BiCommentCheck, BiUserCheck, BiUserCircle } from 'react-icons/bi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';



const ManageClasses = () => {
      const [data, isdataLoading, refetch] = usemenu();
      const [feedbackUserId, setFeedbackUserId] = useState('');
  const[axiosSecure]=useAxiosSecure();
      const handleStatus = (user, data) => {
            // console.log(id);

            const data1 = {
                  field1: data, // Replace 'new_value1' with the new value for field1

            };

            // fetch(`http://localhost:5001/status/admin/${user?._id}`, {
            //       method: 'PATCH',
            //       headers: {
            //             'Content-Type': 'application/json',
            //       },
            //       body: JSON.stringify(data1),
            // })
            //       .then(response => response.json())
            //       .then(updatedUser => {

            //             console.log('User updated:', updatedUser.modifiedCount);
            //             if (updatedUser.modifiedCount >= 1) {
            //                   refetch();
            //                   Swal.fire({
            //                         position: 'top-end',
            //                         icon: 'success',
            //                         title: `${user?.name} are now ${data}`,
            //                         showConfirmButton: false,
            //                         timer: 1500
            //                   })
            //             }
            //             // Handle the updated user data as needed
            //       })
            //       .catch(error => {
            //             console.error('Error updating user:', error);
            //             // Handle errors
            //       });
            axiosSecure.patch(`/status/admin/${user?._id}`, data1)
                  .then((response) => {
                        console.log('User updated:', response.data.modifiedCount);
                        if (response.data.modifiedCount >= 1) {
                              refetch();
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: `${user?.name} are now ${data}`,
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                        // Handle the updated user data as needed
                  })
                  .catch((error) => {
                        console.error('Error updating user:', error);
                        // Handle errors
                  });



      }

      function showModal(userId) {
            const modal = document.getElementById('my_modal_5');
            const userIdInput = modal.querySelector('input[name="user_id"]');
            userIdInput.value = userId;
            modal.showModal();
      }



      const handleFeedback = (event) => {
            event.preventDefault();

            const userId = event.target.elements.user_id.value;
            const feedback = event.target.elements.email.value;

            console.log("User ID:", userId);
            console.log("Email:", feedback);

            const data = {
                  field1: feedback, // Replace 'new_value1' with the new value for field1
            };

            axiosSecure.patch(`/feedback/admin/${userId}`, data)
                  .then((response) => {
                        console.log('User updated:', response.data.modifiedCount);
                        if (response.data.modifiedCount >= 1) {
                              refetch();
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: "Feedback sent",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                        // Handle the updated user data as needed
                  })
                  .catch((error) => {
                        console.error('Error updating user:', error);
                        // Handle errors
                  });

            const modal = document.getElementById('my_modal_5');
            modal.close();

            event.target.reset(); // Reset the form
      }







      return (
            <div className='w-full m-2'>
                  <p className='text-center uppercase font-serif text-black'> manage users : {data.length}</p>

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
                                          <th>Feedback</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          data?.map((user, index) =>
                                                <tr key={user?._id}>
                                                      <th>
                                                            {index + 1}
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
                                                      <td>{user?.status}</td>
                                                      <th>
                                                            {
                                                                  user?.status == 'pending' ? <button onClick={() => handleStatus(user, 'approved')} className="btn btn-primary btn-sm">
                                                                        Approved

                                                                  </button> : <button className="btn btn-sm bg-white btn-disabled">    Approved</button>
                                                            }
                                                      </th>
                                                      <th>
                                                            {
                                                                  user?.status == 'pending' ? <button onClick={() => handleStatus(user, 'deny')} className="btn btn-primary btn-sm">
                                                                        Deny
                                                                  </button> : <button className="btn btn-sm bg-white  btn-disabled">Deny</button>
                                                            }
                                                      </th>
                                                      <th>   <button onClick={() => {
                                                            setFeedbackUserId(user?._id);
                                                            window.my_modal_5.showModal();
                                                      }} className="btn btn-sm btn-primary">
                                                            <BiCommentCheck />
                                                      </button></th>
                                                </tr>

                                          )
                                    }

                                    {/* row 2 */}

                              </tbody>


                        </table>
                  </div>
                  {/* <button onClick={()=>window.my_modal_5.showModal(user?._id)} className="btn btn-sm   btn-primary"><BiCommentCheck></BiCommentCheck></button> */}

                  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleFeedback} className="card-body">
                                    <input type="hidden" name="user_id" value={feedbackUserId || ''} />

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">User ID</span>
                                          </label>
                                          <input type="text" name="user_id_display" value={feedbackUserId || ''} className="input input-bordered hidden" readOnly />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Feedback</span>
                                          </label>
                                          <input type="text" name="email" placeholder="text" className="input input-bordered" required />
                                    </div>

                                    <div className="modal-action">
                                          <button type="submit" className="btn btn-sm btn-primary">
                                                Send
                                          </button>
                                    </div>
                              </form>
                        </div>
                  </dialog>

            </div>
      );
};

export default ManageClasses;