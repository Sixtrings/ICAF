import React, { useState, useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './footer';
import { HamburgerElastic } from 'react-animated-burgers';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute} from "react-router-dom";
import { Route } from "react-router-dom";
import AppRoutes from "./routes";


function Home() {
  const [isActive, setIsActive] = useState(false);


  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )
  
  return (
    <>
    <Navbar className="navigation" sticky="top" collapseOnSelect expand={false} expanded={isActive} variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span>
          <HamburgerElastic
            buttonColor="transparent"
            barColor="white"
            {...{ isActive, toggleButton }}
          />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-left links">
            <Nav.Link><LinkRoute to="/" onClick={() => setIsActive(false)}>Home</LinkRoute></Nav.Link>
            <Nav.Link><LinkRoute to="/book" onClick={() => setIsActive(false)}>Anti-Children</LinkRoute></Nav.Link>
            <Nav.Link>Other Works</Nav.Link>
            <Nav.Link><LinkScroll activeClass="active" to="author" spy={true} smooth={true}>About</LinkScroll></Nav.Link>
            <Nav.Link><LinkScroll to="testimonials" spy={true} smooth={true}>Testimonials</LinkScroll></Nav.Link>
            <Nav.Link>Share</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Route path="/" component={AppRoutes} />
    <Footer />
    </>
  );
}

export default Home;