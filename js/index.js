
(function( $ ) {
 
  $.fn.cardify = function() {

      this.filter( "img" ).each(function() {
          var elem = $( this );
          var Alt= $(this).attr();
          console.log('textAlt');
          elem.wrap('<figure></figure>' );
          $('figure').append('<figcaption></figcaption>');
          
          
      });

      return this;

  };

}( jQuery ));