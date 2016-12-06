function main() {
  (function($) {
              'use strict';
            $('.isotope').each(function() {
                  var $container = $(this);
                  $container.imagesLoaded(function() {
                      $container.isotope({
                          itemSelector: '.isotope-item',
                          percentPosition: true,

                          masonry: {
                              columnWidth: '.isotope-item'
                          }
                      });
                  });
              });


              $('.filter li a').on('click', function() {
                  $('.filter .active').removeClass('active');
                  $(this).closest('li').addClass('active');
                  var selector = $(this).attr('data-filter');
                  $('.isotope').isotope({
                      filter: selector,
                      animationOptions: {
                          duration: 500,
                          queue: false
                      }
                  });
                  return false;
              });



          })(jQuery);}

window.onload = function() {
       main();
}
