/* eslint-disable linebreak-style */

//function to open menu mobile
$(document).ready(function(){
    $(".c-gnavicon").click(function(){
        $(".c-gnavmobile").toggleClass("u-display--block");
        $(".c-gnavicon__open").toggleClass("u-display--block");
        $(".c-gnavicon__close").toggleClass("u-display--none");
        $(".body").toggleClass("u-overflow");
    });

    $(".c-gnavmobile").find("li").click(function(){
        $(".c-gnavmobile").toggleClass("u-display--block");
        $(".c-gnavicon__open").toggleClass("u-display--block");
        $(".c-gnavicon__close").toggleClass("u-display--none");
    });
});

//animation when scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 5) {
        $(".c-droplayer").addClass("u-top2");
        $(".l-leaves__first").addClass("u-trans1");
        $(".l-leaves__second").addClass("u-trans2");
    } else {
        $(".c-droplayer").removeClass("u-top2");
        $(".l-leaves__first").removeClass("u-trans1");
        $(".l-leaves__second").removeClass("u-trans2");
    }
});

//button more in p-top1
$(".p-top1__btnmore").click(function(){
    $(this).parent().parent().parent().find(".p-top1__pointover").css("display","none");
    $(this).parent().next().css("display","flex");
});


//display content 
$(".p-top3__arrow--mb").click(function(){
    var parent = $(this).parent().find(".p-top3__open");
    if(parent.is(":visible")){
        parent.slideUp();
        parent.siblings(".p-top3__arrow").find(".c-arrowdown").show();
        parent.siblings(".p-top3__arrow").find(".c-arrowup").hide();
    } else {
        parent.slideDown();
        parent.siblings(".p-top3__arrow").find(".c-arrowdown").hide();
        parent.siblings(".p-top3__arrow").find(".c-arrowup").show();
    }
    
});