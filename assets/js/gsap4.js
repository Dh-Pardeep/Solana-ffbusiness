gsap.from("#navlogo ul li , #navlogo div img", {
  y: -80,
  duration: 0.3,
  // opacity: 0,
  stagger: 0.2,
  delay: 0.1,
  // rotate:90,
});
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
  .from("#discover", {
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
  .from("#discover_img", {
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
// const tm = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#timeline",
//     start: "10% 30%",
//     end:"bottom 90%",
//     toggleActions: "play none none reverse",
//     markers: false,
//   },
// });
// tm.fromTo(
//   ".timeline",
//   {
//     backgroundColor: "white",
//     duration: 1.0,
//   },
//   {
//     backgroundColor:"red",
//     duration: 1.0,
//   }
// )

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(':root', {
//   '--timeline-background-color': 'blue', // Change this to your desired color
//   scrollTrigger: {
//     trigger: '#timeline',
//     start: 'top center',
//     end: 'bottom center',
//     scrub: true,
//   }
// }); 


const team = gsap.timeline({
  scrollTrigger: {
    trigger: "#slide",
    start: "10% 35%",
    end:"bottom center",
    pin:true,
    // toggleActions: "play none none reverse",
    markers: true,
  },
});

team.from(".scroll",{
  x:0,
  pinnedContainer: ".selector",
})
