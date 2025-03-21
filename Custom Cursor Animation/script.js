var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imagediv = document.querySelector("#image")

main.addEventListener("mousemove",function(dets) {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})

imagediv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:3
    })
})
imagediv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1
    })
})