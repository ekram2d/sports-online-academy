
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
const useCartClass = () => {
   const {user,loading}=useContext(AuthContext);
// console.log(user)
   const { isLoading,refetch, data:classCart=[], error } = useQuery({
      queryKey: ['carts', user?.email],
      enabled: !loading,
        queryFn: async () => {

                  const response = await fetch(`http://localhost:5001/carts?email=${user?.email}`)
                  // , {
                  //       headers: {
                  //             authorization: `bearer ${token}`
                  //       }
                  // })
                  return response.json()
            },
    
})

return([classCart,refetch]);

}

export default useCartClass;