<<<<<<< HEAD
(function($) {
  $.fn.cardify = function() {
    this.filter('img').each(function() {
=======
(function ($) {
  $.fn.cardify = function () {
    this.filter('img').each(function () {
>>>>>>> fd2d2d7cd9b2d56a1635ea5add4fee1c44aee2b1
      /* debugger;*/
      let elem = $(this);
      let text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);
      $('figcaption').css('display', 'none');

      // funcion para   mostrar el figcaption

      elem.hover(function () {
        $('figcaption').show(5000);
      });





      
      // dando css al img

      $('figure').css('display', 'inline-block');
      $('figure').css('margin', '10px');

      // dando ccs al figcaption
      $('figcaption').css('text-align', 'center');

    });

    return this;

  };

}(jQuery));