jQuery(function(t){"use strict";t(".toggle_menu").click(function(){return t(this).toggleClass("active"),t(".menu").toggleClass("active"),t("body").toggleClass("deactive"),!1}),t(".menu li").on("click","a",function(e){e.preventDefault();e=t(this).attr("href"),e=t(e).offset().top;t("body,html").animate({scrollTop:e},1e3),t(".toggle_menu").removeClass("active"),t(".menu").removeClass("active"),t("body").removeClass("deactive")}),t(".item_faq .title_faq").click(function(){return t(this).parent().toggleClass("active"),t(this).next(".text_faq").slideToggle(),!1})});