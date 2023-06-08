import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../Firebase/firebase.config1';

// import { app } from '../Firebase/firebase.config';





export const AuthContext = createContext(null);

// const auth=getAuth(app)
console.log(app)
const Authprovider = ({children}) => {
    

      const [user,setUser]=useState(null);
      const authInfo ={
      user,
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
                  
            </AuthContext.Provider>
      );
};

export default Authprovider;