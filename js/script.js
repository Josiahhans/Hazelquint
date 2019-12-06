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

  $("#submit").click(function(){
    if($("#email").val()==""){
        alert("Email must be Filled out");
        return false;
    }
    if($("#password").val()==""){
        alert("Password must be Filled out");
        return false;
    }
    if($("#address").val()==""){
        alert("Address must be Filled out");
        return false;
    }
    if($("#city").val()==""){
        alert("City must be Filled out");
        return false;
    }
    if($("#state").val()==""){
        alert("State must be Filled out");
        return false;
    }
    if($("#zip").val()==""){
        alert("Zip must be Filled out");
        return false;
    }
  });

  $("#submitlogin").click(function(){
    if($("#email").val()==""){
        alert("Email must be Filled out");
        return false;
    }
    if($("#password").val()==""){
        alert("Password must be Filled out");
        return false;
    }
    if($($("#email").val()=="josiah.jhs@gmail.com" && "#password").val()!="hahaha"){
        alert("Email and Password is not match");
        return false;
    }
  });

});
