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

// export const textColor = elem => {
//   gsap.fromTo(elem, {
//     fill: function(index, target, targets) {
//     return "hsl(" + ((index / targets.length) * 360) + ", 100%, 50%)";
//   }
//   },{
//   fill: "hsl(+=360, +=0%, +=0%)",
//   duration: 5,
//   repeat: -1,
//   ease: "none"
//   });
// };

export const bgColor = elem => {
  gsap.from(elem, {
    duration: 3,
    filter: 'grayscale(100%)'
  });
};

