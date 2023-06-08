import React, { useEffect, useState } from 'react';

const usemenu = () => {

const [data,setData]=useState([]);


useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setData(data))
},[])



return(data)




     
}

export default usemenu;