var main = function() {
  $('#top-text').keyup(function(){
  	var topText = $(this).val();
    $('.top-caption').text(topText);
  });
  
  $('#bottom-text').keyup(function(){
  	var bottomText = $(this).val();
    $('.bottom-caption').text(bottomText);
  });
  
  $('#image-url').keyup(function(){
  	var urlText = $(this).val();
    $('div.meme > img').attr('src', 'urlText');
  });
  
}
 
$(document).ready(main);