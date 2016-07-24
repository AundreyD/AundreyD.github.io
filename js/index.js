$('.card').matchHeight();
$(function(){
  
  $('#nav-all').addClass('active');
  
  $('ul.nav.nav-pills li a').click(function() {           
    $(this).parent().addClass('active').siblings().removeClass('active');  
});
   
  
   $('#nav-all').click(function(){
     $('.col-md-4').show();
   });
  
   $('#nav-css').click(function(){
     $('.col-md-4').hide();
     $('.cssProject').show();
   });
  
   $('#nav-js').click(function(){
     $('.col-md-4').hide();
     $('.jsProject').show();
   })
  

  
 
  
});
//cssProject
//javascriptProject