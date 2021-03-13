import React, { useEffect, useRef } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ligtbox from './lightbox';
import { images } from './images';
import { Link as LinkScroll } from 'react-scroll';
import { textIntro, bgColor, scroll3, scroll4 } from './animate';



function ChapterOne() {
  
  let intro = useRef();
  let hero = useRef();

  useEffect(() => {
    textIntro(intro.current);
    bgColor(hero.current);
    scroll3(hero.current);
    scroll4(hero.current);
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
    <Jumbotron className="hero text-center" ref={hero} style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${process.env.PUBLIC_URL + '/assets/rainbows.jpg'})` }}>
    <div ref={intro}>
      <div className="text-center ch1nav d-none d-md-block">
        <LinkScroll className="ch1link" activeClass="active" to="olympiad" spy={true} smooth={true}>5th WCF photos</LinkScroll>
        <LinkScroll className="ch1link" activeClass="active" to="works" spy={true} smooth={true}>5th WCF works</LinkScroll>
        <LinkScroll className="ch1link" activeClass="active" to="videos" spy={true} smooth={true}>Videos</LinkScroll>
        <LinkScroll className="ch1link" activeClass="active" to="documents" spy={true} smooth={true}>Documents</LinkScroll>
      </div>
      <h4 className="third">Chapter 1: Double Rainbows and Obama</h4>
      <h5 className="text-justify">
        “You have come here to cultivate your creativity and grow mutual empathy. Your creative mind liberates you from despair, and your empathic heart frees you from bigotry. You have a God-given right to be creative and personal responsibility to be empathic. As a creative-empath, you can boldly step beyond the boundaries set before you and challenge the norm. Your creative ideas and empathic actions will shape human destiny. You can save this civilization to build a new one. Good luck to you and Godspeed.”<br/><br/> — Ashfaq Ishaq 
      </h5>
    </div>
      <div className="wcf">
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
      </div>
      <div className="text-divider wcfworks" id="works">Selected Works</div>
      <Ligtbox />
      <div className="text-divider" id="videos">Videos</div>
      <Row className="mx-auto">
        <div className="text-divider" id="documents">Documents</div>
        <Col xs={12} sm={{ span: 4, offset: 4 }} className="my-auto">
          <a href=" https://www.icaf.org/flipbooks/Creativity,DiversityandUnity/"><img src={process.env.PUBLIC_URL + '/assets/magazine.jpg'} alt="" /></a>
        </Col>
      </Row>
    </Jumbotron>
    </>
  );
}

export default ChapterOne;