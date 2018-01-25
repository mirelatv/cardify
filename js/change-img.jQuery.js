$.fn.changeImg = function() {
  alert('está pasando');
  // `container` es el selector del contenedor donde se buscarán todas las
  // imágenes a ser procesadas.
  var container = $('.container');
  container.on('click', function() {
    console.log(container);
  });
  // $(container).cardify({});
};
