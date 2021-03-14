import React, { useEffect, useRef } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { textIntro, bgColor, scroll1, scroll2 } from './animate';
import { Link as LinkRoute} from "react-router-dom";

function Hero () {

  let intro = useRef();
  let hero = useRef();
  
  useEffect(() => {
    textIntro(intro.current);
    bgColor(hero.current);
    scroll1(hero.current);
    scroll2(hero.current);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Jumbotron className="hero text-center" ref={hero} style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${process.env.PUBLIC_URL + '/assets/header.png'})` }}>
      <h1 className="first">Ashfaq Ishaq</h1>
      <h2 className="intro" ref={intro}>Anti-Children</h2>
      <LinkRoute to="/book" id="fancyBtn"><svg><rect></rect></svg><span>Peek inside this new book</span></LinkRoute>
      <Row className="mx-auto" id="author">
        <div className="text-divider second">About Ashfaq</div>
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 0 }} className="my-auto">
          <img src={process.env.PUBLIC_URL + '/assets/author.jpg'} alt="" />
        </Col>
        <Col xs={12} lg={6} className="my-auto">
          <div className="about">
          <p>A son of a physicist and a school principal, Ashfaq studied economics and started his career at the World Bank in Washington, D.C. He later taught at the George Washington University before starting a project advisory and consulting firm that worked globally. In 1997 he established the International Child Art Foundation and has devoted the past twenty-four years to fostering schoolchildren’s creativity and developing mutual empathy. He believes that differences and diversity amplify the fractal of human invention and self-discovery.<br/><br/><a href="https://www.linkedin.com/in/ashfaqishaq/"> Connect with Ashfaq - <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" color="white" /></a></p>
          </div>
        </Col>
      </Row>
      <Row className="mx-auto" id="testimonials">
        <div className="text-divider">Testimonials</div>
        <Col xs={12} lg={6} className="my-auto">
          <Carousel className="testimonials">
            <Carousel.Item>
              <p>Ashfaq is a brilliant mover and shaker focused on world peace. Ashfaq well deserves the many honors and awards he has received but the most flattering award would be using his model and copying his efforts in adult groups around the world. Imagine the possibilities as Ashfaq Ishaq does!</p>
              <p>- Bobbi Stoll, Art Therapy Pioneer and Honorary Life Member of the Southern California Art Therapy Association</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>A true pioneer of vision and dedication Ashfaq has worked against many odds to bring a new understanding of the importance of the Arts and creativity to Governments educationalists parents and children alike. He deserves a Noble Peace prize for this achievement.</p>
              <p>- Shona Hammond Boys, National Director at New Zealand Childrens Art House Foundation</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>Dr. Ishaq is the most respectable person I have ever met. He is a great leader, strategist, and a "policy artist" for creation. Working with Dr. Ishaq is truly a pleasure, and an invaluable learning process not only professionally, but also personally.</p>
              <p>- Yuxuan Chen, Rhodes Scholar, University of Oxford</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>Ashfaq is an amazing creative man who is more than just a visionary. He is someone without limits or a "dis" comfort zone - he's at home wherever he happens to be because he knows that is where he's meant to be. Ashfaq has a down to earth and gentle soul that can coax hidden talents and the spirit of a child has never left this man among giants.</p>
              <p>- Janet McElligott, President at McElligott International</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>I can’t think of a person more qualified to attend to the education and cultivation of our children and young people at this crucial stage in their lives than Ashfaq. He helps them to grow, fly, dream, and aspire to a better world and better life at the ideal time.</p>
              <p>- D. Paul Schafer, Director, World Culture Project</p>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} lg={6} className="my-auto">
          <img src={process.env.PUBLIC_URL + '/assets/people.jpg'} alt="" />
        </Col>
      </Row>
    </Jumbotron>
    </>
  )
}

export default Hero;