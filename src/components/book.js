import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import heroImg from '../assets/rainbows.jpg';

function Book() {
  return (
    <>
    <Jumbotron className="hero text-center" style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${heroImg})` }}>
      <h4>Chapter 1: Double Rainbows</h4>
    </Jumbotron>
    </>
  );
}

export default Book;