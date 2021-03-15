import React, { useState, useEffect, useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Footer from './footer';
import ShareModal from './shareModal';
import { HamburgerElastic } from 'react-animated-burgers';
import { Link as LinkRoute} from 'react-router-dom';
import { Route, useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  const [isActive, setIsActive] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  console.log(location);

  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location]);

  const toggleButton = useCallback(() => setIsActive(prevState => !prevState),[],)
  
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
            <LinkRoute className="navLink" to="/#author" onClick={() => setIsActive(false)}>Bio</LinkRoute>
            <LinkRoute className="navLink" to="/#testimonials" onClick={() => setIsActive(false)}>Testimonials</LinkRoute>
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