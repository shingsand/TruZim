$(document).ready(function(){
$(function() {
  var pull    = $('#menu');
    menu    = $('nav ul li a');
    menuHeight  = menu.height();
 
  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(200);

  });
});

$(window).resize(function(){
  var w = $(window).width();
  if(w > 540 && menu.is(':hidden')) {
    menu.removeAttr('style');
	
  }
}); 
})
 

 

 
 


 
 
 
