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
      /* $('figcaption').css('display','none')*/
    });

    return this;
  };
}(jQuery));
