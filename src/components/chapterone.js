import React, { useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ligtbox from './lightbox';
import { images } from './images';
import { Link as LinkScroll } from 'react-scroll';



function ChapterOne() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    <Jumbotron className="hero text-center" style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${process.env.PUBLIC_URL + '/assets/rainbows.jpg'})` }}>
      <Row className="ch1nav">
        <Col sm={12} md={3}>
          <LinkScroll className="ch1link" activeClass="active" to="olympiad" spy={true} smooth={true}>5th WCF photos</LinkScroll>
        </Col>
        <Col xs={12} md={3}>
          <LinkScroll className="ch1link" activeClass="active" to="works" spy={true} smooth={true}>5th WCF works</LinkScroll>
        </Col>
        <Col xs={12} md={3}>
        <LinkScroll className="ch1link" activeClass="active" to="videos" spy={true} smooth={true}>Videos</LinkScroll>
        </Col>
        <Col xs={12} md={3}>
        <LinkScroll className="ch1link" activeClass="active" to="documents" spy={true} smooth={true}>Documents</LinkScroll>
        </Col>
      </Row>
      <h4>Chapter 1: Double Rainbows and Obama</h4>
      <h5 className="text-justify">
        “You have come here to cultivate your creativity and grow mutual empathy. Your creative mind liberates you from despair, and your empathic heart frees you from bigotry. You have a God-given right to be creative and personal responsibility to be empathic. As a creative-empath, you can boldly step beyond the boundaries set before you and challenge the norm. Your creative ideas and empathic actions will shape human destiny. You can save this civilization to build a new one. Good luck to you and Godspeed.”<br/><br/> — Ashfaq Ishaq 
      </h5>
      <div className="text-divider" id="olympiad">My favorite 5th WCF photos</div>
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
      <div className="text-divider" id="works">Selected Works</div>
      <Ligtbox />
      <div className="text-divider" id="videos">Videos</div>
      <div className="text-divider" id="documents">Documents</div>
    </Jumbotron>
    </>
  );
}

export default ChapterOne;