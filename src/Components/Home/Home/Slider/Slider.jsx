
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../assets/home/01.jpg'
// import img2 from '../../../assets/home/02.jpg'
// import img3 from '../../../assets/home/03.png'
// import img4 from '../../../assets/home/04.jpg'
// import img5 from '../../../assets/home/05.png'
// import img6 from '../../../assets/home/06.png'
const Slider = () => {
      return (
            <Carousel className='' >
                  <div className='w-full  h-96  mx-auto'>
                  {/* <p className='text-red-700'>Legend 1</p> */}
                        <img   src='https://growbusiness.sg/wp-content/uploads/job-manager-uploads/company_avatar/2018/08/logo.jpg' />
                       
                        <p className='text-2xl'>'Learn to Swim'</p>
                        <p >'Join our swim academy and learn to swim like a pro!'</p>
                      

                  </div>
                  <div  className='w-full  mx-auto'>
                  {/* <p className='text-red-700'>Legend 1</p> */}
                        <img  src='https://s3.amazonaws.com/htw/dt-contest-entries/77238/canada-swim-coaching-athletic-logo-design.png' />
                       
                        <p className='text-2xl'>'Experienced Coaches'</p>
                        <p>Our experienced coaches will guide you through every step</p>
                      

                  </div>
                  <div  className='w-full mx-auto'>
                  {/* <p className='text-red-700'>Legend 1</p> */}
                        <img  src='https://s3.amazonaws.com/htw/dt-contest-entries/77610/canada-coaching-athletic-swim-logo-design.png' />
                       
                        <p className='text-2xl'>'Learn to Swim'</p>
                        <p>'Join our swim academy and learn to swim like a pro!'</p>
                      

                  </div>
                 
                

            </Carousel>
      );
};

export default Slider;