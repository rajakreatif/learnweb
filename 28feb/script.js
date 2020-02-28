const anchor = window.location.hash;
$(`a[href="${anchor}"]`).tab('show');

var actWidth = $('.content-nav')
	.find('.active')
	.parent('li')
	.width();
var actPosition = $('.content-nav .active').position();

$('.slider').css({
	left: actPosition.left,
	width: actWidth,
});
$('.content-nav a').click(function() {
	var position = $(this)
		.parent()
		.position();
	var width = $(this)
		.parent()
		.width();

	$('.slider').css({
		left: position.left,
		width: width,
	});
});
