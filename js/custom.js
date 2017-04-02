
    
   $(function() {
    $('.navbar-nav li a').bind('click', function(event) {
        var $anchor=$(this);
        $('html, body').stop().animate( {
            scrollTop: $($anchor.attr('href')).offset().top
        }
        , 1500, 'easeInOutExpo');
        event.preventDefault();
    }
    );
   }
  );


   function collapseNavbar() {
    if($(".navbar").offset().top>100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse hover-color");
    }
    else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse hover-color");

    }
};

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

baguetteBox.run('.baguette',{
  animation:'fadeIn',
  noScrollbars: true,
  
});

 wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       20,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )

  wow.init();



    $('#top-menu').parallax("90%",1.5); 
    $('#total').parallax("50%",.5); 
    $('#client').parallax("50%",.5); 
       $("html").niceScroll();
