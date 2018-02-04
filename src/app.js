window.addEventListener('load', () => {
  // let bodyPS = document.querySelector('.container');
  // bodyPS.addEventListener('click',
  /* FUNCIÓN PARA SUBIR IMÁGENES DINÁMICAMENTE */
  // createImage = (filesName) => {
  //   let imagesContainer = document.querySelector('.container');
  //   let img = document.createElement('img');
  //   img.setAttribute('src', 'assets/images/' + filesName + '.jpg');
  //   img.setAttribute('alt', filesName);
  //   img.classList.add('img-fluid rounded m-1') ;
  //   imagesContainer.appendChild(img);
  // };

  /* FUNCIÓN PARA EJECUTAR PLUG-IN AL DARLE CLIC AL BOTÓN */
  let btnTest = document.getElementById('btn-test');
  btnTest.addEventListener('click', () => {
    $('img').cardify();
    btnTest.disabled = true;
    btnTest.classList.add('disabled-btn');
  });
// Llave de cierre de función general
});


//convirtiendo a  base  numerica  64
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
//Almacenando en  localStorage.

imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", imgData);