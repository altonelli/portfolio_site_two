$(document).ready(function(){
  // console.log("ready!");
  var viewHeight = window.innerHeight - $(".navbar").height();
  var padding = (viewHeight - $(".intro-text").height()) / 2;

  console.log(viewHeight);
  console.log(padding);

  $('.flip').click(function(){
      $(this).find('.panel').addClass('flipped').mouseleave(function(){
          $(this).removeClass('flipped');
      });
      return false;
  });



});
