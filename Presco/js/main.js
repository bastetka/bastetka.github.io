jQuery(function(s){"use strict";s(".toggle_menu").click(function(){return s(this).toggleClass("active"),s(".menu").toggleClass("active"),s("body").toggleClass("deactive"),!1}),s(".carousel_partners").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1150,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:780,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:400,settings:{slidesToShow:1,slidesToScroll:1}}]}),s(function(){s(".form").each(function(){var e=s(this),i=e.find(".btn_submit");e.find(".field").addClass("empty_field"),setInterval(function(){if(e.find(".field").each(function(){""!=s(this).val()?(s(this).removeClass("empty_field").addClass("full_field"),s(this).parent().addClass("res_field")):(s(this).addClass("empty_field").removeClass("full_field"),s(this).parent().removeClass("res_field"))}),0<e.find(".empty_field").size()){if(i.hasClass("disabled"))return!1;i.addClass("disabled")}else i.removeClass("disabled")},500),i.click(function(){return s(this).hasClass("disabled")?(e.find(".empty_field").css({"border-color":"#d8512d"}),setTimeout(function(){e.find(".empty_field").removeAttr("style")},500),!1):void e.submit()})})});var i=s("#form_calculation .wpar_calculation").children(".tab"),t=s(".steps_form").children(".step");s(i[0]).show();var e=0;function a(e){s(i).hide(),s(i[e]).show(),s(t).removeClass("active"),s(t[e]).addClass("active"),s(t[e]).find("span").addClass("active"),s(t[e-1]).find("span").addClass("check_active")}s("a.next").click(function(){event.preventDefault(),e==i.length-2&&(s(this).hide(),s("#form_calculation button").show()),s("a.back").show(),a(++e)}),s("a.back").click(function(){event.preventDefault(),1==e&&s(this).hide(),s("#form_calculation button").hide(),s("a.next").show(),a(--e)}),s("a[href='#order']").magnificPopup({mainClass:"my-mfp-zoom-in",removalDelay:300,type:"inline"}),s(".mfp_gallery").each(function(){s(this).magnificPopup({delegate:"a",mainClass:"mfp-zoom-in",type:"image",tLoading:"",gallery:{enabled:!0},removalDelay:300,callbacks:{beforeChange:function(){this.items[0].src=this.items[0].src+"?="+Math.random()},open:function(){s.magnificPopup.instance.next=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){s.magnificPopup.proto.next.call(e)},120)},s.magnificPopup.instance.prev=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){s.magnificPopup.proto.prev.call(e)},120)}},imageLoadComplete:function(){var e=this;setTimeout(function(){e.wrap.addClass("mfp-image-loaded")},16)}}})}),s("img.svg").each(function(){var i=jQuery(this),s=i.attr("id"),t=i.attr("class"),e=i.attr("src");jQuery.get(e,function(e){e=jQuery(e).find("svg");void 0!==s&&(e=e.attr("id",s)),void 0!==t&&(e=e.attr("class",t+" replaced-svg")),e=e.removeAttr("xmlns:a"),i.replaceWith(e)},"xml")}),s(".file_upload input[type=file]").change(function(){var e=s(this).val().replace(/.*\\/,"");s("#filename").val(e).addClass("active")})});