gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from("#navlogo ul li, #navlogo div img", {
    x: -80,
    duration: 0.1,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3
})
    .from("#headeing h2", {
        x: -80,
        duration: 0.3,
        opacity: 0,
        stagger: 0.3,
        delay: 0.3
    })

    .from("#popularised", {
        x: -100,
        y: -100,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#popularised",
            scroller: "body",
            start: "60% 85%",
            end: "bottom 90%",
            markers: false,
            scrub: true
        }
    })
    .from("#popularised2", {
        x: 50,
        y: -100,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#popularised",
            scroller: "body",
            start: "60% 85%",
            end: "bottom 90%",
            markers: false,
            scrub: true
        }
    })
    .from("#bgr_set", {
        duration: 3,
        rotate: 360,
        repeat: -1,
        ease: "linear"
    })
    .from("#Supplies", {
        x: -200,
        y: 200,
        opacity: 0,
        stagger: 1.5,
        scrollTrigger: {
            trigger: "#Supplies",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            markers: false,
            scrub: true,
        }
    })
    .from("#roadmap", {
        x: -80,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#roadmap",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            markers: false,
            scrub: true,
        }
    })
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

// Define the animation
tl.from(".grid", {
    x: 300,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#grid_img",
        start: "top center",
        end: "bottom center",
        scrub: 1
    }
});


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".slide");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-sliders",
        pin: ".main",
        pinSpacing: true,
        scrub: true,
        end: "+=3000",

    }
});