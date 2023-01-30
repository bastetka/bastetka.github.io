jQuery(function ($) {
    "use strict";

    $('.more_price .more_btn').click(function(){
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

    $(window).resize(function() {
		textCallback();
		carouselCard();
		carouselArticles();
	});

	function carouselCard(){
		var width = $(window).width();      
		if(width > 991){
			$(".carousel_jurist").slick({
				dots: false,
				arrows: true,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
			});
		}
	}
	carouselCard();

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
			$(".publication_jurist .carousel_articles").slick({
				dots: false,
				arrows: true,
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
			});
		}
	}
	carouselArticles();

	function textCallback(){
		var width = $(window).width();     
		if(width < 651){
			$(".form_callback form textarea").attr('placeholder', 'Опишите ваш вопрос/ситуацию своими словами, начиная с вопросительных вопросов: «Что», «Как», «Можно ли» и т.п.');
		}else{
			$(".form_callback form textarea").attr('placeholder', 'Введите вопрос');
		}
	}
	textCallback();

	$(".item_faq .title_faq").click(function () {
		$(this).toggleClass("active");
		$(this).next(".text_faq").slideToggle();
		return false;
	});

});
