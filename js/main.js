$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout : 4000,
        smartSpeed: 650,
        responsive:{
            1920:{
                items:1
            },
            1400:{
                items:1
            },
            1260:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  });