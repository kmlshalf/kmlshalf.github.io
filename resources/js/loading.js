
$(window).on('load', function(){
  $( "#loader" ).fadeOut(500, function() {
      // fadeOut complete. hide the loading div
      $( "#loader" ).hide(); //makes page more lightweight 
  });
});