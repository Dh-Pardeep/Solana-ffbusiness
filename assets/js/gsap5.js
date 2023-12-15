// ========= NAVBAR ==========
gsap.from("#navgsap ul li a, #navgsap div img", {
  x: 80,
  duration: 0.3,
  stagger: 0.2,
  delay: 0.1,
});
// ======== BURGERS ============
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#rotate",
    start: "10% 30%",
    toggleActions: "play none none reverse",
    markers: false,
  },
});
tl.fromTo(
  ".rotate",
  {
    rotate: 0,
    duration: 1.0,
  },
  {
    rotate: 360,
    duration: 1.0,
  }
);
var tl2 = gsap.timeline();
tl2.from("#main #imageScroll img", {
  duration: 10,
  stagger: 1.3,
  x: "-100%",
  scrollTrigger: {
    trigger: "#main #imageScroll",
    scroller: "body",
    markers: false,
    start: "center 25%",
    end: "100% 100%",
    scrub: 1,
    pin: "#main",
  },
});
// Salona
gsap.to("#salona", {
  scale: 2,
  duration: 10,
  opacity: 0,
  delay: 0.8,
  scrollTrigger: {
    trigger: "#salona",
    scroller: "body",
    markers: true,
    start: "10% 50%",
    end: "150% 60%",
    scrub: true,
  },
});
// ========== popularized ===========
gsap.from("#popularised", {
  x: -100,
  opacity: 0,
  duration: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: "#popularised",
    scroller: "body",
    start: "10% 60%",
    end: "bottom 80%",
    markers: false,
    scrub: true,
  },
});
gsap.from("#popularised_img", {
  x: 100,
  opacity: 0,
  duration: 0.4,
  ease: "linear",
  scrollTrigger: {
    trigger: "#popularised_img",
    scroller: "body",
    start: "10% 50%",
    end: "bottom 80%",
    markers: false,
    scrub: true,
  },
});
//  ============= CARDS =============
tl.from("#cards .cards", {
  x: 100,
  opacity: 0,
  duration: 10,
  delay: 10,
  stagger: 8,
  scrollTrigger: {
    trigger: "#cards",
    scroller: "body",
    start: "10% 95%",
    end: "100% 90%",
    scrub: true,
    markers: false,
  },
});
//========== SUPPLIES =============
tl.from(".supplies", {
  scale: 0.8,
  opacity: 0,
  delay: 1,
  stagger: 0.1,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#supplies",
    scroller: "body",
    start: "10% 70%",
    end: "100% 60%",
    scrub: true,
    markers: false,
  },
});
// ======ROADMAP ===========
gsap.to("#roadmap1, .roadmap_line", {
  scrollTrigger: {
    trigger: "#roadmap1, .roadmap_line",
    start: "start center",
    end: "center center",
    markers: false,
    scrub: true,
  },
  height: "100%",
  duration: 5,
  ease: "power1.out",
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#slide #slidebox",
    scroller: "body",
    markers: false,
    stagger: 0.3,
    start: "center center",
    end: "bottom bottom",
    scrub: true,
  },
});
tl2.fromTo(
  "#slide #slidebox div ",
  {
    duration: 10,
    stagger: 0.3,
    x: "0%",
  },
  {
    x: "-400%",
  }
);
