gsap.registerPlugin(ScrollTrigger);


gsap.from("#navlogo ul li, #navlogo div img", {
    x: -80,
    duration: 0.1,
    opacity: 0,
    rotate: 90,
    stagger: 0.3,
    delay: 0.3
})

gsap.from("#d_grid .grid", {
    x: 100,
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#d_grid",
      scroller: "body",
      start: "10% 65%",
      end: "bottom 90%",
      scrub: true,
      markers: false,
    },
  });
gsap.to("#timelineMain1 .timeline_01", {
    scrollTrigger: {
        trigger: "#timelineMain1 ",
        start: "start center",
        end: "bottom center",
        scrub: true,
        markers: false,
    },
    duration: 5,
    height: "100%",
    ease: "power1.out",
});

gsap.to("#timelineMain1 .timeline_02", {
    scrollTrigger: {
        trigger: ".timeline_02 ",
        start: "start 30%",
        end: "bottom 0%",
        scrub: true,
        markers: false,
    },
    duration: 5,
    height: "100%",
    ease: "power1.out",
});

let sections = gsap.utils.toArray(".slide");
gsap.to(sections, {
    xPercent: -63 * (sections.length - 1),
    ease: "linear",
    scrollTrigger: {
        trigger: ".horizontal-sliders",
        pin: true,
        pinSpacing: true,
        scrub: true,
        start: "top 30%",
        end: "bottom 0%",
    }
});
