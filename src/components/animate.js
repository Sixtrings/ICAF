import gsap from 'gsap';

export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: 0,
    opacity: 0,
    duration: 3,
    scale: 1,
    ease: "power4",
  });
};

export const bgColor = elem => {
  gsap.from(elem, {
    duration: 3,
    filter: 'grayscale(100%)'
  });
};

