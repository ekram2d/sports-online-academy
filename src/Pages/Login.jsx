import React, { useContext, useEffect, useRef, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';

import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config1';
import { AuthContext } from '../providers/Authprovider';
import SocialLogin from './SocialLogin';



const auth=getAuth(app);
const Login = () => {
      const captchaRef = useRef(null)
      const [disable, setDisable] = useState(true);
      const[error,setError]=useState('');
        const {signIn}=useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/"
      //   useEffect(()=>{
      //     loadCaptchaEnginge(6); 

      //   },[])
      const handleLogin = event => {
            event.preventDefault();
            setError(" ");
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            // console.log(email,password)
            signIn(email,password)
            .then(result=>{
              const user =result.user;
              console.log(user);
              Swal.fire({
                title: 'User Login Successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from,{replace:true});
            })
            .catch(error=>setError(error.message))
      }

      return (
            <>
                  {/* <Helmet>
        <title>Bisto Boss | Login</title>


      </Helmet> */}
                  <div className="hero min-h-screen bg-base-200 text-white">
                        <div><div className="hero-content flex-col md:flex-row-reverse">
                              <div className="text-center md:w-1/2 lg:text-left">
                                    <h1 className="text-5xl font-bold">Login now!</h1>

                              </div>
                              <div className="card  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleLogin} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      {/* <LoadCanvasTemplate /> */}
                                                </label>
                                                {/* <input  onBlur={handleValidateCaptcha} type="text" name='capcha' placeholder="type the text above" className="input input-bordered" /> */}
                                                {/* <button className='btn btn-outline btn-xs'>validate</button> */}
                                                
                                          </div>
                                          <div className="form-control mt-6">

                                                <input className="btn btn-primary" type="submit" value="Login" />
                                          </div>
                                          <div>
                                          <p className='text-center text-red-600'>{error}</p>
                                          </div>
                                    </form>

                                    <p className='text-center'> <small>New Here ? <Link to='/register'>Create an Account</Link></small></p>
                                    <SocialLogin></SocialLogin>
                                    {/* <SocialLogin></SocialLogin> */}
                              </div>
                        </div>
                       </div>
                     
                  </div>
                
                 
            </>
      );
};

export default Login;