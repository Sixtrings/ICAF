import React, { useState, useCallback } from 'react';
import { Query } from 'react-apollo';
import TITLE_QUERY from './home/index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Hero from './hero';
import Footer from './footer';
import { HamburgerElastic } from 'react-animated-burgers'

function Home() {
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )
  return (
    <Query query={TITLE_QUERY}>
      {({ loading, error, data }) => {

          if (loading) return <div>Fetching title.....</div>
          if (error)   return <div>Error fetching title</div>

          const items = data.welcomes;

          return (
            <>
            <Navbar className="navigation" sticky="top" collapseOnSelect expand={false} variant="dark">
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
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Other Works</Nav.Link>
                    <Nav.Link>Testimonials</Nav.Link>
                    <Nav.Link>Share</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Hero items={items}/>
            <Footer />
            </>
          )
        }}
    </Query>
  );
}

export default Home;