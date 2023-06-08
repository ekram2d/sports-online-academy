import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config1';





import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);

const auth=getAuth(app)
// console.log(app)
const Authprovider = ({children}) => {
      const[user,setUser]=useState(null);
      const [loading,setLoading]=useState(true);
      const Googleprovider = new GoogleAuthProvider();
      // console.log(user);
     const creatuser= (email, password)=>{
      setLoading(true);

      return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn = (email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
     } 

     const googleSignIn =()=>{
      setLoading(true);
      return signInWithPopup(auth, Googleprovider)}
    
     const logOut = ()=>{
      setLoading(true)
      return signOut(auth);

     }
     const UpdateProfile = (name,url)=>{
    return  updateProfile(auth.currentUser, {
            displayName:name, photoURL: url
          })
     }

      useEffect(()=>{
         const unsubcribe =   onAuthStateChanged(auth,currentuser=>{
         
              setUser(currentuser);
              setLoading(false)
            //   console.log("current user",currentuser);
            //get and set token 
            // if(currentuser){
            //       axios.post('http://localhost:5000/jwt',{email:currentuser.email})
            //       .then(data=>{
            //             // console.log(data.data.token)
            //             localStorage.setItem('access-token',data.data.token);
            //             setLoading(false)
                  
                  
            //       })
            // }else{

            //       localStorage.removeItem('access-token');
            // }
             
            })
            return ()=>{
                  return unsubcribe();
            }

      },[])


      const authInfo={
            user,
            loading,
            creatuser,
            signIn,
            logOut,
            UpdateProfile,
            googleSignIn

      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
                  
            </AuthContext.Provider>
      );
};

export default Authprovider;