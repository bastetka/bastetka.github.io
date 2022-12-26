jQuery(function ($) {
    "use strict";

    $(document).on("click",".nav_jurist a",function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 120
        }, 500);
    });

    $('.sibebar_jurist').theiaStickySidebar({
        additionalMarginTop: 95
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
                $(this).parent().find('.more_case a').html('Полный список дел');
            } else {
                $(this).parent().find('.more_case a').html('Свернуть');
            }							
        });		
        return false;
    });	

});
