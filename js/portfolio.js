$(function(){
  $("#banner").bxSlider({
    mode:'horizontal',
    auto:true,
    controls:true,
    infiniteLoop:true,
    touchEnabled:true, //슬라이더의 터치스와이프 전환 허용
    swipeThreshold:50, //터치스와이프시 초과해야하는 픽셀 수
    nextSelector:'.right',
    prevSelector:'.left',
    nextText:'<img src="images/controls_right.png" heihgt="25" width="25" />',
    prevText:'<img src="images/controls_left.png" heihgt="25" width="25" />',
  });


  var menu = $('nav');
  var scrollOffset = $('section').offset();
  var sectionFirst = $('section:first-child').offset();
  var animateMenu = $('nav').height();

  $(window).scroll(function(){
    if($(this).scrollTop()>scrollOffset.top){
      menu.addClass('fix');

    }
    else{
      menu.removeClass('fix');
      //menu.hide().animate({'height':'0'}).removeClass('fix');
    }

  });

  var search = $('#menu>li:last-child');
  var searchBar =$('#menu>li:last-child>input');

  search.click(function(){
    searchBar.toggle();
  });

  var sMenu = $('header>nav>#menu_top>li:last-child');
  var sMenuDown = $('header>nav>#buger_dropdown');
  var sMenuDownClose = $('header>nav>#buger_dropdown>li:last-child');

  sMenu.click(function(){
    sMenuDown.slideDown();
  });
  sMenuDownClose.click(function(){
    sMenuDown.slideUp();
  });

/*
  $(window).scroll(function(){
      if($(this).scrollTop() > scrollOffset.top){
        menu.addClass('fix');
      }
      else{
        menu.removeClass('fix');
      }
  })  ;

/*

    });
*/


});
