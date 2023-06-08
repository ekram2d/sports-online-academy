import React, { useEffect, useState } from 'react';

const usemenu = () => {

const [data,setData]=useState([]);


useEffect(()=>{
fetch('http://localhost:5001/data')
.then(res=>res.json())
.then(data=>setData(data))
},[])



return(data)




     
}

export default usemenu;