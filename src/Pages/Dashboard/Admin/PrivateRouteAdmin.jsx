

import React, { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/Authprovider';
import useAdmin from '../../../Hooks/useAdmin';



const PrivateRouteAdmin = ({children}) => {
      const {user, loading}=useContext(AuthContext);
      const[isAdmin,isAdminLoading] =useAdmin();
      const location=useLocation();
      if(loading || isAdminLoading){
            return  <><progress className="progress progress-accent w-56" value="0" max="100"></progress>
            <progress className="progress progress-accent w-56" value="10" max="100"></progress>
            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
           </>
      }
      if(user && isAdmin) {
            return children
      }

      return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRouteAdmin;
















// import React from 'react';

// const Privateroute = () => {
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default Privateroute;



// import React from 'react';

// const PrivateRouteAdmin = () => {
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default PrivateRouteAdmin;