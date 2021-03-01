import React, { useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link as LinkRoute} from 'react-router-dom';
import { Route } from 'react-router-dom';

import AppRoutes from './routes';


function Book() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Jumbotron className="table text-center" style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${process.env.PUBLIC_URL + '/assets/header.png'})` }}>
      <h4>Contents</h4>
      <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 1. Double Rainbows and Obama</LinkRoute></div>
      <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 2. Clinton and Charity</LinkRoute></div>
      <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 3. Bush and Peacebuilding</LinkRoute></div>
      <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 4. Fulbright and the Consort</LinkRoute></div>
      <div className="tableOfContent"><LinkRoute to="/book/chapter1">Chapter 5. Dawn and Dusk</LinkRoute></div>
      <div className="tableOfContent"><LinkRoute to="/book/chapter1">Index</LinkRoute></div>
    </Jumbotron>
    <Route exact path="/book/chapter1" component={AppRoutes} />
    </>
  );
}

export default Book;