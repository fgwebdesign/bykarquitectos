/*
Theme Name: Mrittik Architecture Theme
Version: 1.0
Author: WPThemeBooster
Author URI: 
Description: Mrittik is a Modern Architecture Theme
*/
/*	IE 10 Fix*/

(function ($) {
	'use strict';

    

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	
	jQuery(document).ready(function () {

        // Preloader
        setTimeout(function() {
            $('#preloader').addClass('hide');
        }, 1000);

        $( "#preloader" ).append('<div class="hide-loader"></div>');
        $('.hide-loader').on("click", function(e){
            $(this).parent().addClass('hide');
        });
    
        // Menu 5 plugin 
        ma5menu({
			menu: '.main_menu',
			activeClass: 'current',
			// footer: '.slide_navi',
			position: 'right',
			closeOnBodyClick: true
		});

        // Aside info bar
        $('.aside_open').on("click", function(e) {
            e.preventDefault();
            $('.aside_info_wrapper').addClass('show');
        });
        $('.aside_close').on("click", function(e) {
            e.preventDefault();
            $('.aside_info_wrapper').removeClass('show');
        });

        // Toggle Header Search
        $('.header_search .form-control-submit').on("click", function(e) {
            $('.open_search').toggleClass('active');
        });

        // Sticky Header
        var header = $("header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("bg-dark sticky");
            } else {
                header.removeClass("bg-dark sticky");
            }
        });


        // Slider 1
        var swiper1 = new Swiper('.swiper_theme_slider', {
            slidesPerView: '1',
            // centeredSlides: true,
            speed: 1600,
            spaceBetween: 50,
            parallax: true,
            autHeight: true,
            mousewheel: false,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: true,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            breakpoints: {
                767: {
                    // slidesPerView: 1.5,
                    spaceBetween: 70,
                },
                1200: {
                    // slidesPerView: 1.5,
                    spaceBetween: 120,
                },
                1400: {
                    // slidesPerView: 1.5,
                    spaceBetween: 170,
                },
            }
        });

        // $(window).on("resize", function() {
        //     var bodyheight = $(this).height();
        //     $(".swiper_theme_slider").height(bodyheight);
        // }).resize();


        // Slider 2
        var swiper2 = new Swiper('.swiper_theme_slider_2', {
            slidesPerView: '1',
            centeredSlides: true,
            direction: "vertical",
            speed: 1600,
            autoplay: false,
            spaceBetween: 0,
            parallax: true,
            autHeight: true,
            mousewheel: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });

        $(window).on("resize", function() {
            var bodyheight = $(this).height();
            $(".swiper_theme_slider_2").height(bodyheight);
        }).resize();

        // Slider 3
        var swiper3 = new Swiper('.swiper_theme_slider_3', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1600,
            autoplay: false,
            spaceBetween: 0,
            parallax: true,
            autHeight: true,
            mousewheel: false,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });

        // $(window).on("resize", function() {
        //     var bodyheight = $(this).height();
        //     $(".swiper_theme_slider_3").height(bodyheight);
        // }).resize();

        // Slider 4
        var swiper4 = new Swiper('.swiper_theme_slider_4', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1600,
            autoplay: true,
            spaceBetween: 0,
            parallax: true,
            autHeight: true,
            mousewheel: false,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });

        $(window).on("resize", function() {
            var bodyheight = $(this).height();
            $(".swiper_theme_slider_4").height(bodyheight);
        }).resize();


        // Slider 6
        var swiper6 = new Swiper(".swiper_theme_slider_6", {
            slidesPerView: '2',
            speed: 1000,
            autoplay: false,
            spaceBetween: 20,
            parallax: true,
            autHeight: true,
            mousewheel: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
            }
        });
        
    
        // Testimonial
        var swipert7 = new Swiper('.swiper_testimonial', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1600,
            spaceBetween: 50,
            parallax: true,
            autHeight: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: true,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            breakpoints: {
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 70,
                },
                1200: {
                    slidesPerView: 1.5,
                    spaceBetween: 120,
                },
                1400: {
                    slidesPerView: 1.5,
                    spaceBetween: 170,
                },
            }
        });

        // Team
        var swipert8 = new Swiper('.swiper_team', {
            slidesPerView: '3',
            centeredSlides: false,
            speed: 1400,
            spaceBetween: 65,
            parallax: true,
            autHeight: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: true,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
            }
        });

        // Gallery
        var swiper9 = new Swiper('.swiper_gallery', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1400,
            spaceBetween: 0,
            parallax: true,
            autHeight: true,
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            },
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });

        

        // Alternate Hover/Active
        $('.left_part .grid-item, .right_part .grid-item').on("mouseenter", function(){     
            $('.right_part .grid-item').removeClass('active');    
        }).on('mouseleave',  function(){ 
            $('.right_part .grid-item + .grid-item').addClass('active');     
        });

        // Youtube
        var $ytvideoTrigger = $(".ytplay_btn");
        $ytvideoTrigger.on("click", function(evt) {  
            $(".ytube_video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

        
        // Totop Button
        $('.totop a').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, '300');
        });
        

        // ========== SHOP PAGE =========== //
        // Select 2
        $('.basic_select').select2({});
        
        // Load More Content
        $(".product_view_list .product_item").slice(0, 6).show();
        $(".product_view_list #load-more").on("click", function(e){
            e.preventDefault();
            $(".product_view_list .product_item:hidden").slice(0, 3).slideDown();
            if($(".product_view_list .product_item:hidden").length === 0) {
                $(".product_view_list #load-more").css('display', 'none');
            }
        });


        // Product Zoom
        $('.product_zoom_button_group > li > a').eq(0).addClass( "selected" );
        $('.product_zoom_container > .product_zoom_info').eq(0).css('display','block');
        $('.product_zoom_button_group').on("click",function(e){
            if($(e.target).is("a")){

                /*Handle Tab Nav*/
                $('.product_zoom_button_group > li > a').removeClass( "selected");
                $(e.target).addClass( "selected");
                
                /*Handles Tab Content*/
                var clicked_index = $("a",this).index(e.target);
                $('.product_zoom_container > .product_zoom_info').css('display','none');
                $('.product_zoom_container > .product_zoom_info').eq(clicked_index).fadeIn();
            }
            $(this).blur();
            return false;
        });

        // Related Products
        var swipert10 = new Swiper('.swiper_related_products', {
            slidesPerView: '3',
            centeredSlides: false,
            speed: 1400,
            spaceBetween: 65,
            parallax: true,
            autHeight: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
            }
        });        

        


        // AOS Initialize
        AOS.init({
            delay: 50, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out',
            once: true,
            disable: false,
        });


        // Day-Night Mode Switcher
        var icon = document.getElementById("mode_switcher");

        // if (localStorage.getItem("theme") === "null"){
        //     localStorage.setItem("theme", "light");
        // }

        // let localData = localStorage.getItem("theme");

        // if (localData === "light") {
        //     icon.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>';
        //     document.body.classList.remove("bg-white");
        // } else if (localData === "dark"){
        //     icon.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>';
        //     document.body.classList.add("bg-white");
        // }

        icon.onclick = function() {
            document.body.classList.toggle("bg-white");
            if (document.body.classList.contains("bg-white")){
                icon.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>';
                localStorage.setItem("theme", "dark");
            } else {
                icon.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>';
                localStorage.setItem("theme", "light");
            }
        }

    });      
})(jQuery);

// Hide header on scroll down
const nav = document.querySelector(".header");
const scrollUp = "top-up";
let lastScroll = 800;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 800) {
        nav.classList.remove(scrollUp);
        $('.totop').removeClass('show');
        return;
    }
    
    if (currentScroll > lastScroll) {
        // down
        nav.classList.add(scrollUp);        
        $('.totop').addClass('show');

    } else if (currentScroll < lastScroll) {
        // up
        nav.classList.remove(scrollUp);        
        $('.totop').removeClass('show');
    }
    lastScroll = currentScroll;
});