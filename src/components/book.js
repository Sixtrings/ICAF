import React, { useEffect, useRef } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link as LinkRoute} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { textIntro, bgColor } from './animate';


import AppRoutes from './routes';


function Book() {
  useEffect(() => {
    textIntro(intro.current);
    bgColor(hero.current);
    window.scrollTo(0, 0)
  }, [])

  let intro = useRef();
  let hero = useRef();

  return (
    <>
    <Jumbotron className="table" ref={hero} style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.5), rgba(101,157,189, 0.5)), url(${process.env.PUBLIC_URL + '/assets/book.jpg'})` }}>
      <Row className="tableHeader">
        <Col xs={12} lg={{ span: 5, offset: 1 }} className="my-auto text-center">
          <img src={process.env.PUBLIC_URL + '/assets/cover.png'} alt="" />
        </Col>
        <Col xs={12} lg={6} className="my-auto text-center" ref={intro}>
          <h4 className="text-center">Content</h4>
          <div className="tableOfContent"><LinkRoute to="/book/chapter1">Double Rainbows and Obama</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="#">Clinton and Charity</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="#">Bush and Peacebuilding</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="#">Fulbright and the Consort</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="#">Dawn and Dusk</LinkRoute></div>
          <div className="tableOfContent"><LinkRoute to="#">Index</LinkRoute></div>
        </Col>
      </Row>
    </Jumbotron>
    <Route exact path="/book/chapter1" component={AppRoutes} />
    </>
  );
}

export default Book;