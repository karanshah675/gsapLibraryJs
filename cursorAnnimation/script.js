let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")
main.addEventListener("mouseenter",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        scale:1
    })
})
image.addEventListener("mouseenter",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        scale:4
    })
})
 
