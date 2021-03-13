import React, { useState, useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Footer from './footer';
import ShareModal from './shareModal';
import { HamburgerElastic } from 'react-animated-burgers';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute} from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppRoutes from './routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  const [isActive, setIsActive] = useState(false);
  const [modalShow, setModalShow] = useState(false);


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
            <DropdownButton id="dropdown" title="Anti-Children">
              <Dropdown.Item><LinkRoute className="navLink" to="/book" onClick={() => setIsActive(false)}>Content</LinkRoute></Dropdown.Item>
              <Dropdown.Item><LinkRoute className="navLink" to="/book/chapter1" onClick={() => setIsActive(false)}>Chapter 1</LinkRoute></Dropdown.Item>
              <Dropdown.Item><LinkRoute className="navLink" to="#" onClick={() => setIsActive(false)}>Chapter 2</LinkRoute></Dropdown.Item>
              <Dropdown.Item><LinkRoute className="navLink" to="#" onClick={() => setIsActive(false)}>Chapter 3</LinkRoute></Dropdown.Item>
              <Dropdown.Item><LinkRoute className="navLink" to="#" onClick={() => setIsActive(false)}>Chapter 4</LinkRoute></Dropdown.Item>
              <Dropdown.Item><LinkRoute className="navLink" to="#" onClick={() => setIsActive(false)}>Chapter 5</LinkRoute></Dropdown.Item>
              <Dropdown.Item><LinkRoute className="navLink" to="#" onClick={() => setIsActive(false)}>Index</LinkRoute></Dropdown.Item>
            </DropdownButton>
            <LinkScroll className="navLink" activeClass="active" to="author" spy={true} smooth={true}>Bio</LinkScroll>
            <LinkScroll className="navLink" to="testimonials" spy={true} smooth={true}>Testimonials</LinkScroll>
        </Nav>
      </Navbar.Collapse>
            <FontAwesomeIcon icon={["fas", "share-square"]} color="white" onClick={() => setModalShow(true)} />

    </Navbar>
    <Route path="/" component={AppRoutes} />
    <ShareModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <Footer />
    </>
  );
}

export default Home;