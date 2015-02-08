$(document).ready(function(){  
   $("#loop").on('click', function() {
      $("#prod1").fadeIn();
      $("#prod2").fadeOut();
      $("#prod3").fadeOut();
      $("#prod4").fadeOut();
   });

   $("#stream").on('click', function() {
      $("#prod1").fadeOut();
      $("#prod2").fadeIn();
      $("#prod3").fadeOut();
      $("#prod4").fadeOut();
   });

   $("#receiver").on('click', function() {
      $("#prod1").fadeOut();
      $("#prod2").fadeOut();
      $("#prod3").fadeIn();
      $("#prod4").fadeOut();
   });

   $("#satellite").on('click', function() {
      $("#prod1").fadeOut();
      $("#prod2").fadeOut();
      $("#prod3").fadeOut();
      $("#prod4").fadeIn();
   });
});