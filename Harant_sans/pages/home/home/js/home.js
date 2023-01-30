jQuery(function ($) {
    "use strict";

    $(".best .carousel").fadeIn();

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

    $(".tabs_category").on("click", ".tab_category", function () {
        var tabs = $(".tabs_category .tab_category"),
            cont = $(".content_category .wrap_category");
        tabs.removeClass("active");
        cont.removeClass("active");
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });

    $('.more_category a').click(function(){
        $(this).toggleClass('active');
        $(this).parent().parent().find('.hidden_category').slideToggle(300, function(){
            if ($(this).is(':hidden')) {
                $(this).parent().find('.more_category a').html('Развернуть');
            } else {
                $(this).parent().find('.more_category a').html('Свернуть');
            }							
        });		
        return false;
    });
    
    $(function() {
        var tabs = $('.advantages .wrap_advan .item_advan');
        var image = $('.advantages .image_advan .item_image');
        tabs.click(function() { 
            $(this).addClass('active').siblings('.active').removeClass('active');
            image.removeClass("active");
            image.eq($(this).index()).addClass("active");
        });
        setInterval(function() {
            var onTab = tabs.filter('.active');
            var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
            nextTab.click();
            
        }, 5000);
    });

    $(".item_faq .title_faq").click(function () {
		$(this).toggleClass("active");
		$(this).next(".text_faq").slideToggle();
		return false;
	});

});
