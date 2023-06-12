import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const usemenu = () => {
const[axiosSecure] =useAxiosSecure();
// const [data,setData]=useState([]);
// const [loading,setLoading]=useState(true);

// useEffect(()=>{
// fetch('https://summer-camp-server-opal.vercel.app/data')
// .then(res=>res.json())
// .then(data=>{
      
//       setData(data)
//       setLoading(false)
      
      
// })
// },[])

const { refetch, data:data=[],isLoading:isdataLoading } = useQuery({
      queryKey: ['data'],
      queryFn: async () => {
            const res = await fetch('https://summer-camp-server-opal.vercel.app/data')
        //     console.log('res from axios', res)
            return res.json();
      },
})

return([data,isdataLoading,refetch])




     
}

export default usemenu;