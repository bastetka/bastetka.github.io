jQuery(function ($) {
    "use strict";

    $(".btn_settings").click(function () {
        $(this).toggleClass("active");
        $(".settings_form").toggleClass("active");
        return false;
    });

    $('#slider_rating').slider({
        range: true,
        min: 0,
        max: 10,
        values: ['0', '10'],
        slide: function(event, ui) {
            $('#min_rating').val(ui.values[0]);
            $('#max_rating').val(ui.values[1]);
        }
    });

    $('#slider_experience').slider({
        range: true,
        min: 0,
        max: 30,
        values: ['0', '30'],
        slide: function(event, ui) {
            $('#min_experience').val(ui.values[0]);
            $('#max_experience').val(ui.values[1]);
        }
    });

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

});
