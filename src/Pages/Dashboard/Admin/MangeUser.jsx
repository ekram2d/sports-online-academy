import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/Authprovider';
import { useQuery } from '@tanstack/react-query';

const MangeUser = () => {

      const {user,loading}=useContext(AuthContext);
      const { isLoading,refetch, data:userscart=[], error } = useQuery({
            queryKey: ['users'],
            enabled: !loading,
              queryFn: async () => {
      
                        const response = await fetch('http://localhost:5001/users')
                        // , {
                        //       headers: {
                        //             authorization: `bearer ${token}`
                        //       }
                        // })
                        return response.json()
                  },
          
      })
      return (
            <div className='w-full m-2'>
                   manage user admin:{userscart.length}
            </div>
      );
};

export default MangeUser;