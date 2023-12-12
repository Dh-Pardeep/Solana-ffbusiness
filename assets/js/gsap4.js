gsap.from("#navlogo ul li , #navlogo div img", {
    y: -80,
    duration: 0.3,
    opacity: 0,
    stagger: 0.2,
    delay: 0.1,
    // rotate:90,
})
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#rotate",
    start: "10% top",
    toggleActions: "play none none reverse"
  }
})
tl.fromTo(".rotate", {
  rotate:0,
  duration: 1.0
},
  {
   rotate:360, duration: 1.0
  })
  
  