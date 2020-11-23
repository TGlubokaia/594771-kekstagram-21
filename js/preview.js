'use strict';

(function () {

  const photoPreview = document.querySelector('.big-picture');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  const photoPreviewCancel = document.querySelector('.big-picture__cancel');
  

  commentLoader.classList.add('hidden');


  const onEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      getClose();
    }
  };

  const getClose = function () {
    photoPreview.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };




  const getPreviewData = function () {
    const allPictures = document.querySelectorAll(`.picture`);
    allPictures.forEach(function(element) {
      element.addEventListener(`click`, function () {
        photoPreview.classList.remove(`hidden`);
        document.body.classList.add(`modal-open`);
        photoPreview.querySelector('img').src = element.querySelector('img').src;
        photoPreview.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
        photoPreview.querySelector('.comments-count').textContent = element.querySelector('.picture__comments').textContent;
        photoPreview.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
        document.addEventListener('keydown', onEscPress);
        photoPreviewCancel.addEventListener(`click`, function () {
          getClose();
        });
      })
    })
  }

  window.preview = {
    getPreviewData: getPreviewData,
  }

}());

