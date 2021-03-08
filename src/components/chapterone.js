import React, { useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Ligtbox from './lightbox';
import { images } from './images';


function ChapterOne() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    <Jumbotron className="hero text-center" style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${process.env.PUBLIC_URL + '/assets/rainbows.jpg'})` }}>
      <h4>Chapter 1: Double Rainbows and Obama</h4>
      <h5 className="text-justify">
        “You have come here to cultivate your creativity and grow mutual empathy. Your creative mind liberates you from despair, and your empathic heart frees you from bigotry. You have a God-given right to be creative and personal responsibility to be empathic. As a creative-empath, you can boldly step beyond the boundaries set before you and challenge the norm. Your creative ideas and empathic actions will shape human destiny. You can save this civilization to build a new one. Good luck to you and Godspeed.”<br/><br/> — Ashfaq Ishaq 
      </h5>
      <div className="text-divider">5th Arts Olympiad</div>
      <Carousel className="olympiad" slide={false} fade={false}>
        {images.olympiad.map((image,index) => (
          <Carousel.Item key={image}>
            <img
              className="d-block w-100"
              src={image}
              alt={'slide ' + index}
            />
          </Carousel.Item>))};
      </Carousel>
      <div className="text-divider">Selected Works</div>
      <Ligtbox />
    </Jumbotron>
    </>
  );
}

export default ChapterOne;