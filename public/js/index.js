'use strict';

(function ($) {
  $.fn.cardify = function () {
    /* FUNCIÓN PARA ASIGNAR FIGURE A IMG COMO PADRE Y AGREGAR FIGCAPTION */
    this.filter('img').each(function () {
      /* debugger;*/
      var elem = $(this);
      var text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);

      // Ocultando figcaption
      elem.next().hide();
      elem.next().css('text-align', 'center');

      /* FUNCIÓN PARA ESCONDER IMAGEN Y MOSTRAR FIGCAPTION AL PASAR MOUSE*/
      elem.mouseover(function () {
        elem.hide(1000);
        elem.next().show(1000);
      });

      /* FUNCIÓN PARA MOSTRAR IMAGEN Y ESCONDER FIGCAPTION AL PASAR MOUSE*/
      elem.mouseleave(function () {
        elem.show(8000);
        elem.next().hide(8000);
      });
    });
    return this;
  };
})(jQuery);