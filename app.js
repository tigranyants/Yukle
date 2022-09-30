
// !! PARALLAX

$(document).ready(function(){
        $('section[data-type="background"]').each(function(){
            var bgobj = $(this); 
            $(window).scroll(function(){
                var yPos = -(window.scrollY / bgobj.data("speed"));
                var coords = "center " + yPos + "px";
                bgobj.css({ backgroundPosition: coords });
            })
        })
      })

    //   !!


    // !! SCROLL TO TOP BTN
  
    $(window).scroll(function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          $(".scrollTop__btn").css({opacity: 1})  
          } else {
            $(".scrollTop__btn").css({opacity: 0}) 
          }
    })

   $(".scrollTop__btn").click(function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   })
   
    // !!

// !! BURGER


    $("#icon").click(function () {
      $(".header__nav").toggleClass("active");
      $("#icon").toggleClass("active");
      $("#body").toggleClass("active");
    });

     // !!



     //  !!Adaptive box
if($(window).width() <= 992){
  var height = $(".preferences__row").height();
   var height1 = height + 200;
  $("#parallax2").css("height", height1);

}

  $(window).resize(function(){
    if($(window).width() <= 992){
      $(".nav__link").removeClass("link__contact");
      $(".nav__app__link").removeClass("link__app")
    }
  })


  $(".link").click(function(){
    $(".header__nav").removeClass("active");
    $("#icon").removeClass("active");
    $("#body").removeClass("active");
  })


  var height2 = height + 500;
  if($(window).width() <= 500){
    $("#parallax2").css("height", height2);
  }
  
  // !!