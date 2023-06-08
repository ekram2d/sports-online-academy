import React, { useEffect, useState } from 'react';

const usemenu = () => {

const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{
fetch('http://localhost:5001/data')
.then(res=>res.json())
.then(data=>{
      
      setData(data)
      setLoading(false)
      
      
})
},[])



return(data)




     
}

export default usemenu;