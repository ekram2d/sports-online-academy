import React, { useState } from 'react';
import useCartClass from '../../../Hooks/useCartClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Payment from './Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Payment/CheckoutForm';
import MycartItem from './Mycart/MycartItem';

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const MycartClass = () => {
      const [cart, refetch] = useCartClass();
      const [set,setState]=useState(false)

      // console.log(cart)
      const total = cart.reduce((sum, item) => item.price + sum, 0)
      const hanldleDelete = (id) => {
            // console.log(id);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {

                        fetch(`http://localhost:5001/carts/${id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                          )
                                          refetch();
                                    }
                              })
                        //   Swal.fire(
                        //     'Deleted!',
                        //     'Your file has been deleted.',
                        //     'success'
                        //   )
                  }
            })
      }
      return (
            <div className='w-full ms-2 mt-3'>
                  <div className='lg:flex justify-between items-center '>
                        <h3 className='text-2xl'>Total Class select:{cart.length}</h3>
                        <h3 className='text-2xl'>Total: ${total}</h3>
                        {/* <Link to='/dashboard/payment'><button className='btn btn-sm btn-warning'>Pay</button></Link> */}
                  </div>
                  <div className='w-full lg:grid grid-cols-1 gap-4'>
          
                  {

cart?.map((item, index) => 
     <MycartItem key={item._id} item={item} refetch={refetch} ></MycartItem>
)

}
                  </div>

                 
            </div>
      );
};

export default MycartClass;