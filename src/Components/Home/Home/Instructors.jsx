import React from 'react';

const Instructors = ({data}) => {
      const{availableSeats,classImage ,className,email,image,name,price}=data;
      return (
            <div className="card lg:w-96 bg-slate-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>Email: {email}</p>
              <p>availableSeats: {availableSeats}</p>
              <p>price: ${price}</p>
            </div>
          </div>
      );
};

export default Instructors;