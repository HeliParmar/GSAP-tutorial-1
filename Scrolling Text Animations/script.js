let marqueeAnimation = gsap.to(".marque", {
    x: "-200%",
    duration: 3,
    repeat: -1,
    ease: "none"
});

window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        marqueeAnimation.timeScale(1); // Normal speed when scrolling down
        gsap.to(".marque img", {
            rotate: 180,
            duration: 0.5
        });
    } else {
        marqueeAnimation.timeScale(-1); // Reverse speed when scrolling up
        gsap.to(".marque img", {
            rotate: 0,
            duration: 0.5
        });
    }
});
