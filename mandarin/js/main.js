jQuery(function(o){"use strict";o(".toggle_menu").click(function(){return o(this).toggleClass("active"),o("nav").toggleClass("active"),!1}),o(".link_section").click(function(e){e.preventDefault();e=o(this).attr("href"),e=o(e).offset().top;o("body,html").animate({scrollTop:e},600)}),o(".item_faq .title_faq").click(function(){return o(this).parent().toggleClass("active"),o(this).next(".text_faq").slideToggle(),!1}),o("body").append('<div class="top">'),o("body").on("click",".top",function(){o("html, body").animate({scrollTop:0},"slow")}),o(window).scroll(function(){o(this).scrollTop()>o(this).height()?o(".top").addClass("active"):o(".top").removeClass("active")}),o("a[href='#callback'], a[href='#video_popup']").magnificPopup({mainClass:"my-mfp-zoom-in",removalDelay:300,type:"inline"}),o(".mfp_gallery").each(function(){o(this).magnificPopup({delegate:"a",mainClass:"mfp-zoom-in",type:"image",tLoading:"",gallery:{enabled:!0},removalDelay:300,callbacks:{beforeChange:function(){this.items[0].src=this.items[0].src+"?="+Math.random()},open:function(){o.magnificPopup.instance.next=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){o.magnificPopup.proto.next.call(e)},120)},o.magnificPopup.instance.prev=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){o.magnificPopup.proto.prev.call(e)},120)}},imageLoadComplete:function(){var e=this;setTimeout(function(){e.wrap.addClass("mfp-image-loaded")},16)}}})}),o(".carousel_clients").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}}]}),o(".carousel_documents").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:500,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:640,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:769,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1}}]}),o(".carousel_preview.slider-nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".carousel_services.slider-for",dots:!0,arrows:!0,centerMode:!1,focusOnSelect:!0,responsive:[{breakpoint:400,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}}]}),o(".carousel_services.slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,asNavFor:".carousel_preview.slider-nav"}),o('input[type="tel"]').mask("+7(999)999-99-99")});