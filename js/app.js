// $(document).ready(() => {
//   /* Función para subir imágenes dinámicamente */
//   $(function() {
//
//   });
//
//   /* Función para ejecutar plug-in*/
//   $(function() {
//     $('img').cardify();
//   });
// });

window.addEventListener('load', loadedPage => {
  // let bodyPS = document.querySelector('.container');
  // bodyPS.addEventListener('click',
  // /* FUNCIÓN PARA SUBIR IMÁGENES DINÁMICAMENTE */
  //   createImage = (filesName) => {
  //     let imagesContainer = document.querySelector('.container');
  //     let img = document.createElement('img');
  //     img.setAttribute('src', 'assets/images/imagen1.jpg');
  //     img.setAttribute('alt', imagen1);
  //     img.classList.add('img-fluid rounded m-1') ;
  //     imagesContainer.appendChild(img);
  //   });

  /* FUNCIÓN PARA EJECUTAR PLUG-IN */
  $(function() {
    $('img').cardify();
  });
// Llave de cierre de función general
});
