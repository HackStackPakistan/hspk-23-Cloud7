(function($) {
    'use strict';

    // Mean Menu JS
    $('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

    // Navbar Area
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >150){  
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });

    // Search Overlay JS
	$(".side-nav .search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
    });

    // Others Option For Responsive JS
	$(".side-nav-responsive .dot-menu").on("click", function(){
		$(".side-nav-responsive .container .container").toggleClass("active");
	});
    
    // Brand Slider
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            768:{
                items: 4
            },
            992:{
                items: 5
            },
            1200:{
                items: 6
            }
        },
        navText: [
            "<i class='flaticon-left'></i>",
            "<i class='flaticon-arrow'></i>"
        ],
    })

    // Brand Slider
    $('.brand-logo-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            768:{
                items: 4
            },
            992:{
                items: 5
            },
            1200:{
                items: 6
            }
        },
    })

    // Team Slider 
     $('.team-slider').owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            568:{
                items: 2
            },
            992:{
                items: 3
            },
            1200:{
                items: 5
            },
            1600:{
                items: 6
            }
        },
    })

    // Team Slider Two
    $('.team-slider-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            568:{
                items: 2
            },
            992:{
                items: 3
            },
            1000:{
                items: 4
            },
        },
        navText: [
            "<i class='bx bx-plus'></i>",
            "<i class='bx bx-plus'></i>"
        ],
    })

    // Testimonial Slider 
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        navText: [
            "",
            "<i class='bx bx-plus'></i>"
        ],
    })

    // Testimonial Slider 
    $('.testimonial-slider-two').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
    })

    // Popup Video
    $('.popup-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });

    // WOW JS
    new WOW().init();

    // Back To Top Js
    $('body').append('<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>');
    $(window).on('scroll',function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

})(jQuery);