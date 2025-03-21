gsap.to("#page2 h1", {
  transform:"translateX(-160%)",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:0.5,
    pin:true
  }
})

var Path = "M 10 100 Q 250 100 490 100"
var finalPath = "M 10 100 Q 250 100 490 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`

  gsap.to("svg path",{
    attr: { d: path },
    duration: 0.5,
    ease: "power2.inOut",
  })
})

string.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
    attr: {d:finalPath},
    duration: 0.5,
    ease:"elastic.out(1,0.2)"
  })
})