mdc.select.MDCSelect.attachTo(document.querySelector('.currency'));
$(document).ready(function(){
	$('.image_slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		arrows: true,
		prevArrow:' <button type="button" class="slick-prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>',
		autoplay: true,
		autoplaySpeed: 1000,
	});
});