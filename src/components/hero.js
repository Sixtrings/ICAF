import React, { useEffect, useRef } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImg from '../assets/header.png';
import { textIntro, textColor, bgColor } from './animate';
function Hero(items) {

  let intro = useRef(null);
  let hero = useRef(null);
  useEffect(() => {
    textIntro(intro);
    textColor(intro);
    bgColor(hero);
  }, []);

  return (
    <>
    <Jumbotron className="hero text-center" ref={(el) => (hero = el)} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImg})` }}>
      <h2 className="intro" ref={(el) => (intro = el)}>{items.items[0].hero}</h2>
      <a id="fancyBtn"><svg><rect></rect></svg><span>{items.items[0].herobutton}</span></a>
    </Jumbotron>
    <Jumbotron className="hero2 text-center">
      <Row>
        <Col xs={12} md={6} className="my-auto">
          <img src={heroImg} alt="" />
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <h2 className="text-secondary">Create colorful Library Cards for anything!</h2>
        </Col>
      </Row>
    </Jumbotron>
    <Jumbotron className="hero3 text-center">
      <Row>
        <Col xs={12} md={6} className="my-auto d-none d-md-block">
          <h2 className="text-secondary">View, Edit and Delete your Library Cards!</h2>
        </Col>
        <Col xs={12} md={6} className="my-auto d-none d-md-block">
          <img src={heroImg} alt="" />
        </Col>
        <Col xs={12} md={6} className="my-auto d-block d-md-none">
          <img src={heroImg} alt="" />
        </Col>
        <Col xs={12} md={6} className="my-auto d-block d-md-none">
          <h2 className="text-secondary">View, Edit and Delete your Library Cards!</h2>
        </Col>
      </Row>
    </Jumbotron>
    </>
  );
}

export default Hero;