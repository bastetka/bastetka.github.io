jQuery(function(i){"use strict";var s=document.getElementById("hellopreloader_preload");window.onload=function(){setTimeout(function(){!function(t){t.style.opacity=1;var e=setInterval(function(){t.style.opacity=t.style.opacity-.05,t.style.opacity<=.05&&(clearInterval(e),s.style.display="none")},16)}(s)},1e3)},i(".toggle_menu").click(function(){return i(this).toggleClass("active"),i(".menu").toggleClass("active"),i("body").toggleClass("deactive"),!1}),i(".link_menu").on("click",function(t){t.preventDefault(),i(".toggle_menu").removeClass("active"),i(".menu").removeClass("active"),i("body").removeClass("deactive")}),i(".title_faq").click(function(){return i(this).parent().toggleClass("active"),i(this).next(".text_faq").slideToggle(),!1}),i(".more_plan").click(function(){return i(this).toggleClass("active"),i(this).parent().find(".text_hidden").slideToggle(),i(this).hasClass("active")?(i(this).text("Свернуть ↑"),i(this).parent().find(".title_plan span").hide()):(i(this).text("Подробнее ↓"),i(this).parent().find(".title_plan span").show()),!1}),i(".tabs_soft .tab").click(function(){var t=i(this).parent().parent().find(".tabs_soft .tab"),e=i(this).parent().parent().find(".info_soft .inner_soft");return t.removeClass("active"),e.removeClass("active"),i(this).addClass("active"),e.eq(i(this).index()).addClass("active"),!1}),document.documentElement.clientWidth<768&&i(".wrap_price").slick({dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1}),document.documentElement.clientWidth<768&&i(".wrap_earnings").slick({dots:!0,arrows:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1}),document.documentElement.clientWidth<768&&(i(".info_soft").slick({dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0}),i(".inner_tariff").click(function(){return i(this).toggleClass("active"),!1})),i(".link").on("click",function(t){t.preventDefault();t=i(this).attr("href"),t=i(t).offset().top;i("body,html").animate({scrollTop:t},500)}),i("img.svg").each(function(){var e=jQuery(this),i=e.attr("id"),s=e.attr("class"),t=e.attr("src");jQuery.get(t,function(t){t=jQuery(t).find("svg");void 0!==i&&(t=t.attr("id",i)),void 0!==s&&(t=t.attr("class",s+" replaced-svg")),t=t.removeAttr("xmlns:a"),e.replaceWith(t)},"xml")}),i('input[type="tel"]').mask("+7 999-999-99-99")});