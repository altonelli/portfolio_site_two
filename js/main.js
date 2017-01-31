$(document).ready(function(){
  console.log("Want to see more of my code? Check out my Git Hub account: https://github.com/altonelli");
  var viewHeight = window.innerHeight - $(".navbar").height();
  var padding = (viewHeight - $(".intro-text").height()) / 2;


  $('.flip').click(function(e){
    if(!$(e.target).hasClass('icon')){
      $(this).find('.panel').toggleClass('flipped');
    }
  });

  $(".scrollableLink").click(function(e){
    var target = $(this.getAttribute('href'));
    console.log(target);

    if (target.selector == "#"){
      console.log("hitting #");
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: "0px"
      }, 1000);
    }
    if( target.length ) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });





});
