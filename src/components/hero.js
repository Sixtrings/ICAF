import React, { useEffect, useRef } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImg from '../assets/header.png';
import authorImg from '../assets/author.jpg';
import peopleImg from '../assets/people.jpg';
import { textIntro, bgColor } from './animate';
function Hero(items) {

  let intro = useRef(null);
  let hero = useRef(null);
  
  useEffect(() => {
    textIntro(intro);
    bgColor(hero);
  }, []);

  return (
    <>
    <Jumbotron className="hero text-center" ref={(el) => (hero = el)} style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${heroImg})` }}>
      <h2 className="intro" ref={(el) => (intro = el)}>{items.items[0].hero}</h2>
      <a id="fancyBtn"><svg><rect></rect></svg><span>{items.items[0].herobutton}</span></a>
      <Row className="author mx-auto">
        <div className="text-divider">About Ashfaq</div>
        <Col xs={12} md={6} className="my-auto">
          <img src={authorImg} alt="" />
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <div className="about">
          <p>As founder and chair of the International Child Art Foundation, Ashfaq has examined and judged more children’s artwork than anyone else ever. He organizes the world’s largest school art program, produces the World Children’s Festival, and publishes the ChildArt quarterly. He is planting the seeds of freedom by fostering the next generation’s creativity and critical thinking. He inspires mutual empathy so that human diversity can amplify the fractal of collaborative innovation and self-discovery.</p>
          <p>A multidisciplinary thinker, his writings have been published by the International Monetary Fund, Institutional Investor, Journal of Conflict Resolution, Dynamische Psychiatrie, and The Lancet. He pioneered STEAMS Education to integrate STEM disciplines with Art and Sport for imagination, resilience, and teamwork needed for a whole-learner approach.<br/><br/><a href="https://www.linkedin.com/in/ashfaqishaq/"> Connect with Ashfaq - <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" color="white" /></a></p>
          </div>
        </Col>
      </Row>
      <Row className="mx-auto">
        <div className="text-divider">Testimonials</div>
        <Col xs={12} md={6} className="my-auto">
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
          </Carousel>
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <img src={peopleImg} alt="" />
        </Col>
      </Row>
    </Jumbotron>
    </>
  );
}

export default Hero;