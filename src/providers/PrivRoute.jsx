
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Navigate, useLocation } from "react-router";

// import { useContext } from "react";
// import { AuthContext } from "./Authprovider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";
// import { AuthContext } from "./Authprovider";


const PrivRoute= ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
// console.log(location)
    if(loading ){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivRoute;










// import React from 'react';

// const PrivRoute = () => {
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default PrivRoute;