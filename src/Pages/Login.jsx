import React, { useContext, useEffect, useRef, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../Providers/AuthProvider';
// import { app } from '../../firebase/firebase.config';
// import { getAuth } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';
// const auth = getAuth(app);
const Login = () => {
      const captchaRef = useRef(null)
      const [disable, setDisable] = useState(true);
      //   const {signIn}=useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/"
      //   useEffect(()=>{
      //     loadCaptchaEnginge(6); 

      //   },[])
      const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            // console.log(email,password)
            // signIn(email,password)
            // .then(result=>{
            //   const user =result.user;
            //   console.log(user);
            //   Swal.fire({
            //     title: 'User Login Successful',
            //     showClass: {
            //       popup: 'animate__animated animate__fadeInDown'
            //     },
            //     hideClass: {
            //       popup: 'animate__animated animate__fadeOutUp'
            //     }
            //   });
            //   navigate(from,{replace:true});
            // })
      }




      //    const handleValidateCaptcha=(e)=>{
      //     const value = e.target.value;
      //     setDisable(false)
      //     if(validateCaptcha(value)){
      //       // console.log(value)
      //       setDisable(false);

      //     }
      //     else{
      //       setDisable(true)

      //     }

      //     // console.log(e.target.capcha.value)

      //    }
      return (
            <>
                  {/* <Helmet>
        <title>Bisto Boss | Login</title>


      </Helmet> */}
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col md:flex-row-reverse">
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
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover mt-2">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">

                                                <input className="btn btn-primary" type="submit" value="Login" />
                                          </div>
                                    </form>

                                    <p><small>New Here ? <Link to='/register'>Create an Account</Link></small></p>
                                    {/* <SocialLogin></SocialLogin> */}
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Login;