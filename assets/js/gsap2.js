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
gsap.to(".Img_center_md img", {
  scale: 6,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".Img_center_md img",
    scroller: "body",
    // markers: true,
    start: "90% 25%",
    end: "230% 35%",
    scrub: 1,
  },
});
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
// gsap.from("#imagesMan img", {
//   x: "-100%",
//   scrollTrigger: {
//     trigger: "#imageScroll img",
//     scroller: "#imageScroll",
//     markers: true,
//     start: "60% 25%",
//     end: "190% 50%",
//     scrub: 1,
//     pin: "#imagesMan",
//   },
// });
