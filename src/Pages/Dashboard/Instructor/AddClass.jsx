import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/Authprovider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
      const { user, loading } = useContext(AuthContext);
      const [axiosSecure] = useAxiosSecure();
      const { register, handleSubmit, reset } = useForm();
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


      //   console.log(user);

      const onSubmit = data => {


            const instructorImage = user?.photoURL;
            const formData = new FormData();
            formData.append('image', data.imageclass[0]);
            // formData.append('classImage', data.classImage[0])


            fetch(img_hosting_url, {
                  method: 'POST',
                  body: formData
            })
            .then(res => res.json())
            .then(imgResponse => {
                        if (imgResponse.success) {
                              const imgURL = imgResponse.data.display_url;
                              const { className, name, email, availableSeats, price, status } = data;
                              const newItem = { className, name, price: parseFloat(price), availableSeats: parseInt(availableSeats), email, status,classImage: imgURL, image: user?.photoURL }
                              console.log(newItem)
                              axiosSecure.post('/data', newItem)
                                    .then(data => {
                                          console.log('after posting new menu item', data.data)
                                          if (data.data.insertedId) {
                                                // reset();
                                                Swal.fire({
                                                      position: 'top-end',
                                                      icon: 'success',
                                                      title: 'Item added successfully',
                                                      showConfirmButton: false,
                                                      timer: 1500
                                                })
                                          }
                                    })
                        }
                  })

      };

      return (
            <div className='w-full ms-3 uppercase font-serif text-center text-2xl bg-black text-white mx-auto font-bold rounded-lg'>
                  <h3 className=''>Add a Class</h3>
                  {/*  */}
                  <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full mb-4">
                              <label className="label">
                                    <span className="label-text font-semibold">Class Name*</span>
                              </label>
                              <input type="text" placeholder="Class Name"
                                    {...register("className", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-4">
                              <label className="label">
                                    <span className="label-text">Class Image*</span>
                              </label>
                              <input type="file" {...register("imageclass", { required: true })} className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="flex my-4">

                              <div className="form-control w-full ml-4">
                                    <label className="label">
                                          <span className="label-text font-semibold">Instructor Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} value={user?.displayName} className="input input-bordered w-full " />
                              </div>
                        </div>
                        <div className="flex my-4">

                              <div className="form-control w-full ml-4">
                                    <label className="label">
                                          <span className="label-text font-semibold">Instructor Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} value={user?.email} className="input input-bordered w-full " />
                              </div>
                        </div>


                        <div className="flex my-4">

                              <div className="form-control w-full ml-4">
                                    <label className="label">
                                          <span className="label-text font-semibold">Avialable seats</span>
                                    </label>
                                    <input type="number" {...register("availableSeats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
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
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Status</span>
                              </label>
                              <textarea {...register("status", { required: true })} className="textarea textarea-bordered h-24" placeholder="" value="pending"></textarea>
                        </div>

                        <input className="btn btn-sm btn-primary mt-4" type="submit" value="Add Class" />
                  </form>


            </div>
      );
};

export default AddClass;


   //     if(imgResponse.success){
                        //         const imgURL = imgResponse.data.display_url;
                        //         const {name, price, category, recipe} = data;
                        //         const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                        //         console.log(newItem)
                        //         axiosSecure.post('/menu', newItem)
                        //         .then(data => {
                        //             console.log('after posting new menu item', data.data)
                        //             if(data.data.insertedId){
                        //                 reset();
                        //                 Swal.fire({
                        //                     position: 'top-end',
                        //                     icon: 'success',
                        //                     title: 'Item added successfully',
                        //                     showConfirmButton: false,
                        //                     timer: 1500
                        //                   })
                        //             }
                        //         })
                        //     }