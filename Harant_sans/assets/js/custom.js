jQuery(function ($) {
  	"use strict";

	document.addEventListener('scroll', function () {
		if ($(window).scrollTop() > 0) {
		  $('.wrap_head').addClass('fixed');
		} else {
		  $('.wrap_head').removeClass('fixed');
		}    
	});

	$(".toggle_menu").click(function () {
		$(this).toggleClass("active");
		$(".wrap_nav").toggleClass("active");
		$("body").toggleClass("deactive");
		return false;
	});
  
});
