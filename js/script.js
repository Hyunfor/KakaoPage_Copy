function TopBar__init(){
  // 탑바
 $('.top-bar .menu-box-1 > ul > li').mouseenter(function(){
   var $height = $(this).find(' > ul').height();
   
   $('.top-bar .menu-box-1 > .bg').addClass('active');
   $('.top-bar .menu-box-1 > .bg').css('height', $height + 'px');
 });
 
 $('.top-bar .menu-box-1 > ul > li').mouseleave(function(){
   var $height = $(this).find(' > ul').height();
   
   $('.top-bar .menu-box-1 > .bg').removeClass('active');
   $('.top-bar .menu-box-1 > .bg').css('height', '0px');
 });
 
 // 모바일탑바
 $('.mobile-top-bar .btn-toggle-menu-box-1').click(function(){

   var $html = $('html'); 
   var has = $html.hasClass('btn-toggle-menu-box-1-actived');
   
   if (has){
     $html.removeClass('btn-toggle-menu-box-1-actived');
   }
   else {
     $html.addClass('btn-toggle-menu-box-1-actived');
   }
   
 });
}

TopBar__init();