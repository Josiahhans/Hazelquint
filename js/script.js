$(document).ready(function () {

  var scroll1 = window.pageYOffset;
  window.onscroll = function(){
    var scroll2 = window.pageYOffset;
    if(scroll1>scroll2){
      document.querySelector('.navbar').style.top = "0";
    }else{
      document.querySelector('.navbar').style.top = "-100px";
    }
    scroll1 = scroll2;
  }

  $(function(){;
    $('.product').hover(
    function() {

      source = $(this).find('img').attr('src');
      sliced = source.slice(0,-4);
      alt = sliced + "-2.png";
      $(this).find('img').attr('src', alt);

    }, function() {
      source = $(this).find('img').attr('src');
      sliced = source.slice(0,-6);
      alt = sliced + ".png";

      $(this).find('img').attr('src', alt);
      }
    );
  })




});
