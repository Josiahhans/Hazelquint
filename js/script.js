$(document).ready(function () {

  var w = $(window).width();
  var brand = $(".navbar-brand").width();
  var size = (w-brand)/2;
  $(".nav-menu").css({
        'width' : size
  });
  $(".nav-menu2").css({
        'width' : size
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $(".navbar").css('top',"0");
    } else {
      $(".navbar").css('top',"-100px");
    }
    prevScrollpos = currentScrollPos;
  }


});
