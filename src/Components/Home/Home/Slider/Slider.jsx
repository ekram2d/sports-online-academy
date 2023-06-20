import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from './';
const Banner = () => {
  return (
    <Carousel className=''>
      <div className=''>
        <img className='' src='slider1 (1).jpg'/>
        <p className='text-2xl'>This is  sports khan academy</p>
        <p>Location: Bridge Town </p>
        <p>You can visit our office and know about our online course and meet with instructor</p>
      </div>
      <div className=''>
        <img className='' src='slider2 (1).jpg' />
        <p className='text-2xl'>This is  sports audotoriam academy</p>
        <p>Location: Bridge Town </p>
        <p>You can visit our office and know about our online course and meet with instructor</p>
      </div>
      <div className=''>
        <img className='' src='slider3.jpg' />
        <p className='text-2xl'>This is Online based Academy</p>
        <p>Location: ovale Town </p>
        <p>You can visit our office and know about our online course and meet with instructor</p>
      </div>
    </Carousel>
  );
};

export default Banner;
