
$(document).ready(function () {

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
              console.log("w full");
            }else{
              $(".hero-back").css({
                    'background-size' : 'auto '+(100+scrollPos*100/hero1h)+'%'
              });
              console.log("h full");
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



        //bwh
        var section = $('.hero-back2').offset().top;
        if(scrollPos>section && (scrollPos-section)<3*h){
          $(".figure-1").css({
                'top' : ((scrollPos-section)/20) + '%',
                'left' : "-"+((scrollPos-section)/40) + '%'
          });
          $(".figure-2").css({
                'top' : ((scrollPos-section)/40) + '%',
                'right' : ((scrollPos-section)/40) + '%'
          });
          $(".figure-3").css({
                'top' : ((scrollPos-section)/60) + '%'
          });
          $(".figure-4").css({
                'top' : ((scrollPos-section)/20) + '%',
                'left' : ((scrollPos-section)/40) + '%'
          });

        }

        //hero3
        var hero3h = $(".hero-back3").height();
        var hero3w = $(".hero-back3").width();
        var hero3section = $('.hero-back3').offset().top;
        var hero3size= 2.5*h;
        hero3x = 1;
        hero3y = 1;


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
          $(".figure-motor").css({
                'height' : (10+ (scrollPos-hero3section)/20) + '%',
                'left' : (50-($(".figure-motor").width()*100)/(2*w)) +'%',
                'top' : ((scrollPos-hero3section)*100/hero3size) +'100%',
                'opacity' : ((scrollPos-hero3section)/5)-25 + '%'
          });
          console.log(($(".figure-motor").width()*100)/(2*w));
          $(".hero3-title-left").css({
            'right' : (50+(scrollPos-hero3section)/20) + '%',
            'transform' : 'rotateY('+(scrollPos-hero3section)*90/h+'deg)'
          });

          $(".hero3-title-right").css({
          'left' : (50+(scrollPos-hero3section)/20) + '%',
          'transform' : 'rotateY(-'+(scrollPos-hero3section)*90/h+'deg)'
          });


        }else{
          $(".hero3-title-left").css({
            'right' : '50%'
          });

          $(".hero3-title-right").css({
          'left' : '50%'
          });



        }

  });


});
