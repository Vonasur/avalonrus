$(document).ready(function () {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});
	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	})
});

$(".gallery img").click(function () {

	var that = this;
	$(".main-img").fadeOut(200, function () {

		$(this).attr("src", $(that).attr("src"))
			.attr("data-large", $(that).attr("data-tmb-large"))
			.fadeIn(1000);
	});

	return false;
});