function loaderAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1",{
    y: 150,
    duration: .5,
    stagger: .25,
    opacity: 0,
    delay: .4,
 
})
tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var h5Timer = document.querySelector("#line1-part1 h5")
var grow = 0
setInterval(function(){
    if(grow < 100){
        h5Timer.innerHTML = grow++;
    }
    else{
        h5Timer.innerHTML = grow;
    }
},30)
    }
})
tl.to(".line h2",{
    animationName: "anime",
    opacity:1
})

tl.to("#loader",{
    opacity: 0,
    delay:2.3,
    duration: .4
})
// 

tl.from("#page1",{
    y:1200,
    delay:.2
})

tl.to("#loader",{
    display: "none"
})

tl.from("#nav",{
    opacity:0
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,
    stagger:.1,
})
}

function cursurAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursur",{
            left: dets.x,
            top: dets.y
        })
        
    })
    Shery.makeMagnet("#nav-part2 h4", {

    });
}
loaderAnimation()
cursurAnimation()

// document.querySelector("#nav-part2").addEventListener("mouseenter",function(){
//    cursur.style.scale = 2
// })
// document.querySelector("#nav-part2").addEventListener("mouseleave",function(){
//    cursur.style.scale = 1
// })




