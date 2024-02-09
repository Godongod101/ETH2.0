;(function ($) {
  $(document).ready(function () {
      
       // Header sticky
      // $(".site-header").sticky();
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();
          if (scroll < 2) {
              $("#header_area").removeClass("sticky");
          } else {
              $("#header_area").addClass("sticky");
          }
      });// Header sticky
      // $(".site-header").sticky();
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();
          if (scroll < 2) {
              $("#header_area_mobile").removeClass("stickys");
          } else {
              $("#header_area_mobile").addClass("stickys");
          }
      });

      // active menu class
      $("button.navbar-toggler").click(function() {
          $("#header_area").toggleClass("mobile_menu");
      });


      // $(".map-marpker-icon").on( "click", function() {
      //     $( ".map-detail" ).removeClass( "d-none" );
      // });


    $("button.navbar-toggler").click(function() {
        $(".ooff-canvas-menu").toggleClass("closemenu");
    });   
    $(".ooff-canvas-menu .close").click(function() {
        $(".ooff-canvas-menu").removeClass("closemenu");
    });    

    $(".ooff-canvas-menu .close").click(function() {
        $("button.navbar-toggler").addClass("collapsed");
    }); 



    new WOW().init()

  })
})(jQuery)