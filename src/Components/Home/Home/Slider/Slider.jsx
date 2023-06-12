import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from './';
const Banner = () => {
  return (
    <Carousel className=''>
      <div className=''>
        <img className='' src='slider1 (1).jpg'/>
        <p>this</p>
      </div>
      <div className=''>
        <img className='' src='slider2 (1).jpg' />
        <p>this</p>
      </div>
      <div className=''>
        <img className='' src='slider3.jpg' />
        <p>this</p>
      </div>
    </Carousel>
  );
};

export default Banner;
