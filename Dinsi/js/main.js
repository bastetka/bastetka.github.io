jQuery(function(o){"use strict";o(".toggle_menu").click(function(){return o(this).toggleClass("active"),o(".menu").toggleClass("active"),o("body").toggleClass("deactive"),!1}),o(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,dots:!1,asNavFor:".slider-nav",responsive:[{breakpoint:768,settings:{adaptiveHeight:!0}}]}),o(".slider-nav").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,asNavFor:".slider-for",arrows:!1,dots:!1,focusOnSelect:!0,vertical:!0}),o(".popup_open").click(function(){return o(".popup_fade").fadeIn(),o("body").addClass("deactive"),!1}),o(".popup_close").click(function(){return o(this).parents(".popup_fade").fadeOut(),o("body").removeClass("deactive"),!1}),o(document).keydown(function(e){27===e.keyCode&&(e.stopPropagation(),o(".popup_fade").fadeOut())}),o(".popup_fade").click(function(e){0==o(e.target).closest(".popup").length&&(o(this).fadeOut(),o("body").removeClass("deactive"))}),o('input[type="tel"]').mask("+ 9 (999) 999-99-99")});