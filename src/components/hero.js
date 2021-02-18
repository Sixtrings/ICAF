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
        <Col xs={12} md={6} className="my-auto">
          <img src={authorImg} alt="" />
        </Col>
        <Col xs={12} md={6} className="my-auto">
          <div className="about">
          <h3>About Ashfaq <a href="https://www.linkedin.com/in/ashfaqishaq/"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="white" /></a></h3>
          <p>As founder and chair of the International Child Art Foundation, Ashfaq has examined and judged more children’s artwork than anyone else ever. He organizes the world’s largest school art program, produces the World Children’s Festival, and publishes the ChildArt quarterly. He is planting the seeds of freedom by fostering the next generation’s creativity and critical thinking. He inspires mutual empathy so that human diversity can amplify the fractal of collaborative innovation and self-discovery.</p>
          <p>A multidisciplinary thinker, his writings have been published by the International Monetary Fund, Institutional Investor, Journal of Conflict Resolution, Dynamische Psychiatrie, and The Lancet. He pioneered STEAMS Education to integrate STEM disciplines with Art and Sport for imagination, resilience, and teamwork needed for a whole-learner approach. He opposes “childism”—the pervasive use by adults of labels such as childish, juvenile, or childlike. He is devoted to correct the language and the culture so that children have a voice in matters that shape the future—which belongs to them alone.</p>
          </div>
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col xs={12} md={6} className="my-auto">
          <h3>What people say</h3>
          <Carousel className="testimonials">
            <Carousel.Item>
              <p>Ashfaq is a brilliant mover and shaker focused on world peace. By bringing the world's youth together quadrennially to Washington DC, often from nations in conflict, and using the universal language of art-making on the National Mall, he has converted their potential hostility to future peace-seeking world leadership. Ashfaq well deserves the many honors and awards he has received but the most flattering award would be using his model and copying his efforts in adult groups around the world. Imagine the possibilities as Ashfaq Ishaq does!</p>
              <p>- Bobbi Stoll, Art Therapy Pioneer and Honorary Life Member of the Southern California Art Therapy Association</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>Ashfaq is a brilliant mover and shaker focused on world peace. By bringing the world's youth together quadrennially to Washington DC, often from nations in conflict, and using the universal language of art-making on the National Mall, he has converted their potential hostility to future peace-seeking world leadership. Ashfaq well deserves the many honors and awards he has received but the most flattering award would be using his model and copying his efforts in adult groups around the world. Imagine the possibilities as Ashfaq Ishaq does!</p>
              <p>- Bobbi Stoll, Art Therapy Pioneer and Honorary Life Member of the Southern California Art Therapy Association</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>Ashfaq is a brilliant mover and shaker focused on world peace. By bringing the world's youth together quadrennially to Washington DC, often from nations in conflict, and using the universal language of art-making on the National Mall, he has converted their potential hostility to future peace-seeking world leadership. Ashfaq well deserves the many honors and awards he has received but the most flattering award would be using his model and copying his efforts in adult groups around the world. Imagine the possibilities as Ashfaq Ishaq does!</p>
              <p>- Bobbi Stoll, Art Therapy Pioneer and Honorary Life Member of the Southern California Art Therapy Association</p>
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