document.ready(function() {
  /* FUNCIÓN PARA ELIMINAR FOTOS POR DEFECTO */
  let photoUploader = document.getElementById('photo-uploader');
  let progressBar = document.getElementById('progress');
  // oculando barra de progreso
  progressBar.style.display = 'none';

  captureImg = () => {
    photoUploader.addEventListener('change', UploadImg);

    showPictures();
  };
}
);
