var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.7,

})
tl.from("#full h4",{
    x:10,
    y:-10,
    opacity:-1,
    duration:0.5,
    stagger:0.2
})

tl.from("#full i",{
    opacity:0,
    duration:0,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})

