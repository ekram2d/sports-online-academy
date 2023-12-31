
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/Authprovider';

const useCartClass = () => {
   const { user, loading } = useContext(AuthContext);
   // const token = localStorage.getItem('access-token');
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: cart = [] } = useQuery({
       queryKey: ['carts', user?.email],
       enabled: !loading,
       queryFn: async () => {
           const res = await axiosSecure(`/carts?email=${user?.email}`)
         //   console.log('res from axios', res)
           return res.data;
       },
   })

   return [cart, refetch]
}

export default useCartClass;

  //   queryFn: async () => {

      //             const response = await fetch(`https://summer-camp-server-opal.vercel.app/carts?email=${user?.email}`,{
      //                headers:{
      //                   authorization:`bearer ${token}`
      //                }
      //             })
      //             // , {
      //             //       headers: {
      //             //             authorization: `bearer ${token}`
      //             //       }
      //             // })
      //             return response.json()
      //       },