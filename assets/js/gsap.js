gsap.from("#navlogo ul li , #navlogo div img", {
    x: -80,
    duration: 0.1,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    // rotate: 90,
});
gsap.from("#burger_image", {
    x: -80,
    duration: 0.3,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    rotate: 90,
});

gsap.from("#headeing h2 ", {
    x: -80,
    duration: 0.3,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
});
gsap.from("#bgr_set", {
    // x: 80,
    duration: 3,
    // opacity: 0,
    // stagger: 0.3,
    // delay: 1,
    rotate: 360,
    repeat: -1,
    ease: "linear"
});
gsap.from("#logo div img", {
    x: 80,
    duration: 0.3,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    ease: "linear",
    ScrollTrigger: {
        trigger: "#logo,",
        scroller: "body",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
});
gsap.from("#popularised ", {
    x: -50,
    y: 100,
    // duration: 0.3,
    opacity: 0,
    stagger: 0.3,
    // delay: 0.3,
    scrollTrigger: {
        trigger: "#popularised",
        scroller: "body",
        start: "60% 85%",
        end: "bottom 90%",
        markers: false,
        scrub: true,
    }
});
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#grid_img",
//         scroller: "body",
//         start: "top 30%",
//         end: "bottom 30%",
//         pin: "#grid_img",
//         markers: true,
//         scrub: true,
//     }
// });

// // Loop through each grid item and add animation
// for (let i = 1; i <= 12; i++) {
//     tl.from(`.grid_${i}`, {

//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.inOut",
//     });
// }

gsap.registerPlugin(ScrollTrigger);

// Define the animation
const slider = gsap.timeline({
    scrollTrigger: {
        trigger: "#grid_img",
        start: "top center",
        end: "bottom center",
        scrub: 1,
    }
});
slider.from(".grid", { x: 300, opacity: 0, stagger: 0.2, duration: 0.5 });
