import React, { useState, useCallback } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Gallery from "react-photo-gallery";
import  { Carousel as Carousel2, Modal, ModalGateway } from "react-images";
import { photos } from "./photos";


function Book() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  
  return (
    <>
    <Jumbotron className="hero text-center" style={{ backgroundImage: `linear-gradient(rgba(101,157,189, 0.3), rgba(101,157,189, 0.3)), url(${process.env.PUBLIC_URL + '/assets/rainbows.jpg'})` }}>
      <h4>Chapter 1: Double Rainbows</h4>
      <h5 class="text-justify">
        “You have come here to cultivate your creativity and grow mutual empathy. Your creative mind will liberate you from despair and your empathic
        heart will free you from hatred. You have a God given right to be creative. You have a personal responsibility to be empathic.”<br/><br/> — Ashfaq Ishaq 
      </h5>
        <div className="text-divider">5th Arts Olympiad</div>
          <Carousel className="olympiad">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/olympiad/1.jpg'}
                alt="slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/olympiad/2.jpg'}
                alt="slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/olympiad/3.jpg'}
                alt="slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/olympiad/4.jpg'}
                alt="slide 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/olympiad/5.jpg'}
                alt="slide 5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/assets/olympiad/6.jpg'}
                alt="slide 6"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel2
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
    </Jumbotron>
    </>
  );
}

export default Book;