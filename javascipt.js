var tl = gsap.timeline()
var menu = document.querySelector("#menu-link")
var opens = document.querySelector("#navbar i")
var cross = document.querySelector("#menu-link i")



tl.to(menu,{

    right:0,
    duration:0.5
})

tl.from("li",{

    x:100,
    delay:0.5,
    duration:0.5,
    stagger:0.2,
    opacity:0


})

tl.pause()


opens.addEventListener("click",()=>{


    console.log("hey")

    tl.play()
})

cross.addEventListener("click",()=>{


    console.log("bey")

    tl.reverse()
})