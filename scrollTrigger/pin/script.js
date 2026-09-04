// gsap.to("#page1 #box",{
//     scale:0,
//     opacity:0,
//     rotate:360,
//     delay:1,
//     duration:1,
 
// })
// gsap.to("#page2 #box",{
//     scale:0,
//     opacity:0,
//     rotate:360,
//     delay:1,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top -10%",
//         scrub:true
//     }
// })
gsap.to(".box h1",{
    x:"-68%",
    delay:2,
    duration:2,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})
