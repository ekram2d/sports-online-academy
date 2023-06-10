


import React, { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/Authprovider';
import useInstructor from '../../../Hooks/useInstructor';




const PrivateRouteInstructor  = ({children}) => {
      const {user, loading}=useContext(AuthContext);
      const[isInstructor,isInstructorLoading]=useInstructor()
      const location=useLocation();
      if(loading || isInstructorLoading){
            return  <><progress className="progress progress-accent w-56" value="0" max="100"></progress>
            <progress className="progress progress-accent w-56" value="10" max="100"></progress>
            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
           </>
      }
      if(user && isInstructor) {
            return children
      }

      return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRouteInstructor ;
















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












// import React from 'react';

// const PrivateRouteInstructor = () => {
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default PrivateRouteInstructor;