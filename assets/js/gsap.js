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
    .from("#logo div img", {
        x: 80,
        duration: 0.3,
        opacity: 0,
        stagger: 0.3,
        delay: 0.3,
        ease: "linear",
        scrollTrigger:
        {
            trigger: "#logo",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            markers: false,
            scrub: true
        }
    })
    .from("#popularised", {
        x: -50,
        y: 100,
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
        x: -80,
        y: 100,
        opacity: 0,
        stagger: 0.3,
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
            trigger: "#Supplies",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            markers: false,
            scrub: true,
        }
    })

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
