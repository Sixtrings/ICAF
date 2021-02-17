import React from 'react';
import { Query } from 'react-apollo';
import TITLE_QUERY from './home/index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Hero from './hero';


function Home() {
  return (
    <Query query={TITLE_QUERY}>
      {({ loading, error, data }) => {

          if (loading) return <div>Fetching title.....</div>
          if (error)   return <div>Error fetching title</div>

          const items = data.welcomes;

          return (
            <>
            <Navbar className="mx-auto navigation" sticky="top" collapseOnSelect expand="md" variant="dark">
              <Navbar.Brand className="text-secondary brandText">Ashfaq Ishaq</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                <Nav className='ml-auto'>
                  <Nav.Item>
                    <Nav.Link>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Other Works</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Testimonials</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Share</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Hero items={items}/>
            </>
          )
        }}
    </Query>
  );
}

export default Home;