gsap.to("#page2 h1", {
  transform:"translateX(-194%)",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true
  }
})

var initialPath = `M 10 100 Q 250 100 490 100`