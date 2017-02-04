$(document).ready(function(){
  console.log("Want to see more of my code? Check out my Git Hub account: https://github.com/altonelli");
  var viewHeight = window.innerHeight - $(".navbar").height();
  var padding = (viewHeight - $(".intro-text").height()) / 2;


  $('.flip').click(function(e){
    if(!$(e.target).hasClass('icon')){
      $(this).find('.panel').toggleClass('flipped');
    }
  });

  var hobbyFadeIn = function (e){
    $(this).find('.hobbie-img').addClass('on-hover');
    $(this).find('.overlay').addClass('overlay-hover');
  };
  var hobbyFadeOut = function (e){
    $(this).find('.hobbie-img').removeClass('on-hover');
    $(this).find('.overlay').removeClass('overlay-hover');
  };

  $('.hobbie-content').hover(hobbyFadeIn,hobbyFadeOut);
  $('.hobbie-content').focusin(hobbyFadeIn);
  $('.hobbie-content').focusout(hobbyFadeIn);


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
