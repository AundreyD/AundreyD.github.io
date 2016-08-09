$('.card').matchHeight();
$(function(){

  $('body').scrollspy({ target: '#pillz' });  $('#nav-all').addClass('active');
  
  $('ul.nav.nav-pills li a').click(function() {           
    $(this).parent().addClass('active').siblings().removeClass('active');  
});
   
  
   $('#nav-all').addClass('active');
  
  $('ul.nav.nav-pills li a').click(function() {           
    $(this).parent().addClass('active').siblings().removeClass('active');  
});
   
  
   $('#nav-all').click(function(event){
      event.preventDefault();
     $('.col-md-4').fadeOut("slow");
     $('.col-md-4').fadeIn("slow");
   });
  
   $('#nav-css').click(function(event){
      event.preventDefault();
     $('.col-md-4').fadeOut("fast");
     $('.cssProject').fadeIn("slow");
   });
  
   $('#nav-js').click(function(event){
      event.preventDefault();
     $('.col-md-4').fadeOut("fast");
     $('.jsProject').fadeIn("slow");
   });
  
  
  var anchor = $('html, body');
  $('a').click(function(){
    $(anchor).animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});
  
  
});