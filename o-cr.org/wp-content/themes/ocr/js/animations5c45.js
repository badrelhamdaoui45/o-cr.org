( function( $ ) {


    $(window).on('load', function(){
        setTimeout(pageappear, 1200); 

    });
    function pageappear(){
        var ww = $(window).width();
        var wh = $(window).height();
        $( "#loadingDiv" ).fadeOut(500, function() {
            $( "#loadingDiv" ).remove();
        });  
        var navbarh = $(".navbar").innerHeight();
        $(".hero-title").height(wh/2 + navbarh);
        TweenMax.set(".title_anim",{y:50});
        TweenMax.set(".hero-title",{height:wh/2 + navbarh});
        // TweenMax.staggerTo(".class", 1, {y:300}, 0.2);
        TweenMax.staggerTo(".title_anim", .6, { y:0, opacity:1}, .4 );

        TweenMax.set(".btn-dark", {y:50,  opacity:0 });
        TweenMax.to(".btn-dark", .6, { y:0, opacity:1, delay:.8 });
    }
    // $( document ).ready(function() {
    //     var ww = $(window).width();
    //     var wh = $(window).height();
        
    //     $(window).on('resize', function(){
    //         var ww = $(window).width();
    //         var wh = $(window).height();
    //         $(".hero-title").height(wh/2 + navbarh);
    //     });


    //     gsap.defaults({ease: "power3"});
    //     gsap.set(".list__parrain__item", {y: 100, opacity: 0});
        
    //     ScrollTrigger.batch(".list__parrain__item", {
    //         // markers: true,
    //         start: "top bottom+=150",
    //         onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.3, grid: [1, 3]}, overwrite: true}),
    //     });
        
    //     ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".list__parrain__item", {y: 0}));

    // });
    
} )( jQuery );

