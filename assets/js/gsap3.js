// {{{{{{{{{{{{{{{{{{{{{{{{{{NAVBAR}}}}}}}}}}}}}}}}}}}}}}}}}} //
gsap.from("#navlogo ul li a,#navlogo img", {
  z: -80,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#img",
    start: "-70% 0%",
    end: "20% 8%",
    scrub: "true",
    markers: false,
  },
});

tl.from("#berger", {
  rotate: 360,
  duration: 0.5,
  opacity: 1,
  delay: 0.5,
  stagger: 0.3,
});
// {{{{{{{{{{{{{{{{{{{{{{{{{{{POPULARISED}}}}}}}}}}}}}}}}}}}}}}}}}}} //
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    start: "20% 70%",
    end: "40% center",
    scrub: "true",
    markers: false,
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
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{CARDS}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} //
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    start: "start 60%",
    end: "75% center",
    scrub: "true",
    markers: false,
  },
});

tl.from(".img-4 div img", {
  z: -180,
  duration: 2,
  opacity: 0,
  delay: 2,
  stagger: 0.3,
});
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{SUPPLIES}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} //
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#four",
    start: "start 70%",
    end: "75% 60%",
    scrub: "true",
    markers: false,
  },
});

tl.from("#public div", {
  z: -180,
  duration: 2,
  opacity: 0,
  delay: 2,
  stagger: 0.5,
});

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{TIME-LINE}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} //
gsap.to("#roadmap1, .roadmap_line", {
  scrollTrigger: {
    trigger: "#roadmap1, .roadmap_line",
    start: "start center",
    end: "50% center",
    markers: false,
    scrub: true,
  },
  height: "100%",
  // duration: 5,
  ease: "power1.out",
});
gsap.to("#roadmap2, .roadmap_line2", {
  scrollTrigger: {
    trigger: "#roadmap2, .roadmap_line2",
    start: "50% 44%",
    end: "100% 20%",
    markers: false,
    scrub: true,
  },
  height: "100%",
  duration: 5,
  ease: "power1.out",
});

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{SLIDER}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} //
let sections = gsap.utils.toArray(".scroll");
gsap.to(sections, {
  xPercent: -50 * (sections.length - 0),
  ease: "linear",
  scrollTrigger: {
    trigger: "#slider",
    markers: true,
    pin: true,
    pinSpacing: true,
    scrub: true,
    start: "20% 30%",
    end: "60% 30%",
  },
});
// {{{{{{{{{{smooth scroll animation}}}}}}}}}} //
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});
window.scrollBy({
  top: 100,
  left: 0,
  behavior: "smooth",
});
document.querySelector(".hello").scrollIntoView({
  behavior: "smooth",
});
