var $box = $('.box');
var $diamond = $('.diamond');
var $panel = $('.panel');
var $circle = $('.circle');
var $list = $('.list');

$('.btn-show-hide').on('click', function (e) {
	e.preventDefault();
	console.log('clicked')
	$box.toggleClass('js-show-hide');
});
