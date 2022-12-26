jQuery(function ($) {
    "use strict";

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

});
