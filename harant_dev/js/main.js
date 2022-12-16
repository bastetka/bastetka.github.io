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

	$('.sidebar_document').theiaStickySidebar({
        additionalMarginTop: 95
    });

	$(window).resize(function() {
		sidebarDocument();
	});
	
	function sidebarDocument(){
		var width = $(window).width();      
		if(width < 992){
			var menuDocument = $(".head_document .current_menu");
			if(sidebarDocument.length == 0){
				var setMenuDocument = $(".sidebar_document .current_menu");
				$(".sidebar_document .current_menu").remove();
				$(".head_document").append(setMenuDocument);
				$(".head_document .current_menu ol").css({'display':'none'});
				$(".head_document .current_menu .title_menu").css({'display':'block'});
			}
		}else{
			var menuDocument = $(".sidebar_document .current_menu");
			if(menuDocument.length == 0){
				var setMenuDocument = $(".head_document .current_menu");
				$(".head_document .current_menu").remove();
				$(".sidebar_document .current_nav").after(setMenuDocument);
				$(".sidebar_document .current_menu ol").css({'display':'block'});  
				$(".sidebar_document .current_menu .title_menu").css({'display':'none'});  
			}

		}
	}
	sidebarDocument();
	$(document).on("click",".head_document .current_menu .title_menu",function(){   
		$(this).toggleClass("active");
		$(".head_document .current_menu ol").slideToggle(); 
	});

	$(document).on("click",".current_menu a",function(e){
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - 90
		}, 500);
	});


	$(".btn_filter").click(function () {
		$(".wrap_widget").addClass("active");
		$("body").addClass("deactive");
		return false;
	});

	$(".close_filter").click(function () {
		$(".wrap_widget").removeClass("active");
		$("body").removeClass("deactive");
		return false;
	});

  	$('.more_btn').click(function(){
    	$(this).toggleClass('active');
			$(this).parent().parent().find('.list_price.hidden').slideToggle(300, function(){
				if ($(this).is(':hidden')) {
					$(this).parent().find('.more_btn').html('Развернуть');
				} else {
					$(this).parent().find('.more_btn').html('Свернуть');
				}							
			});		
		return false;
	});	

	$(".item_faq .title_faq").click(function () {
		$(this).toggleClass("active");
		$(this).next(".text_faq").slideToggle();
		return false;
	});

	if (document.documentElement.clientWidth > 990) {
		$(".carousel_articles").slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
		});
	}

	if (document.documentElement.clientWidth > 990) {
		$(".online_jurist").slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		});
	}

	$(".tabs_category").on("click", ".tab_category", function () {
		var tabs = $(".tabs_category .tab_category"),
		  cont = $(".content_category .wrap_category");
		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
		return false;
	});

  
});
