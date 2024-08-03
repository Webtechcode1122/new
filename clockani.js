
gsap.from(".page2 h1",{
 y:60,
 delay:1,
 opacity:0,
 duration:2,    
 scrollTrigger:{
    trigger:".page2 h1",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:true,
 },
})
gsap.from(".page2 h3",{
    y:300,
    delay:1,
    opacity:0,
    duration:2, 
    scrollTrigger:{
        trigger:".page2 h3",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:true,
     },  
   })
   gsap.from(".page2 a",{
    y:300,
    delay:1,
    opacity:0,
    duration:2,   
    scrollTrigger:{
        trigger:".page2 a",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:true,
     },
   })
   gsap.from(".page3 h1",{
    y:60,
    delay:1,
    opacity:0,
    duration:2,    
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:true,
     },
   })
   gsap.from(".page3 h3",{
       y:300,
       delay:1,
       opacity:0,
       duration:2, 
       scrollTrigger:{
        trigger:".page3 h3",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:true,
     },  
      })
      gsap.from(".page3 a",{
       y:300,
       delay:1,
       opacity:0,
       duration:2,   
       scrollTrigger:{
        trigger:".page3 a",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:true,
     },
      })
      gsap.to(".page1",{
        scale:0,
        delay:2,
        opacity:0,
        duration:2,   
        scrollTrigger:{
            trigger:".page1",
            scroller:"body",
            start:"bottom 90%",
            scrub:true,
        }, 
       })



