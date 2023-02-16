jQuery(function ($) {
  "use strict";

  $(".btn_menu").click(function () {
		$(this).toggleClass("active");
		$(".dots_menu").slideToggle();
		return false;
	});

  $(document).click(function (e) {
    if ($(e.target).closest(".dots_menu").length) {
        return;
    }
    $(".dots_menu").slideUp();
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

  $('.more_reviews a').click(function(){
    $(this).toggleClass('active');
    $('.hidden_reviews').slideToggle(300, function(){
        if ($(this).is(':hidden')) {
            $('.more_reviews a').html('Показать еще');
        } else {
            $('.more_reviews a').html('Свернуть');
        }							
    });		
    return false;
  });

  $('.open_popup').click(function() {
    $('.fade_popup').show();
    $('body').addClass('deactive');
    return false;
  });	
  
  $('.close_popup').click(function() {
    $(this).parents('.fade_popup').hide();
    $('body').removeClass('deactive');
    return false;
  });
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.fade_popup').hide();
    }
  });
  
  $('.fade_popup').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).hide();
      $('body').removeClass('deactive');					
    }
  });

  $(window).resize(function() {
		navFixed();
		carouselDocuments();
		carouselArticles();
    sidebarFixed();
	});

  function navFixed(){
		var width = $(window).width();      
		if(width > 991){
			document.addEventListener('scroll', function () {
        if ($(window).scrollTop() > 60) {
          $('.nav_jurist').addClass('fixed');
        } else {
          $('.nav_jurist').removeClass('fixed');
        }    
      });
		} else {
      document.addEventListener('scroll', function () {
        if ($(window).scrollTop() > 350) {
          $('.nav_jurist').addClass('fixed');
        } else {
          $('.nav_jurist').removeClass('fixed');
        }    
      });
    }
	}
	navFixed();

  function carouselDocuments(){
		var width = $(window).width();      
		if(width > 991){
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
    }
	}
	carouselDocuments();

  function carouselArticles(){
		var width = $(window).width();      
		if(width > 991){
			$(".publication .carousel_articles").slick({
				dots: false,
				arrows: true,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 2,
            },
          }
        ]
			});
		}
	}
	carouselArticles();
  
  function sidebarFixed(){
		$('.sibebar_jurist').theiaStickySidebar({
      additionalMarginTop: 62
  });
	}
	sidebarFixed();

});
