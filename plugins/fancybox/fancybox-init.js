(function ($) {
	'use strict';
	
	jQuery(document).ready(function () {

		/*================================ Video Popup ==============================*/
		$('[data-fancybox="video"]').fancybox({
			arrows: true,
			animationEffect: [
			//"false",            - disable
			//"fade",
			//"slide",
			//"circular",
			//"tube",
			//"zoom-in-out",
			"rotate"
			],
			transitionEffect: [
			//"false",            - disable
			//"fade",
			//"slide",
			"circular",
			//"tube",
			//"zoom-in-out",
			//"rotate"
			],
			buttons: [
			"zoom",
			//"share",
			//"slideShow",
			"fullScreen",
			//"download",
			//"thumbs",
			"close"
			],
			infobar: false,
		});

        
		/*================================ Image Popup ==============================*/
		$('[data-fancybox="images"]').fancybox({
			arrows: true,
			animationEffect: [
			//"false",            - disable
			//"fade",
			//"slide",
			//"circular",
			//"tube",
			"zoom-in-out",
			//"rotate"
			],
			transitionEffect: [
			//"false",            - disable
			"fade",
			//"slide",
			//"circular",
			//"tube",
			//"zoom-in-out",
			//"rotate"
			],
			buttons: [
			"zoom",
			//"share",
			//"slideShow",
			"fullScreen",
			//"download",
			"thumbs",
			"close"
			],
			infobar: true,
		});

		
		


 	});
	
})(jQuery);

