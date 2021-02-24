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
      <HamburgerElastic
        buttonColor="transparent"
        barColor="white"
        {...{ isActive, toggleButton }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-left links">
            <LinkRoute className="navLink" to="/" onClick={() => setIsActive(false)}>Home</LinkRoute>
            <LinkRoute className="navLink" to="/book" onClick={() => setIsActive(false)}>Anti-Children</LinkRoute>
            <Nav.Link>Other Works</Nav.Link>
            <LinkScroll className="navLink" activeClass="active" to="author" spy={true} smooth={true}>About</LinkScroll>
            <LinkScroll className="navLink" to="testimonials" spy={true} smooth={true}>Testimonials</LinkScroll>
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