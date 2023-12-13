gsap.from("#navLogo ul li a,#navLogo div img", {
  //   y: -80,
  opacity: 0,
  //   rotate: 90,
  x: -90,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.3,
});
var tl2 = gsap.timeline();
tl2.from("#main #imageScroll img", {
  duration: 10,
  stagger: 1.3,
  x: "-100%",
  scrollTrigger: {
    trigger: "#main #imageScroll",
    scroller: "body",
    // markers: true,
    start: "60% 25%",
    end: "190% 50%",
    scrub: 1,
    pin: "#main",
  },
});
gsap.from("#burger .w_45px", {
  rotate: 360,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#burger .w_45px",
    scroller: "body",
    // markers: true,
    start: "60% 25%",
    end: "230% 35%",
    scrub: 1,
  },
});
// gsap.to(".Img_center_md img", {
//   scale: 6,
//   opacity: 0,
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: ".Img_center_md img",
//     scroller: "body",
//     // markers: true,
//     start: "90% 25%",
//     end: "230% 35%",
//     scrub: 1,
//   },
// });
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2 #para2,#section2 div img",
    scroller: "body",
    // markers: true,
    start: "10% 45%",
    end: "45% 35%",
    scrub: true,
  },
});
tl3.from("#section2 #para2", {
  opacity: 0,
  y: 100,
  x: -100,
});
tl3.from("#section2 div img", {
  opacity: 0,
  y: 100,
  x: 100,
});
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#imagesMan",
    start: "top center",
    end: "bottom center",
    scrub: 4,
    // markers: true,
  },
});
tl4.from("#imagesMan", {
  x: "-100%",
});
tl4.to("#imagesMan img", {
  x: 145,
  stagger: 0.2,
});
// const timeline = gsap.timeline({
//   scrollTrigger: {
//     scrub: true,
//     trigger: "#lineRed .timeline",
//     start: "top top",
//     end: "bottom bottom",
//     pin: ".pinLine",
//     onUpdate: (self) => {
//       const newHeight = 100 + 710 * self.progress;
//       document.querySelector(".timeline").style.height = `${newHeight}px`;
//     },
//   },
// });
gsap.to("#teamImages", {
  scrollTrigger: {
    trigger: "#teamSection",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  x: "-100%",
  ease: "power1.out",
});
gsap.to("#timelineMain1 .timeline1", {
  scrollTrigger: {
    trigger: "#timelineMain1 .timeline1",
    start: "top center",
    end: "bottom 10%",
    scrub: true,
    markers: true,
  },
  duration: 5,
  height: "100%",
  ease: "power1.out",
});
