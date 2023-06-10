import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/Authprovider";
import { useQuery } from "@tanstack/react-query";




;
// import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
  
    const { user,loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
//     console.log("load",loading)
    const { refetch, data: isInstructor,isLoading:isInstructorLoading } = useQuery({
          queryKey: ['isInstructor',user?.email],
          enabled: !loading,
          queryFn: async () => {
                const res = await axiosSecure(`/users/instructor/${user?.email}`)
            //     console.log('res from axios', res)
                return res.data.instructor;
          },
    })

//     console.log('isinsta',isInstructorLoading);
    return [isInstructor,isInstructorLoading]
      };
      
export default useInstructor;



// import React from 'react';

// const useInstructor = () => {
//       return (
//             <div>
                  
//             </div>
//       );
// };

// export default useInstructor;