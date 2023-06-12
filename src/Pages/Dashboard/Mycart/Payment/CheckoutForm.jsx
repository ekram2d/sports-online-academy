import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/Authprovider";

import './ChekoutForm.css'
import Swal from "sweetalert2";
const CheckoutForm = ({ item, refetch }) => {
      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError] = useState('');
      const [axiosSecure] = useAxiosSecure();
      const [clientSecret, setClientSecret] = useState('');
      const { user } = useContext(AuthContext);
      const price = parseFloat(item?.price.toFixed(2));
      console.log(item.menuItemId, item._id)
      useEffect(() => {
            if (price > 0) {
                  axiosSecure.post('/create-payment-intent', { price })
                        .then(res => {
                              console.log(res.data.clientSecret)
                              setClientSecret(res.data.clientSecret);
                        })
            }
      }, [price, axiosSecure])
console.log(item.menuItemId )
      const handleSubmit = async (event) => {
            event.preventDefault();
            if (!stripe || !elements) {
                  return;
            }

            const card = elements.getElement(CardElement);

            if (card === null) {
                  return;
            }
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card
            })
            if (error) {
                  console.log("error", error);
                  setCardError(error.message)
            }
            else {
                  console.log('payment', paymentMethod);
                  setCardError('');
            }
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    email: user?.email || 'unknown',
                                    name: user?.displayName || 'anonymous'
                              },
                        },
                  },
            );

            if (confirmError) {
                  console.log("errror", confirmError);
            } else {
                  console.log('payment intent', paymentIntent)
                  if (paymentIntent.status === 'succeeded') {
                        // add to db
                        const datainfo = {
                              ...item,
                              trensactionId: paymentIntent.id,
                              data: new Date()
                        }
                        axiosSecure.post('/enroll', datainfo).then(res => {
                              // Handle the successful response

                              if (res.data.acknowledged) {
                                    console.log(res.data);
                                    console.log('Enrollment successful!');
                                    const id = item?.menuItemId;
                                    const id1= item?._id;
                                    const data = {id1: id1 }; 
                                    axiosSecure.delete(`/enroll/delete/${id}`, {data: data }).then((deleteRes) => {
                                      // Handle the successful delete response
                                      console.log('Enrollment deleted:', deleteRes);
                                      refetch();
                                      Swal.fire({
                                          position: 'top-end',
                                          icon: 'success',
                                          title: 'sucess fully enrollment',
                                          showConfirmButton: false,
                                          timer: 1500
                                        })
                                    })
                                    .catch((deleteError) => {
                                      // Handle delete errors
                                      console.error('Error deleting enrollment:', deleteError);
                                    });

                              }


                        })
                              .catch(error => {
                                    // Handle errors
                                    console.error('Error:', error);
                              });

                  }

            }
      }
      return (
            <>

                  <form className="w-full" onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        <button className="btn btn-sm btn-primary mt-2 " type="submit" disabled={!stripe || !clientSecret}>
                              Pay
                        </button>
                  </form>

                  <div>
                        {cardError && <p className="text-red-400 text-center font-serif">{cardError}</p>}
                  </div>
            </>
      );
};

export default CheckoutForm;