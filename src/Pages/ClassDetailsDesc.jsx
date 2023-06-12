import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCartClass from '../Hooks/useCartClass';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const ClassDetailsDesc = ({ data }) => {
  const { availableSeats, classImage, className, email, image, name, price, _id } = data;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdmin,] = useAdmin();
  const [isInstructor,] = useInstructor();
  const [, refetch] = useCartClass();
//  console.log(data.status);
  const handleAddtoCart = data => {
    if (user && user.email) {
      const selectClass = {
        availableSeats,
        classImage,
        className,
        email,
        image,
        name,
        price,
        menuItemId: _id,
        userEmail: user.email
      };
      fetch('https://summer-camp-server-opal.vercel.app/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectClass)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your cart added',
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: 'Please login!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className={`card lg:w-96  shadow-xl ${data?.availableSeats == 0 ? 'bg-red-500' : 'bg-slate-200'} ${data?.status!='approved' ? 'hidden' :''}`}>
      <figure className="px-10 pt-10">
        <img src={classImage} alt="Class Image" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">ClassName: {className}</h2>
        <h2 className="card-title">InstructorName: {name}</h2>
        <p>Available Seats: {availableSeats}</p>
        <p>Price: ${price}</p>
        {/* <p>{data?.status}</p> */}
        <div className="card-actions">
          {
           data.status!='approved' || availableSeats === 0 || isAdmin || isInstructor ? (
              <button className="btn bg-white text-black btn-sm btn-disabled">Select</button>
            ) : (
              <button onClick={() => handleAddtoCart(data)} className="btn btn-primary btn-sm">Select</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ClassDetailsDesc;
