import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
      const {googleSignIn}=useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/"
      const handleGoogleSignIn=()=>{

            googleSignIn()
            .then(result=>{
                  const loggedInuser=result.user;
                   console.log(loggedInuser);
                   const saveUser = { name: loggedInuser.displayName, email: loggedInuser.email, role: 'student' }
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
                              title: 'successfully done',
                              showConfirmButton: false,
                              timer: 1500
                            })
                            navigate(from,{replace:true});
                          }
                        })
          





                 
            })
      }
      return (
            <div className='text-center m-2'>
                  <div className='divider'></div>
                  <button onClick={handleGoogleSignIn} className="btn btn-circle bg-slate-100 hover:bg-slate-300">
                        <p className='text-black font-bold'><FaGoogle></FaGoogle></p>
                  </button>
            </div>
      );
};

export default SocialLogin;