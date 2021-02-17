import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImg from '../assets/header.png';

function Hero(items) {
  return (
    <Jumbotron className="hero text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImg})` }}>
      <h2>{items.items[0].hero}</h2>
      <a id="fancyBtn"><svg><rect></rect></svg><span>{items.items[0].herobutton}</span></a>
    </Jumbotron>
  );
}

export default Hero;