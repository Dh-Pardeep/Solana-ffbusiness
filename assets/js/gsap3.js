gsap.from("#navlogo ul li a,#navlogo img", {
  z: -80,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});

gsap.from("#rotate", {
  rotate: 360,
  duration: 5,
  repeat: -1,
  scrollTrigger: {},
});
