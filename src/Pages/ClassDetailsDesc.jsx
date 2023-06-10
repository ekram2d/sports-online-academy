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

  const [isAdmin, ] = useAdmin();
  const [isInstructor, ] = useInstructor()
  const [, refetch] = useCartClass();
 
  console.log(isAdmin, isInstructor);

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
      }
      fetch('http://localhost:5001/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'

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
            })
            refetch()
            // isInstructorLoading();
          }
        })
    }
    else {
      Swal.fire({
        title: 'please login !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok '
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      })
    }
    // console.log(data)



  }
  return (
    <div className="card w-96 bg-slate-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={classImage} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">ClassName: {className}</h2>
        <h2 className="card-title">InstructorName: {name}</h2>
        <p>availableSeats: {availableSeats}</p>
        <p>price: ${price}</p>
        <div className="card-actions">

      
         {
          isInstructor ? <button className="btn bg-white text-black btn-sm btn-disabled">Select</button>:
            
          <>{
             
           isAdmin? <button className="btn bg-white text-black btn-sm btn-disabled">Select</button>:<button onClick={() => handleAddtoCart(data)} className="btn btn-primary btn-sm">Select</button>
            }</>
            
         }
         
          {/* {useAdmin &&   <button onClick={() => handleAddtoCart(data)} className="btn btn-primary">Select</button>} */}
          {/* {isAdmin ?<button className="btn bg-white text-black btn-sm btn-disabled">Select</button>:<>{
            isInstructor ? <button className="btn bg-white text-black btn-sm btn-disabled">Select</button>:<button onClick={() => handleAddtoCart((data))} className="btn btn-primary btn-sm">Select</button>
          }</>} */}
          {/* // {isInstructor && }
          // {
          //   <button onClick={() => handleAddtoCart(data)} className="btn btn-primary btn-sm">Select</button>
          // } */}
        </div>
      </div>
    </div>
  );
};

export default ClassDetailsDesc;