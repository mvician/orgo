// tl means timeline

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "10%",
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "1%",
        scrub: 0,
    },
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "50%",
        scrub: 1,
    },
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "1%",
        scrub: 0,
    },
});

tl6.to(".threeDim", {opacity: 1})
tl4.fromTo(".mainBackground", {opacity: 0.3}, {opacity: 0})
tl.fromTo(".sliding-text", {y: 0}, {y: -400})
tl2.fromTo(".logo", {scale: 3.5,}, {scale: 1, top: "2rem", left: "3rem",  x: "50%",})
tl5.to(".beta-blockers", {opacity:0})
// trigger means that as soon as you hit the home section, 
// the following animation will occur.
// as soon as you scroll past 0% of that page, the animation will occur
// and finish when 'end' specifies ... like 80%
// takes 1 second (scrub) for animation to catch up to sroll bar

// tl3: now to keep the first page steady 
// while all the animations are going on (sticking the page)

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "200%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

// pinning is better to put at the bottom 
// so it doesn't interfere with future animations

