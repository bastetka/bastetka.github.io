jQuery(function(i){"use strict";i(".toggle_menu").click(function(){return i(this).toggleClass("active"),i(".menu").toggleClass("active"),i("body").toggleClass("deactive"),!1}),i(".carousel_banner").slick({dots:!0,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3}),i(".carousel_reviews").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1}),i(".carousel_news").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1}),i(".text_reviews").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1}),i(".video_reviews").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1}),i(".carousel_earning").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1}),i(".carousel_students").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1}),i("a[href='#callback']").magnificPopup({mainClass:"my-mfp-zoom-in",removalDelay:300,type:"inline"}),i(".title_faq").click(function(){return i(this).parent().toggleClass("active"),i(this).next("p").slideToggle(),!1}),i(".tabs_plan .tab").click(function(){var s=i(".tabs_plan .tab"),e=i(".wrap_plan .item_plan");return s.removeClass("active"),e.removeClass("active"),i(this).addClass("active"),e.eq(i(this).index()).addClass("active"),!1}),i("img.svg").each(function(){var e=jQuery(this),i=e.attr("id"),l=e.attr("class"),s=e.attr("src");jQuery.get(s,function(s){s=jQuery(s).find("svg");void 0!==i&&(s=s.attr("id",i)),void 0!==l&&(s=s.attr("class",l+" replaced-svg")),s=s.removeAttr("xmlns:a"),e.replaceWith(s)},"xml")}),i('input[type="tel"]').mask("+7 999-999-99-99")});