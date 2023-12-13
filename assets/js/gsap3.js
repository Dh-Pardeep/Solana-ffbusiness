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
    trigger: "#two",
    start: "20% 70%",
    end: "40% center",
    scrub: "true",
  },
});

tl.from("#game", {
  x: 180,
  duration: 2,
  opacity: 0,
  delay: 2,
  stagger: 0.3,
});

tl.from("#text", {
  x: -180,
  duration: 2,
  opacity: 0,
  delay: 2,
  stagger: 0.3,
});
// gsap-3
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    start: "start 60%",
    end: "75% center",
    scrub: "true",
  },
});

tl.from(".img-4 div img", {
  z: -180,
  duration: 2,
  opacity: 0,
  delay: 2,
  stagger: 0.3,
});
// gsap-4
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#four",
    start: "start 70%",
    end: "75% 60%",
    scrub: "true",
    markers: "true",
  },
});

tl.from("#public div", {
  z: -180,
  duration: 2,
  opacity: 0,
  delay: 2,
  stagger: 0.5,
});
