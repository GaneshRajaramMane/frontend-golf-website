var cursor=document.querySelector("#cursor")
var blur=document.querySelector("#blur")
document.addEventListener("mousemove",function(detail){
    cursor.style.left=detail.x +"px"
    cursor.style.top=detail.y+"px"
    blur.style.left=detail.x -50 +"px"
    blur.style.top=detail.y -50 +"px"
})

var h1=document.querySelectorAll("#navbar h1")
h1.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cursor.style.scale="3"
        cursor.style.backgroundColor="transparent"
        cursor.style.border="1px solid #fff"
    })
})

var h1=document.querySelectorAll("#navbar h1")
h1.forEach(function(element){
    element.addEventListener("mouseleave",function(){
        cursor.style.scale="1"
        cursor.style.backgroundColor="#B2E824"
        cursor.style.border="0px solid #fff"
    })
})
gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:0.9,
    height:"100px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"top 10%",
        scrub:1
    }
})
 gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top 100vh",
        scrub:5
    }
 })

gsap.from("#third img ,#text",{
    y:50,
    opacity:0,
    duration:10,
    scrollTrigger:{
    trigger:"#third",
    scroller:"body",
    start:"top 60%",
    end:"top 100%",
    scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 60%",
    end:"top 100%",
    scrub:2
    }
})
gsap.from("#firstq",{
    y:-70,
    x:-70,
   scrollTrigger:{
        trigger:"#firstq",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:1
    }
})
gsap.from("#secondq",{
    y:70,
    x:70,
        scrollTrigger:{
        trigger:"#secondq",
        scroller:"body",
        start:"top 100%",
        end:"top 40%",
        scrub:1
    }
})
gsap.from("#seventh>h1",{
    y:80,
    
    scrollTigger:{
        trigger:"#seventh>h1",
        scroller:"body",
        markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:10,
        duration:1
    }
})