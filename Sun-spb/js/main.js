jQuery(function(a){"use strict";var e,i,t,n;a(".toggle_menu").click(function(){return a(this).toggleClass("active"),a(".top_menu").toggleClass("active"),a(".contacts_head .phone").toggleClass("active"),a("body").toggleClass("deactive"),!1}),a(".link_like").click(function(){return a(this).toggleClass("active"),a.magnificPopup.open({items:{src:".popup_success",type:"inline"}}),!1}),a(".banner").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,autoplay:!0}),a(".carousel_news").slick({rows:2,dots:!1,arrows:!0,infinite:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:440,settings:{rows:1,slidesToShow:1,slidesToScroll:1}},{breakpoint:680,settings:{rows:1,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{rows:1,slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}}]}),a(".carousel_client").slick({rows:2,dots:!1,arrows:!0,infinite:!0,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:500,settings:{slidesToShow:2}},{breakpoint:680,settings:{slidesToShow:3}},{breakpoint:860,settings:{slidesToShow:4}},{breakpoint:1024,settings:{slidesToShow:5}}]}),a(".carousel_recommend").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:630,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:3}}]}),a(".link_scroll").click(function(e){e.preventDefault();var i=a(this).attr("href"),t=a(i).offset().top;a("body,html").animate({scrollTop:t-20},500)}),a(".link_size").click(function(){return a(this).toggleClass("active"),a(this).next(".image_size").slideToggle(),!1}),a(".wrap_widget .check_more").click(function(){return a(this).toggleClass("active"),a(this).parent().find(".check_hidden").slideToggle(),!1}),a(".dropdown_left").click(function(){return a(this).toggleClass("active"),a(this).find(".inner_left").slideToggle(),!1}),window.innerWidth<768&&(a(".dropdown").click(function(){return a(".inner_menu").slideToggle(),!1}),a(".dropdown_menu").click(function(){return a(".item_dropdown").slideToggle(),!1})),a(".min").click(function(){var e=a(this).parent().find("input"),i=parseInt(e.val())-1;return i=i<1?1:i,e.val(i),e.change(),!1}),a(".pls").click(function(){var e=a(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1}),a(".preview_image .item_preview").on("click",function(){var e=a(this).find("img").clone();a(".detail_image").empty().append(e)}),a(".wrap_color .item_color").on("click",function(){var e=a(this).find("img").clone().addClass("image_preview"),i=a(this).find("img").attr("data-color");a(".colors_product p span").text(i),a(".detail_image").empty().append(e)}),a(".wrap_size span").click(function(){a(this).siblings().removeClass("active"),a(this).addClass("active")}),a(".link_filter").click(function(){return a(this).toggleClass("active"),a(".widget_filter").slideToggle(),!1}),a("a[href='#table_size']").magnificPopup({mainClass:"my-mfp-zoom-in",removalDelay:300,type:"inline"}),a(".file_upload_1 input[type=file]").change(function(){var e=a(this).val().replace(/.*\\/,"");a("#filename1").val(e).addClass("active")}),a(".file_upload_2 input[type=file]").change(function(){var e=a(this).val().replace(/.*\\/,"");a("#filename2").val(e).addClass("active")}),a(".wrap_radio input").on("change",function(){var e=a(this).parent().parent().find(".select_file");"Да"==a(this).val()?e.show():e.hide()}),a(".tab_calculation .tab").click(function(){var e=a(".tab_calculation .tab"),i=a(".form_calculation .form .content_form");return e.removeClass("active"),i.removeClass("active"),a(this).addClass("active"),i.eq(a(this).index()).addClass("active"),!1}),(e=a("#scroll_colors")).children("ul").eq(0),i=e.parent(),e.sly({horizontal:1,itemNav:"basic",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:i.find(".scrollbar"),scrollBy:1,pagesBar:i.find(".pages"),activatePageOn:"click",speed:300,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1,prev:i.find(".prev"),next:i.find(".next"),prevPage:i.find(".prevPage"),nextPage:i.find(".nextPage")}),(t=a("#scroll_preview")).children("ul").eq(0),n=t.parent(),t.sly({itemNav:"basic",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:n.find(".scrollbar"),scrollBy:1,pagesBar:n.find(".pages"),activatePageOn:"click",speed:300,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1,prev:n.find(".prev"),next:n.find(".next"),prevPage:n.find(".prevPage"),nextPage:n.find(".nextPage")}),a("img.svg").each(function(){var t=jQuery(this),a=t.attr("id"),n=t.attr("class"),e=t.attr("src");jQuery.get(e,function(e){var i=jQuery(e).find("svg");void 0!==a&&(i=i.attr("id",a)),void 0!==n&&(i=i.attr("class",n+" replaced-svg")),i=i.removeAttr("xmlns:a"),t.replaceWith(i)},"xml")}),a(".mfp-gallery").each(function(){a(this).magnificPopup({delegate:".mfp",mainClass:"mfp-zoom-in",type:"image",tLoading:"",gallery:{enabled:!0},removalDelay:300,callbacks:{beforeChange:function(){this.items[0].src=this.items[0].src+"?="+Math.random()},open:function(){a.magnificPopup.instance.next=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){a.magnificPopup.proto.next.call(e)},120)},a.magnificPopup.instance.prev=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){a.magnificPopup.proto.prev.call(e)},120)}},imageLoadComplete:function(){var e=this;setTimeout(function(){e.wrap.addClass("mfp-image-loaded")},16)}}})}),a(".form").each(function(){var e=a(this),i=e.find(".btn_submit");e.find(".field").addClass("empty_field"),setInterval(function(){if(e.find(".field").each(function(){""!=a(this).val()?a(this).removeClass("empty_field").addClass("full_field"):a(this).addClass("empty_field").removeClass("full_field")}),0<e.find(".empty_field").size()){if(i.hasClass("disabled"))return!1;i.addClass("disabled")}else i.removeClass("disabled")},500),i.click(function(){if(a(this).hasClass("disabled"))return e.find(".empty_field").css({"border-color":"#d8512d"}),setTimeout(function(){e.find(".empty_field").removeAttr("style")},500),!1;e.submit()})});var l=a("#form_volunteer").children(".tab"),s=a(".steps_form").children(".step");a(l[0]).show();var r=0;function o(e){a(l).hide(),a(l[e]).show(),a(s).removeClass("active"),a(s[e]).addClass("active"),a(s[e-1]).addClass("check_active")}a("a.next").click(function(){event.preventDefault(),r==l.length-2&&(a(this).hide(),a("#form_volunteer button").show()),a("a.back").show(),o(++r)}),a("a.back").click(function(){event.preventDefault(),1==r&&a(this).hide(),a("#form_volunteer button").hide(),a("a.next").show(),o(--r)}),a("#form_volunteer button").click(function(){return a(".wrap_order").hide(),a("h1").hide(),a(".breadrumbs").hide(),a(".success_volunteer").show(),!1}),a(".favorites").on("click",function(e){return a(this).toggleClass("active").text("Убрать из избранного"),!1}),a('input[type="tel"]').mask("+ 7 (999) 999-99-99"),a("#filter_range").slider({min:0,max:5e3,values:[0,2e3],range:!0,stop:function(e,i){a("input#priceMin").val(a("#filter_range").slider("values",0)),a("input#priceMax").val(a("#filter_range").slider("values",1)),a(".price_range_min.value").html(a("#filter_range").slider("values",0)),a(".price_range_max.value").html(a("#filter_range").slider("values",1))},slide:function(e,i){a("input#priceMin").val(a("#filter_range").slider("values",0)),a("input#priceMax").val(a("#filter_range").slider("values",1)),a(".price_range_min.value").html(a("#filter_range").slider("values",0)),a(".price_range_max.value").html(a("#filter_range").slider("values",1))}}),a("input#priceMin").on("change",function(){var e=a("input#priceMin").val(),i=a("input#priceMax").val();parseInt(e)>parseInt(i)&&(e=i,a("input#priceMin").val(e),a(".price_range_min.value").html(e)),a("#filter_range").slider("values",0,e),a(".price_range_min.value").html(e)}),a("input#priceMax").on("change",function(){var e=a("input#priceMin").val(),i=a("input#priceMax").val();2500<i&&(i=2500,a("input#priceMax").val(35e3)),parseInt(e)>parseInt(i)&&(i=e,a("input#priceMax").val(i),a(".price_range_max.value").html(i)),a("#filter_range").slider("values",1,i),a(".price_range_max.value").html(i)}),a(".ui-slider-handle:eq(0)").append('<span class="price_range_min value">'+a("#filter_range").slider("values",0)+"</span>"),a(".ui-slider-handle:eq(1)").append('<span class="price_range_max value">'+a("#filter_range").slider("values",1)+"</span>"),a("#form_order button").click(function(){var e=a("#form_order").serialize();return a.ajax({url:"action_4.php",type:"post",dataType:"json",data:e,success:function(e){a.magnificPopup.open({items:{src:".success_popup",type:"inline"}}),a(".message_popup").html(e.result),a("#form_order input").val(""),a("#form_order textarea").val(""),a("#form_order input:radio").removeAttr("checked")}}),!1})}),function(){var l=document.querySelector(".order_list"),s=null;function e(){if(null==s){for(var e=getComputedStyle(l,""),i=0;i<e.length;i++)0==e[i].indexOf("overflow")&&(e[i],e.getPropertyValue(e[i]));s=document.createElement("div"),l.insertBefore(s,l.firstChild);var t=l.childNodes.length;for(i=1;i<t;i++)s.appendChild(l.childNodes[1]);l.style.height=s.getBoundingClientRect().height+"px"}var a=l.getBoundingClientRect(),n=Math.round(a.top+s.getBoundingClientRect().height-document.querySelector(".form_order").getBoundingClientRect().bottom);+a.top<=0?+a.top<=n?(s.className="stop",s.style.top=-n+"px"):(s.className="sticky",s.style.top="0px"):(s.className="",s.style.top=""),window.addEventListener("resize",function(){l.children[0].style.width=getComputedStyle(l,"").width},!1)}window.addEventListener("scroll",e,!1),document.body.addEventListener("scroll",e,!1)}();