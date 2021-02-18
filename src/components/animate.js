import gsap from 'gsap';

export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: 3,
    ease: "elastic",
  });
};

export const textColor = elem => {
  gsap.to(elem, {
    stagger: 0.8,
    duration: 2,
    color: 'white'
  });
};

export const bgColor = elem => {
  gsap.from(elem, {
    duration: 2,
    filter: 'grayscale(100%)'
  });
};