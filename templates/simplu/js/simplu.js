(function($){

	$(document).ready(function(){
		

var boxesHeight;
var marketingHeight;
var rectBackground;
var middleBanner;
var tabsHeight;

  new WOW().init();

  $(window).on("scroll", function() {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
          // when scroll to bottom of the page
      }
  });
}); 



boxesHeight = function () {
    $('.second-box').css('min-height', $('.primer-box').height());
}
marketingHeight = function () {
    $('.marketingHeight').css('min-height', $('.marketing').height());
}
rectBackground = function () {
    $('.rectBackground').css('min-height', $('.containerHomepage').height());
}
middleBanner = function () {
    $('.middleBanner').css('min-height', $('.middle-text').height());
}
tabsHeight = function () {
    $('.tab-content').css('min-height', $('.nav-tabs').height());
}
$(window).resize(function () {
    marketingHeight();
    boxesHeight();
    rectBackground();
    middleBanner();
    tabsHeight();
});

    
    
    
    

    
})(jQuery);










