

import React, { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';



const Privateroute = ({children}) => {
      const {user, loading}=useContext(AuthContext);
      const location=useLocation();
      if(loading){
            return  <><progress className="progress progress-accent w-56" value="0" max="100"></progress>
            <progress className="progress progress-accent w-56" value="10" max="100"></progress>
            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
           </>
      }
      if(user) {
            return children
      }

      return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default Privateroute;
















// import React from 'react';

// const Privateroute = () => {
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default Privateroute;