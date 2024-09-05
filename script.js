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