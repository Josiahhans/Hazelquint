
$(document).ready(function () {
  //INI BUAT HAPUS PRELOADER SETELAH 2,9detik
  $('html').css('overflow','hidden');

  setTimeout(function(){
    $('.preloader').remove();
    $('html').css('overflow','scroll');
  }, 2900);

  //counter height
  $(".counter").height($(".counter-count").height());


  var currentScrollPos = window.pageYOffset;
  var prevScrollpos = window.pageYOffset;
  if(currentScrollPos==0){
    $(".nav-up").css('opacity',"0");
  }

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $(".nav-up").css('opacity',"0.4");
    } else {
      $(".nav-up").css('opacity',"0.05");
    }
    if(currentScrollPos==0){
      $(".nav-up").css('opacity',"0");
    }
    prevScrollpos = currentScrollPos;
  }


var navcounter=0;
$(".navbar-button").click(function(){
  if(navcounter%2==0){
    $(".navbar-container").animate({
      right: '-50%',
      top: '-50%',
      opacity: '1'
    }, "slow");
    $(".navbar-button-img").attr("src","img/back.png");
    $(".nav-up").css('opacity',"0");
    navcounter++;
    $('html').css('overflow','hidden');
  }else{
    $(".navbar-container").animate({
      right: '-200%',
      top: '-200%',
      opacity: '0'
    }, "slow");
    $(".navbar-button-img").attr("src","img/hamburger-white.png");
    $('html').css('overflow','scroll');
    $(".nav-up").css('opacity',"0.05");
    navcounter++;
  }
});

$(".navigation").click(function() {
    $(".navbar-container").animate({
      right: '-200%',
      top: '-200%',
      opacity: '0'
    }, "slow");
    $(".navbar-button-img").attr("src","img/hamburger-white.png");
    $('html').css('overflow','scroll');
    navcounter++;
});


  $(window).resize(function() {
      var h = $(window).height();
      var w = $(window).width();
      if(w>h){
        $(".hero-back").css({
              'background-size' : '100% auto'
        });
      }else{
        $(".hero-back").css({
              'background-size' : 'auto 100%'
        });
      }
  });


      var counted = 0;

  $(window).scroll(function() {
          var h = $(window).height();
          var w = $(window).width();
          var scrollPos = $(this).scrollTop();

          //hero1
          var hero1h = $(".hero-back").height();
          var hero1w = $(".hero-back").width();
          var hero1section = $('.hero-back').offset().top;
          var hero1zoom = 1;

          //gambar
          if(scrollPos>0){
            $(".hero").css({
                  'right' : (60+ scrollPos/10) + '%'
            });
            hero1zoom=scrollPos;
            if(w>h){
              $(".hero-back").css({
                    'background-size' : 100+scrollPos*100/hero1w+'% auto'
              });
            }else{
              $(".hero-back").css({
                    'background-size' : 'auto '+(100+scrollPos*100/hero1h)+'%'
              });
            }
          }

          //opacity
          $('.hero-back').css({
            opacity: function() {
              var elementHeight = $('.hero-back').height(),
                  opacity = ((1-($(window).scrollTop()-0.5*h) / (elementHeight-0.8*h))) ;
              return opacity;
            }
          });




        //hero3
        var hero3h = $(".hero-back3").height();
        var hero3w = $(".hero-back3").width();
        var hero3section = $('.hero-back3').offset().top;
        var hero3size= 2.5*h;

        if(scrollPos<hero3section){
          $(".hero-back3").css({
                  'opacity' : ((scrollPos-(hero3section-0.8*h))/(0.6*h))
          });
        }else{
          $(".hero-back3").css({
                  'opacity' : (((hero3section+2*h)-scrollPos)/(0.5*h))
          });
        }


        if(scrollPos>hero3section){
          if(scrollPos<(hero3section+hero3size-h)){

            if(w>h){
              $(".hero-back3").css({
                    'background-size' : 200-(scrollPos-hero3section)*100/hero3w+'% auto'
              });
            }else{
              $(".hero-back3").css({
                    'background-size' : 'auto '+(200-(scrollPos-hero3section)*100/hero3h)+'%'
              });
            }
          }

          $(".figure-motor").css({
                'height' : (10+ (scrollPos-hero3section)/20) + '%',
                'left' : (50-($(".figure-motor").width()*100)/(2*w)) +'%',
                'top' : ((scrollPos-hero3section)*100/hero3size) +'100%',
                'opacity' : ((scrollPos-hero3section)/5)-25 + '%'
          });
          $(".hero3-title-left").css({
            'right' : (50+(scrollPos-hero3section)/20) + '%'
          });

          $(".hero3-title-right").css({
          'left' : (50+(scrollPos-hero3section)/20) + '%'
          });
        }else{
          $(".hero3-title-left").css({
            'right' : '50%'
          });

          $(".hero3-title-right").css({
            'left' : '50%'
          });
        }

        //hero4
        var hero4h = $(".hero-back4").height();
        var hero4w = $(".hero-back4").width();
        var hero4section = $('.hero-back4').offset().top;
        var hero4size= 2*h;


        if(scrollPos>hero4section){
          if(counted==0){
            $('.counter-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            counted=1;
          }
          $(".open").css({
            'opacity' : (1-((scrollPos-hero4section)*6/hero4size))
          });
          $(".open2").css({
            'opacity' : (1-((scrollPos-hero4section)*3/hero4size))
          });

          if(scrollPos<(hero4section+hero4size-h)){
            $(".hero4-text").css({
              'top' : (((scrollPos-hero4section)*100/hero4size)+((h*50)/hero4h)-(($(".hero4-text").height()*25)/h)) + '%'
            });
          }
        }else{
          $(".open").css({
            'opacity' : '1'
          });
        }

        if(scrollPos<hero4section){
          $(".hero-back4").css({
                  'opacity' : ((scrollPos-(hero4section-0.8*h))/(0.6*h))
          });
        }else{
          $(".hero-back4").css({
                  'opacity' : (((hero4section+1.5*h)-scrollPos)/(0.5*h))
          });
        }

        //hero2
        var hero2h = $(".hero-back2").height();
        var hero2w = $(".hero-back2").width();
        var hero2section = $('.hero-back2').offset().top;
        var hero2size= 5*h;

        if(scrollPos>hero2section){
          $(".landscape-1").css({
            'left' : (0 + (scrollPos-hero2section)*400/hero2size) + '%'
          });
          $(".landscape-2").css({
            'left' : (-100 + (scrollPos-hero2section)*400/hero2size) + '%'
          });
          $(".landscape-3").css({
            'left' : (-200 + (scrollPos-hero2section)*400/hero2size) + '%'
          });
          if(((-300 + (scrollPos-hero2section)*400/hero2size))<0){
            $(".landscape-4").css({
              'left' : (-300 + (scrollPos-hero2section)*400/hero2size) + '%'
            });
          }else{
            $(".landscape-4").css({
              'left' : '0%'
            });
          }
        }else{
          $(".landscape-1").css({
            'left' : '0%'
          });
          $(".landscape-2").css({
            'left' : '-100%'
          });
        }

        if(scrollPos<hero2section){
          $(".hero-back2").css({
                  'opacity' : ((scrollPos-(hero2section-0.8*h))/(0.6*h))
          });
        }else{
          $(".hero-back2").css({
                  'opacity' : (((hero2section+4.5*h)-scrollPos)/(0.5*h))
          });
        }

  });


});
