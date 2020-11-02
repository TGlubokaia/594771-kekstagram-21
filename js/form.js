'use strict';

(function () {
  const selectedFileInput = document.querySelector('#upload-file');
  const imgOverplay = document.querySelector('.img-upload__overlay');
  const bodyElement = document.querySelector('body');
  const cancelButton = document.querySelector('.img-upload__cancel');


  // Закрытие окна
  const onOverplayEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      getOverplayClose();
    }
  };
  const getOverplayClose = function () {
    imgOverplay.classList.add('hidden');
    document.removeEventListener('keydown', onOverplayEscPress);
  };

  const onselectedFile = function () {
    selectedFileInput.addEventListener('change', function () {
      imgOverplay.classList.remove('hidden');
      bodyElement.classList.add('modal-open');
      document.addEventListener('keydown', onOverplayEscPress);
      cancelButton.addEventListener('click', function () {
        getOverplayClose();
      });
    });
  };

  window.form = {
    onselectedFile: onselectedFile,
  };
})();
