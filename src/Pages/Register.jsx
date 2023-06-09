import React, { useContext, useState } from 'react';
// import { app } from '../firebase/firebase.config';

import { getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/Authprovider';
import app from '../Firebase/firebase.config1';
import SocialLogin from './SocialLogin';

// import SocialLogin from './Shared/SocialLogin/SocialLogin';

const auth = getAuth(app);
const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { creatuser, UpdateProfile } = useContext(AuthContext)
  const nevigate = useNavigate();
  const [error, setError] = useState('');
  const onSubmit = data => {
    // console.log(data);
    setError(' ');
    creatuser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        UpdateProfile(data.name, data.url)
          .then(() => {
            // console.log('user profe info updated')
            const saveUser = { name: data.name, email: data.email, role: 'student' }
            fetch('http://localhost:5001/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            }
            )
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user created  successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  nevigate('/')
                }
              })

            //  <Navigate to='/'></Navigate>
            

          })
          .catch(error => console.log(error))
      })
  }
  return (
    <>

      <div className="hero min-h-screen bg-base-200 text-center text-white">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>

          </div>
          <div className="card  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>Name field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text"  {...register("url", { required: true })} placeholder="url" className="input input-bordered" />
                {errors.url && <span className='text-red-600'>Photo Url field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  {...register("email")} type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type == 'minLength' && <span className='text-red-600'>Password must at least six character</span>}
                {errors.password?.type == 'pattern' && <span className='text-red-600'>Password must at one uppercase,lowercase,special character,one number</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-6">

                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>

            <p><small>Have an account? <Link to='/login'>Go to Login</Link></small></p>
           
            <SocialLogin></SocialLogin>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </>

  );
};

export default Register;













// import React from 'react';

// const Register = () => {
//       return (
//             <div>
//                   regiser
//             </div>
//       );
// };

// export default Register;