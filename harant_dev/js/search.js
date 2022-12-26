jQuery(function ($) {
    "use strict";

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

});
