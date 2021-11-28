$( document ).ready(function() {
    var title = document.getElementsByTagName("title")[0].innerHTML;

    if (title !== "musaa sami's portfolio") {
        $(".nav-left a h3").css("display", "block");
        $(".nav-left a h3").css("opacity", "1");
        $(".nav-right ul li a").css("color", "#12303d");
    } 
});

$(function(){
  $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled

          if(scroll > 25){
              $('.top-nav').addClass('sticky');
          } else {
              $('.top-nav').removeClass('sticky');
          }

    });
});

// MOBILE MENU

$('.menu-icon').click(function(){
    $('.mob-menu').addClass('active');
});

$('.x-icon').click(function(){
    $('.mob-menu').removeClass('active');
});
$('.mob-menu a').click(function(){
    $('.mob-menu').removeClass('active');
});

// MENU BUTTONS ACTIVE STATES

var workBtn = $('a[href="#work"]');

var aboutBtn = $('a[href="#about"]');

var contactBtn = $('a[href="#contact"]');

$('.nav-right .menu-btn').click(function(){
    console.log($(window).scrollTop());
    $('.nav-right .menu-btn').removeClass('bold');
    $('.nav-right .menu-btn').removeClass('underline');
    $(this).addClass('bold');
    $(this).addClass('underline');
});

$('.mob-menu .menu-btn').click(function(){
  $('.mob-menu .menu-btn').removeClass('bold');
  $('.mob-menu .menu-btn').removeClass('underline');
  $(this).addClass('bold');
  $(this).addClass('underline');
});


// HEADER IMAGE MODE CHANGE ON HOVER

$('.header-bg .box3').on({
    mouseenter: function () {
        //stuff to do on mouse enter
        console.log('hover');
        $(this).closest('.header-bg').addClass('light');
        $('.nav-right ul li a').addClass('hovered');
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        console.log('hover');
        $(this).closest('.header-bg').removeClass('light');
        $('.nav-right ul li a').removeClass('hovered');
    }

});








































//
