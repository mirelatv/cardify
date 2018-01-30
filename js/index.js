(function($) {
  $.fn.cardify = function() {
    this.filter('img').each(function() {
      /* debugger;*/
      let elem = $(this);
      let text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);

      // Css

      // $('figure').css('display', 'inline-block');
      // $('figure').css('margin', '5%');


      // Ocultando figcaption
      $('figcaption').hide();

      // funcion hover para   mostrar el figcaption

      elem.mouseover(function() {
        elem.hide(3000);
        $('figcaption').css('font-size', '30px');
        $('figcaption').show(3000);
        elem.css('margin-left', ' 40px');
      });
      // funcion  mouseleve para  mostrar img y ocultar figcaption
      elem.mouseleave(function() {
        elem.show(3000);
        $('figcaption').hide(3000);
      });


      // dando css al img


      // dando ccs al figcaption
      // $('figcaption').css('text-align', 'center');
    });

    return this;
  };
}(jQuery));
