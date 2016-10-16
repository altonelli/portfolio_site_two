$(document).ready(function(){
  console.log("Want to see more of my code? Check out my Git Hub account: https://github.com/altonelli");
  var viewHeight = window.innerHeight - $(".navbar").height();
  var padding = (viewHeight - $(".intro-text").height()) / 2;


  $('.flip').click(function(){
    console.log("clicked");
      $(this).find('.panel').toggleClass('flipped');
  });





});
