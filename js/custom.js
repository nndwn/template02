$(document).ready(function(){
        

        var $item = $('#myCarousel_home.carousel .carousel-item'); 
        var $wHeight = $(window).height();
    
        $item.height($wHeight); 
        $item.addClass('full-screen');
        $item.eq(0).addClass('active');

        $('#myCarousel_home .carousel-item img').each(function() {
          var $src = $(this).attr('src');
          var $color = $(this).attr('data-color');
          $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
          });
          $(this).remove();
        });

        $(window).on('resize', function (){
          $wHeight = $(window).height();
          $item.height($wHeight);
        });

        // $('#myCarousel_home.carousel').carousel({
        //   // interval: 5500,
        //   pause: "false"
        // });

});