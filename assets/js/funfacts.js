
(function ($) {
	'use strict';

	// Funfacts
	var a = 0;
	$(window).on("scroll", function() {

		var oTop = $('#funfacts').offset().top - window.innerHeight;
		if (a === 0 && $(window).scrollTop() > oTop) {
			$('.fun-number').each(function () {
				$(this).prop('Counter',0).animate({
					  Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
			a === 1;
		}
	});
	

})(jQuery);