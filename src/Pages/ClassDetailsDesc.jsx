import React from 'react';

const ClassDetailsDesc = ({data}) => {
      const{availableSeats,classImage ,className,email,image,name,price}=data;
      return (
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={classImage} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">ClassName: {className}</h2>
              <h2 className="card-title">InstructorName: {name}</h2>
              <p>availableSeats: {availableSeats}</p>
              <p>price: ${price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>
      );
};

export default ClassDetailsDesc;