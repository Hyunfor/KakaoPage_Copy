console.clear();

function TopBar_init(){
  $('.top-bar > .con > .menu-box-1 > ul > li').mouseenter(function(){
    let height = $(this).find(' > ul').height();

    $('.top-bar > .con > .menu-box-1 > .bg').css('height', height);  
  });

  $('.top-bar > .con > .menu-box-1 > ul > li').mouseleave(function(){
    $('.top-bar > .con > .menu-box-1 > .bg').css('height', 0);  
  });

}

TopBar_init();