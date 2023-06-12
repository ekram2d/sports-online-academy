import React, { useContext, useState } from 'react';
import useInstructorData from '../../../Hooks/useInstructorData';
import { Link } from 'react-router-dom';
import UpdateClass from './UpdateClass';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/Authprovider';
import { BiCommentCheck } from 'react-icons/bi';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import TotalEnrolled from './TotalEnrolled';

const Myclass = () => {
      const[classdata,,refetch]=useInstructorData();
      const { user } = useContext(AuthContext)
      const { register, handleSubmit, reset } = useForm();
      
      const [feedbackUserId, setFeedbackUserId] = useState('');
      const [axiosSecure]=useAxiosSecure();
      function showModal(userId) {
            const modal = document.getElementById('my_modal_5');
            const userIdInput = modal.querySelector('input[name="user_id"]');
            userIdInput.value = userId;
            modal.showModal();
      }
      const handleFeedback = (event) => {
            event.preventDefault();

            const userId = event.target.elements.user_id.value;
            const name = event.target.elements.nameclass.value;
            const price = event.target.elements.price.value;
            const seats = event.target.elements.seats.value;
       console.log(userId,name,price,seats);
            // console.log("User ID:", userId);
            // console.log("Email:", feedback);
      
            const data = {
                  field1: name,
                  field2:parseFloat(price),
                  field3:parseInt(seats)
                   // Replace 'new_value1' with the new value for field1
            };

            axiosSecure.patch(`/update/instructor/${userId}`, data)
                  .then((response) => {
                        console.log('User updated:', response.data.modifiedCount);
                        if (response.data.modifiedCount >= 1) {
                          refetch();
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: "Updated",
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
      console.log(classdata)

      return (
            <>
                  <div className="w-full mx-3">
                        <h3 className="font-serif text-center text-2xl">Instructor Add a Class: {classdata?.length}</h3>
                        <div className="overflow-scroll">
                              <table className="w-full overflow-auto">
                                    <thead>
                                          <tr>
                                                <th className="px-4 py-2">#</th>
                                                <th className="px-4 py-2">Class Name</th>
                                                <th className="px-4 py-2">Total Enrolled Students</th>
                                                <th className="px-4 py-2">Status</th>
                                                <th className="px-4 py-2">Feedback</th>
                                                <th className="px-4 py-2">Update</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {classdata?.map((classItem, index) => (
                                                <tr key={classItem._id}>
                                                      <td className="px-4 py-2">{index + 1}</td>
                                                      <td className="px-4 py-2">{classItem.className}</td>
                                                      <td className="px-4 py-2"><TotalEnrolled classItem={classItem}></TotalEnrolled></td>
                                                      <td className="px-4 py-2">{classItem.status}</td>
                                                      <td className="px-4 py-2">{classItem.Feedback}</td>
                                                      <td className="px-4 py-2">
                                                      <button onClick={() => {
                                                            setFeedbackUserId(classItem?._id);
                                                            window.my_modal_5.showModal();
                                                      }} className="btn btn-sm btn-primary">
                                                            <BiCommentCheck  />
                                                      </button>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>

                        </div>
                  </div>

                  {/* moda l*/}
                  {/* You can open the modal using ID.showModal() method */}

                  {/* You can open the modal using ID.showModal() method */}
              
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
                                                <span className="label-text">Class Name</span>
                                          </label>
                                          <input type="text" name="nameclass" placeholder="text" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">price</span>
                                          </label>
                                          <input type="number" name="price" placeholder="price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">avialalbe saeats</span>
                                          </label>
                                          <input type="number" name="seats" placeholder="seats" className="input input-bordered" required />
                                    </div>
                                    <div className="modal-action">
                                          <button type="submit" className="btn btn-sm btn-primary">
                                                Send
                                          </button>
                                    </div>
                              </form>
                        </div>
                  </dialog>

                  {/* <dialog id="my_modal_4" className="modal bg-slate-600">
<form method="dialog" onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full mb-4">
                              <label className="label">
                                    <span className="label-text font-semibold">Class Name*</span>
                              </label>
                              <input type="text" placeholder="Class Name"
                                    {...register("className", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full " />
                        </div>
                     
                        <div className="flex my-4">

                              <div className="form-control w-full ml-4">
                                    <label className="label">
                                          <span className="label-text font-semibold">Instructor Name</span>
                                    </label>
                                    <input placeholder='instructor name' type="text" {...register("name", { required: true })} value={user?.displayName} className="input input-bordered w-full " />
                              </div>
                        </div>
                  


                       
                        <div className="flex my-4">

                              <div className="form-control w-full ml-4">
                                    <label className="label">
                                          <span className="label-text font-semibold">Price*</span>
                                    </label>
                                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                              </div>
                        </div>
                        <div className="modal-action">
      {/* if there is a button, it will close the modal */}
                  {/* <button className="btn">Close</button>
    </div> */}

                  {/* <input className="btn btn-sm btn-primary mt-4" type="submit" value="Update class" />
                  </form>

</dialog> */}





            </>

      );
};

export default Myclass;