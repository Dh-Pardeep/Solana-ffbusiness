// ========= NAVBAR ==========
gsap.from("#navlogo ul li , #navlogo div img", {
  y: -80,
  duration: 0.3,
  // opacity: 0,
  stagger: 0.2,
  delay: 0.1,
  // rotate:90,
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
  )
  // ========== DISCOVER ===========
  gsap.from("#discover", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    ease: "linear",
    scrollTrigger: {
      trigger: "#discover",
      scroller: "body",
      start: "20% 60%",
      end: "bottom 90%",
      markers: false,
      scrub: true,
    },
  })
  gsap.from("#discover_img", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    ease: "linear",
    scrollTrigger: {
      trigger: "#discover_img",
      scroller: "body",
      start: "20% 50%",
      end: "bottom 90%",
      markers: false,
      scrub: true,
    },
  });
  // ======== CARDS =============
tl.from("#cards .cards", {
  x: 100,
  opacity: 0,
  duration: 0.3,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#cards",
    scroller: "body",
    start: "10% 65%",
    end: "bottom 90%",
    scrub: true,
    markers: false,
  },
});
//========== SUPPLIES =============
tl.from(".supplies",{
  scale:.5,
  opacity:0,
  delay:1,
  stagger:0.1,
  duration:0.3,
  scrollTrigger:{
    trigger: "#supplies",
    scroller: "body",
    start: "10% 70%",
    end: "100% 60%",
    scrub: true,
    markers: false,
  }
})
// ======ROADMAP ===========
gsap.to("#roadmap1, .roadmap_line",{
  scrollTrigger:{
    trigger:"#roadmap1, .roadmap_line",
    start:"start center",
    end:"bottom center",
    markers:false,
    scrub:true

  },
  height:"100%",
  duration:5,
  ease:"power1.out"
})
gsap.to("#roadmap2, .roadmap_line2",{
  scrollTrigger:{
    trigger:"#roadmap2, .roadmap_line2",
    start:"70% 44%",
    end:"100% 20%",
    markers:true,
    scrub:true

  },
  height:"100%",
  duration:5,
  ease:"power1.out"
})
// ========= SLIDER ===========
let sections = gsap. utils.toArray(".scroll");
gsap.to(sections,{
  xPercent:-59 * (sections.length - 1),
  ease:"linear",
  scrollTrigger: {
        trigger: "#slider",
        pin:true,
        pinSpacing:true,
        scrub:true,
        start:"top 30%",
        end:"bottom 30%"
  }
})