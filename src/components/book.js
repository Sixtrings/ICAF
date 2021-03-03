import React, { useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link as LinkRoute} from 'react-router-dom';
import { Route } from 'react-router-dom';

import AppRoutes from './routes';


function Book() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Jumbotron className="table" style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.5), rgba(101,157,189, 0.5)), url(${process.env.PUBLIC_URL + '/assets/book.jpg'})` }}>
      <h4 className="text-center">Contents</h4>
      <Row>
        <Col xs={12} md={5} className="my-auto text-center">
          <img src={process.env.PUBLIC_URL + '/assets/cover.png'} alt="" />
        </Col>
        <Col xs={12} md={7} className="my-auto">
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 1. Double Rainbows and Obama</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 2. Clinton and Charity</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 3. Bush and Peacebuilding</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 4. Fulbright and the Consort</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 5. Dawn and Dusk</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Index</LinkRoute></div>
        </Col>
      </Row>
    </Jumbotron>
    <Route exact path="/book/chapter1" component={AppRoutes} />
    </>
  );
}

export default Book;