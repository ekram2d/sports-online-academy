import React from 'react';

const ClaseeDes = ({ data }) => {
  // console.log(data)
  const { availableSeats, classImage, className, email, price } = data;
  return (
    <>

      <div className={`card lg:w-96  shadow-xl ${data?.availableSeats == 0 ? 'bg-red-500' : 'bg-slate-200'} ${data?.status != 'approved' ? 'hidden' : ''}`}>
        <figure className="px-10 pt-10">
          <img src={data.classImage} alt="Class Image" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{className}</h2>
          <p>availableSeats: {availableSeats}</p>
          <p>price: ${price}</p>
          {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
        </div>
      </div>

    </>
  );
};

export default ClaseeDes;