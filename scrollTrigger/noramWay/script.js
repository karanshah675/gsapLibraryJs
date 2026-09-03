gsap.to("#page1 #box",{
    scale:0,
    opacity:0,
    rotate:360,
    delay:1,
    duration:1,
 
})
gsap.to("#page2 #box",{
    scale:0,
    opacity:0,
    rotate:360,
    delay:1,
    duration:1,
    scrollTrigger:"#page2 #box"
})
