//timeline is used to make things woek synchronize
let tl = gsap.timeline()
tl.from("nav h3",{
    y:-20,
    opacity:0
})
tl.from(".part2 h4",{
    y:-20,
    opacity:0,
    stagger:0.3
    // duration:0.3
})
tl.from(".demo",{
    scale:2,
    opacity:0,
    // stagger:1
})