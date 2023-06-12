import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/Authprovider';
import useAxiosSecure from './useAxiosSecure';

const useInstructorData = () => {
     

      const { user, loading } = useContext(AuthContext);
      // const token = localStorage.getItem('access-token');
      console.log(user.email)
      const [axiosSecure] = useAxiosSecure();
      const { refetch, data: classdata = [],isLoading:classdataLoading } = useQuery({
            queryKey: ['classdata ', user?.email],
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure(`/allclass?email=${user?.email}`)
              //   console.log('res from axios', res)
                return res.data;
            },
        })
     
   
      return [classdata , classdataLoading,refetch]
   }

export default useInstructorData;