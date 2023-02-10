jQuery(function ($) {
  "use strict";

  $(".btn_menu").click(function () {
		$(this).toggleClass("active");
		$(".dots_menu").slideToggle("active");
		return false;
	});

  $(document).on("click",".nav_jurist a",function(e){
      e.preventDefault();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 120
      }, 500);
  });

  document.addEventListener('scroll', function () {
		if ($(window).scrollTop() > 60) {
		  $('.nav_jurist').addClass('fixed');
		} else {
		  $('.nav_jurist').removeClass('fixed');
		}    
	});

  $(".carousel_documents").slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
            },
          }
      ]
  }); 

  $('.more_case a').click(function(){
      $(this).toggleClass('active');
      $(this).parent().parent().find('.list_case_hidden').slideToggle(300, function(){
          if ($(this).is(':hidden')) {
              $(this).parent().find('.more_case a span').html('Полный список дел');
          } else {
              $(this).parent().find('.more_case a span').html('Свернуть');
          }							
      });		
      return false;
  });

  $('.more_work').click(function(){
    $(this).toggleClass('active');
    $(this).parent().parent().find('.hidden_work').slideToggle(300, function(){
        if ($(this).is(':hidden')) {
            $(this).parent().find('.more_work').html('Развернуть');
        } else {
            $(this).parent().find('.more_work').html('Свернуть');
        }							
    });		
    return false;
  });

  $('.more_court').click(function(){
    $(this).toggleClass('active');
    $(this).parent().parent().find('.list_court_hidden').slideToggle(300, function(){
        if ($(this).is(':hidden')) {
            $(this).parent().find('.more_court').html('Развернуть');
        } else {
            $(this).parent().find('.more_court').html('Свернуть');
        }							
    });		
    return false;
  });

  $(window).resize(function() {
		carouselArticles();
	});

  function carouselArticles(){
		var width = $(window).width();      
		if(width > 991){
			$(".publication .carousel_articles").slick({
				dots: false,
				arrows: true,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
			});
		}
	}
	carouselArticles();
  
  $('.sibebar_jurist').theiaStickySidebar({
    additionalMarginTop: 95
});

});
