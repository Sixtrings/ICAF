import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export const scroll1 = elem => {
  gsap.fromTo(
    elem.querySelector("#author"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3",
        scrollTrigger: {
          trigger: elem.querySelector(".first"),
          start: "bottom top",
          scrub: false
        }
      }
  );
};

export const scroll2 = elem => {
  gsap.fromTo(
    elem.querySelector("#testimonials"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3",
        scrollTrigger: {
          trigger: elem.querySelector(".second"),
          start: "bottom top",
          scrub: false
        }
      }
  );
};

export const scroll3 = elem => {
  gsap.fromTo(
    elem.querySelector(".wcf"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3",
        scrollTrigger: {
          trigger: elem.querySelector(".third"),
          start: "bottom top",
          scrub: false
        }
      }
  );
};

export const scroll4 = elem => {
  gsap.fromTo(
    elem.querySelector(".wcfworks"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3",
        scrollTrigger: {
          trigger: elem.querySelector(".carousel-control-next-icon"),
          start: "bottom top",
          scrub: false
        }
      }
  );
};
