'use strict';

(function () {
  const effectsForm = document.querySelector('.img-upload__form');
  const imgPreview = document.querySelector('.img-upload__preview');


  const onFilterChange = function (evt) {
    if (evt.target.matches('.effects__radio')) {
      const secondClass = imgPreview.classList.item(1);
      if (secondClass !== null) {
        imgPreview.classList.remove(secondClass);
        imgPreview.classList.add('effects__preview--' + evt.target.value);
      } else {
        imgPreview.classList.add('effects__preview--' + evt.target.value);
      }
    }
  };

  const onEffectsForm = function () {
    effectsForm.addEventListener('change', onFilterChange);
  };

  window.picture = {
    onEffectsForm: onEffectsForm,
  };
})();


