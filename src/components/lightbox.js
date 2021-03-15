import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { images } from './images';

function Lightbox() {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);
  
  // Building gallery of images to display
  const imageCards = images.works.map((image, index) => (
    <img key={image} className="image-card" onClick={() => {setLightBoxDisplay(true); setActiveSlide(index)}} src={image} />
  ));

  return (
    <>
      {/* Displaying gallery */}
      <div className="wcfgallery">{imageCards}</div>
      {
        lightboxDisplay ? 
          // Displaying lightbox
          <Carousel className="works mx-auto" slide={false} fade={false} defaultActiveIndex={activeSlide}>
            {images.works.map((image,index) => (
              <Carousel.Item key={image} onClick={() => setLightBoxDisplay(false)}>
                <img
                  src={image}
                  alt={'slide ' + index}
                />
              </Carousel.Item>))};
          </Carousel>
       : null
      }
    </>
  );
}

export default Lightbox;
