gsap.registerPlugin(ScrollTrigger);

// nav bar
gsap.from("#navlogo ul li, #navlogo div img", {
    x: -80,
    duration: 0.1,
    opacity: 0,
    rotate: 90,
    stagger: 0.3,
    delay: 0.3
})
// heading 
gsap.from("#headeing", {
    scrollTrigger: "#headeing",
    ease: "power2",
    color: "red",
    duration: 0.5,
    repeat: -1,
    yoyo: true,
})
gsap.to("#headeingimg", {
    x: -0,
    y: 100,
    scrollTrigger: {
        trigger: "#headeingimg ",
        start: "start center",
        end: "bottom center",
        scrub: true,
        markers: false,
    },
});
// burger_image
gsap.from(".burger_image_gsap", {
    rotate: 180,
    yoyo: true,
    repeat: -1,
    stagger: 0.3,
    delay: 0.3,
    duration: 1,
})
gsap.from(".burger_image_gsap2", {
    rotate: 180,
    yoyo: true,
    repeat: -1,
    stagger: 0.3,
    delay: 0.3,
    duration: 1,
})
gsap.from(".burger_image_gsap3", {
    rotate: 180,
    yoyo: true,
    repeat: -1,
    stagger: 0.3,
    delay: 0.3,
    duration: 1,
})
gsap.from(".burger_image_gsap4", {
    rotate: 180,
    yoyo: true,
    repeat: -1,
    stagger: 0.3,
    delay: 0.3,
    duration: 1,
})
// popularised
gsap.from("#popularised", {
    x: -100,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#popularised ",
        start: "start 80%",
        end: "80% 80%",
        scrub: true,
        markers: false,
    },
});
gsap.from("#popularised2", {
    x: 100,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#popularised ",
        start: "start 80%",
        end: "80% 80%",
        scrub: true,
        markers: false,
    },
});
// grid section
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
// Supplies
gsap.from("#Supplies", {
    x: -100,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#Supplies ",
        start: "start 80%",
        end: "80% 80%",
        scrub: true,
        markers: false,
    },
});
// road map
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
// slider 
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
