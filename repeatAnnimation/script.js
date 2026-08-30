gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    borderRadius:"50%",
    repeat:2, //it will repeat 2 times if you want to do infinte then add -1
    yoyo:true //this is used to add annimation start and end
})