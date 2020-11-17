'use strict';

(function () {

  const photoPreview = document.querySelector('.big-picture');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  const photoPreviewCancel = document.querySelector('.big-picture__cancel');
  


  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');

  const onLittlePictures =function () {
    const allPictures = document.querySelectorAll(`.picture`);

    allPictures.forEach(function(element) {
      element.addEventListener(`click`, function () {
        photoPreview.classList.remove(`hidden`);
        photoPreview.querySelector('img').src = element.querySelector('img').src;
      })
    })
  }

  const openphotoPreview = function () {
    document.body.classList.add(`modal-open`);
    photoPreview.classList.remove(`hidden`);
    photoPreviewCancel.addEventListener(`click`, closephotoPreview);
    document.addEventListener(`keydown`, closephotoPreview);
  };

  const closephotoPreview = function (evt) {
    if (evt.key === ESC || evt.type === `click`) {
      document.body.classList.remove(`modal-open`);
      photoPreview.classList.add(`hidden`);
      photoPreviewCancel.removeEventListener(`click`, closephotoPreview);
      document.removeEventListener(`keydown`, closephotoPreview);
    }
  };

  window.preview = {
    onLittlePictures: onLittlePictures,
  }

}());

