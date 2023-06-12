import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import useCartClass from '../../../../Hooks/useCartClass';
//todo provide publisher key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const Payment = () => {
      const [cart,refetch] = useCartClass();
      const total = cart.reduce((sum, item) => item.price + sum, 0)
   

      // console.log(cart)
      return (
            <div className='w-full ms-4 mx-auto bg-white'>
                  <h2 className='text-3xl  font-serif  text-center'>User Payment Method </h2>

                  {/* <Elements stripe={stripePromise}>
                        <CheckoutForm p></CheckoutForm>
                  </Elements> */}
            </div>
          
      );
};

export default Payment;