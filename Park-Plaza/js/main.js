jQuery(function(i){"use strict";i(".toggle_menu").click(function(){return i(this).toggleClass("active"),i(".top_head").toggleClass("active"),i("body").toggleClass("deactive"),!1}),i(".btn_search").click(function(){return i(".search_head").toggleClass("active"),!1}),641<document.documentElement.clientWidth&&i(".carousel_projects").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1}),i(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),i(".slider-nav").slick({infinite:!1,slidesToShow:7,slidesToScroll:1,asNavFor:".slider-for",arrows:!0,dots:!1,focusOnSelect:!0,responsive:[{breakpoint:360,settings:{slidesToShow:2}},{breakpoint:460,settings:{slidesToShow:3}},{breakpoint:580,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:5}},{breakpoint:860,settings:{slidesToShow:6}}]});var t=i(".item_functional");t.first().addClass("active"),i(".item_functional .title_functional").click(function(){return i(this).parent().addClass("active"),i(this).parent().siblings().removeClass("active"),!1}),i(".item_faq .title_faq").click(function(){return i(this).parent().toggleClass("active"),i(this).next(".text_faq").slideToggle(),!1}),i(".tabs_users").on("click",".tab",function(){var t=i(".tabs_users .tab"),e=i(".content_users .item_users");return t.removeClass("active"),e.removeClass("active"),i(this).addClass("active"),e.eq(i(this).index()).addClass("active"),!1}),i(".tabs_documents").on("click",".tab",function(){var t=i(this).parent().parent().find(".tab"),e=i(this).parent().parent().find(".content_documents .item_content");return t.removeClass("active"),e.removeClass("active"),i(this).addClass("active"),e.eq(i(this).index()).addClass("active"),!1}),document.documentElement.clientWidth<721&&(i(".item_functional"),t.first().removeClass("active"),i(".item_functional .title_functional").click(function(){return i(this).toggleClass("active"),i(this).next(".text_functional").slideToggle(),!1})),i("img.svg").each(function(){var e=jQuery(this),i=e.attr("id"),s=e.attr("class"),t=e.attr("src");jQuery.get(t,function(t){t=jQuery(t).find("svg");void 0!==i&&(t=t.attr("id",i)),void 0!==s&&(t=t.attr("class",s+" replaced-svg")),t=t.removeAttr("xmlns:a"),e.replaceWith(t)},"xml")}),i(".mfp_gallery").each(function(){i(this).magnificPopup({delegate:".mfp",mainClass:"mfp-zoom-in",type:"image",tLoading:"",gallery:{enabled:!0},removalDelay:300,callbacks:{beforeChange:function(){this.items[0].src=this.items[0].src+"?="+Math.random()},open:function(){i.magnificPopup.instance.next=function(){var t=this;t.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){i.magnificPopup.proto.next.call(t)},120)},i.magnificPopup.instance.prev=function(){var t=this;t.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){i.magnificPopup.proto.prev.call(t)},120)}},imageLoadComplete:function(){var t=this;setTimeout(function(){t.wrap.addClass("mfp-image-loaded")},16)}}})}),i(".popup_close").click(function(){return i(this).parents(".message").fadeOut(),!1}),i(".popup_open_instructions").click(function(){return i(this).parent().find(".popup_instructions").fadeIn(),i("body").addClass("deactive"),!1}),i(document).keydown(function(t){27===t.keyCode&&(t.stopPropagation(),i(".popup_instructions").fadeOut())}),i(".popup_instructions").click(function(t){0==i(t.target).closest(".popup").length&&(i(this).fadeOut(),i("body").removeClass("deactive"))}),i(".popup_open_video").click(function(){return i(this).parent().find(".popup_video").fadeIn(),i("body").addClass("deactive"),!1}),i(document).keydown(function(t){27===t.keyCode&&(t.stopPropagation(),i(".popup_video").fadeOut())}),i(".popup_video").click(function(t){0==i(t.target).closest(".popup").length&&(i(this).fadeOut(),i("body").removeClass("deactive"))}),i('input[type="tel"]').mask("+ 9 (999) 999-99-99")});