// gsap-1
gsap.from("#navlogo ul li a,#navlogo img", {
  z: -80,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});
// gsap-2
var tl = gsap.timeline({
  scrollTrigger: {
    triger: "two",
    start: "18% 35%",
    end: "33% 30%",
    scrub: "true",
  },
});

tl.to("#game", {
  scale: "0.61",
  top: "38.9%",
  right: "45.4%",
});
// gsap-3
var tl = gsap.timeline({
  scrollTrigger: {
    triger: "three",
    start: "43% 50%",
    end: "50% 50%",
    scrub: "true",
  },
});

tl.to("#number", {
  y: 0,
  duration: 0.5,
  opacity: 1,
  delay: 0.5,
  stagger: 0.3,
});
// gsap-4
var tl = gsap.timeline({
  scrollTrigger: {
    triger: "one",
    start: "5% 20%",
    end: "9% 20%",
    scrub: "true",
  },
});

tl.to("#cols", {
  y: 0,
  duration: 0.5,
  opacity: 1,
  delay: 0.5,
  stagger: 0.3,
});
// gsap-5
var tl = gsap.timeline({
  scrollTrigger: {
    triger: "#five",
    start: "20% 50%",
    end: "bottom 70%",
    scrub: "true",
    markers: "true",
  },
});

tl.from("#card", {
  y: 0,
  duration: 0.5,
  opacity: 1,
  delay: 0.5,
  stagger: 0.3,
});
