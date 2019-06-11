'use strict';

(function($){
	$(document).ready(function() {

 $(document).ready(function(){
      $('.team__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
 
      });
    });

 $('.blocks').isotope({
        itemSelector: '.blocks__img',
        percentPosition: true,
        masonry: {
          gutter: 7
        }
      });

      $('.filters').on('click', 'li', function() {
        var val = $(this).data('filter');
        $('.blocks').isotope({filter: val})
      });

  
    
  });

})(jQuery);

