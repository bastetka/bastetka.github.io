jQuery(function(i){"use strict";i(".toggle_menu").click(function(){return i(this).toggleClass("active"),i(".wrap_nav").toggleClass("active"),i("body").toggleClass("deactive"),!1}),i(".btn_filter").click(function(){return i(".wrap_widget").addClass("active"),i("body").addClass("deactive"),!1}),i(".close_filter").click(function(){return i(".wrap_widget").removeClass("active"),i("body").removeClass("deactive"),!1}),i(".more_btn").click(function(){return i(this).toggleClass("active"),i(this).parent().parent().find(".list_price.hidden").slideToggle(300,function(){i(this).is(":hidden")?i(this).parent().find(".more_btn").html("Развернуть"):i(this).parent().find(".more_btn").html("Свернуть")}),!1}),i(".item_faq .title_faq").click(function(){return i(this).toggleClass("active"),i(this).next(".text_faq").slideToggle(),!1}),990<document.documentElement.clientWidth&&i(".carousel_articles").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1}),990<document.documentElement.clientWidth&&i(".online_jurist").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1}),i(".tabs_category").on("click",".tab_category",function(){var t=i(".tabs_category .tab_category"),e=i(".content_category .wrap_category");return t.removeClass("active"),e.removeClass("active"),i(this).addClass("active"),e.eq(i(this).index()).addClass("active"),!1}),i(".title_nav").click(function(){return i(this).toggleClass("active"),i(".current_nav__dropdown").slideToggle(),!1}),i(".current_nav__dropdown a").on("click",function(t){t.preventDefault();t=i(this).attr("href");i("html, body").stop().animate({scrollTop:i(t).offset().top-70},800)})});