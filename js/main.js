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


  $(".navbar-toggle").click(function(e){
    $('.navbar-collapse').find('.background-blur').toggleClass('.blur');
  });

  $(window).scroll(function(e){
    var top = $(window).scrollTop();
    var $headers = $('header');

    var headerIdx;
    $.each($headers, function(idx,item){
      if($(item).position().top <= top + 50){
        headerIdx = idx;
      }
    });
    var $currentId = $headers[headerIdx].id;
    var color = $("#"+$currentId).css('background-color');
    var len = color.length + 1;
    var rgbaColor = color.substring(0,3) + "a" + color.substring(3,len-2) + ", 0.9)";
    $('nav').css('background-color',color);
    // if($(window).width() <= 768){
    //   console.log("yes");
    //   $('.navbar-header').css('background-color',color);
    //   $('.navbar-collapse').css('background-color',rgbaColor);
    // } else {
    //   $('nav').css('background-color',color);
    // }
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
