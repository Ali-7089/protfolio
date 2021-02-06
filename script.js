let timeline = gsap.timeline();
var closebtn = document.querySelector('#closebtn');
var t12 = gsap.timeline();

closebtn.addEventListener('click', function(){
    t12.reverse();
})

timeline.to('#overlay', { duration:2, ease:'expo.inOut', height:4000, width:4000})
.to('#overlay h1 span',{ duration:1, ease:'expo.inOut', top:0})
.to('#overlay h1 span',{ duration:1, ease:'expo.inOut', top:'-100%', delay:.3})
.to('#overlay',{ duration:1, ease:'expo.inOut', opacity:0, onComplete: function(){
    overlay.style.display = 'none';
}})

.from('#nav h3', {duration:1, opacity:0, ease:'expo.inOut', x:30})
.from('#nav #icons i', {duration:.8, stagger:.2, opacity:0, ease:'expo.inOut', x:20})
.from('#main #line', {duration:2, stagger:.3,   width:0,  ease:'expo.inOut', x:30, delay:-.8})
.from('#main .anim', {duration:1, delay:-1,  stagger:.1, opacity:0, y:15,   ease:'expo.inOut'})
.from('#main #scroller', {duration:2, scale:1.1, opacity:0,   ease:'expo.inOut'})
.from('#right #links a',{duration:1, opacity:0, delay:-2, x:20, stagger:.3})

function animateTheLayer(){
    // var t12 = gsap.timeline();

    t12.to('#overlayright',{
        duration:1.5,
        ease:'expo.inOut',
        left:'0%',
        delay:-1,
        display:"flex",
        onComplete: function (){
            var worksample = document.querySelector('#worksample');
            worksample.style.display = "flex";
        }
    })

    .from('#overlayright h3',{
        duration:1.5,
        ease:'expo.inOut',
        x:40,
        opacity:0,
    })
     
    .from('#overlayright h3 span',{
        duration:1,
        ease:'expo.inOut',
        opacity:0,
        delay:-.2
    })

    .from('#overlayright  #more h5',{
        duration:1,
        ease:'expo.inOut',
        opacity:0,
        stagger:.2,
        x:30
    })
    .from('#overlayright  .work .holder img',{
        duration:1,
        ease:'expo.inOut',
        delay:-1.5,
        stagger:.2,
        x:'100%'
    })
    .from('#overlayright  #centerbtn',{
        duration:2,
        ease:'expo.inOut',
        x:30,
        opacity:0
    })
    .from('#overlayright #profiles #Ui',{
        scrollTrigger: {
            trigger: '#profiles',
            start : 'top centre',
            markers : true,
            scrub:1
        },
        duration:.1,
        ease:'expo.inOut',
        delay:1.5,
        opacity:0,
        x:40
    })

    .from('#overlayright #profiles #part1,#part2,#id,#part3,#part4',{
        duration:2,
        ease:'expo.inOut',
        delay:-.8 ,
        stagger:.2,
        opacity:0,
        x:'100%'
    })
}

// animateTheLayer();      


gsap.from('#center img',{
    opacity:0,
    ease:'expo.inOut',
    duration:2,
    delay:7.5  
})