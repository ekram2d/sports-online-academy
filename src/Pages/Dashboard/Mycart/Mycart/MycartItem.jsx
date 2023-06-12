import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CheckoutForm from '../Payment/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const MycartItem = ({item,refetch}) => {
      const [set,setState]=useState(false)
      // console.log(item)
      const handleSet=()=>{
            setState(true)
            console.log('se',set)
      }
    
      return (
            <div>
                   <div className="card w-96 lg:w-full gap-3 bg-blue-200 mt-4 shadow-2xl ">
            <div className="card-body mx-auto">
                  
                  <h2 className="card-title">ClassName: {item.className}</h2>
                  <p>Price: ${item.price}</p>
                 {!set &&  <p className='text-green-800'>you want to payment?<button onClick={handleSet} className='btn btn-sm m-3 btn-primary'>Yes</button></p>}
                  
                  
                 
            </div>
           
      </div>

      {
            set && <div className="ms-2 ">
            <Elements stripe={stripePromise}>
                  <CheckoutForm setState={setState} item={item} refetch={refetch} ></CheckoutForm>
            </Elements>
            </div>
      }
            </div>
      );
};

export default MycartItem;