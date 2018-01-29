(function ($) {

  $.fn.cardify = function () {

    this.filter("img").each(function () {
      /* debugger;*/
      var elem = $(this);
      var text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);
      $('figcaption').css('display', 'none');

      // funcion para   mostrar el figcaption

      elem.hover(function () {
        $('figcaption').show(5000);
      });

    });

    return this;

  };

}(jQuery));