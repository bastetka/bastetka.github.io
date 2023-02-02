jQuery(function ($) {
    "use strict";

    $(".btn_account").click(function () {
		$(this).toggleClass("active");
		$(".sidebar_personal").toggleClass("active");
		$(".head_personal").toggleClass("active");
		$("body").toggleClass("deactive");
		return false;
	});

    $(".tabs_reviews").on("click", ".tab_reviews", function () {
        var tabs = $(".tabs_reviews .tab_reviews"),
            cont = $(".content_reviews .wrap_reviews");
        tabs.removeClass("active");
        cont.removeClass("active");
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });

    $('.more_description').click(function(){
        $(this).toggleClass('active');
                $(this).parent().parent().find('.description_hide').slideToggle(300, function(){
                        if ($(this).is(':hidden')) {
                                $(this).parent().find('.more_description').html('Читать еще');
                        } else {
                                $(this).parent().find('.more_description').html('Скрыть');
                        }							
                });		
        return false;
    }); 

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

    $('#slider_answer').slider({
        range: true,
        min: 0,
        max: 15,
        values: ['0', '10'],
        slide: function(event, ui) {
            $('#min_answer').val(ui.values[0]);
            $('#max_answer').val(ui.values[1]);
        }
    }); 

});
