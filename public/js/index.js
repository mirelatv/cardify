'use strict';

(function($) {
  $.fn.cardify = function() {
    this.filter('img').each(function() {
      /* debugger;*/
      var elem = $(this);
      var text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);
      // $('figure').css('padding', '5%');

      // Ocultando figcaption
      elem.next().hide();
      elem.next().css('text-align', 'center');
      elem.mouseover(function() {
        elem.hide(1000);
        elem.next().show(1000);
      });
      elem.mouseleave(function() {
        elem.show(8000);
        elem.next().hide(8000);
      });
    });
    return this;
  };
})(jQuery);
