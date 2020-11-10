'use strict';

(function () {
  const photoPreview = document.querySelector('.big-picture');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  const pictureCancel = document.querySelector('.big-picture__cancel');
  const photo = window.filter.photoItems[0];


  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');

  pictureCancel.addEventListener('click', function () {
    getClosed();
  });

  const getClosed = function () {
    photoPreview.classList.add('hidden');
  };

  const renderPhotoData = function (preview, item) {
    
    preview.querySelector('.big-picture__img').src = item.url;
    preview.querySelector('.likes-count').textContent = item.likes;
    preview.querySelector('.comments-count').textContent = item.comments.length;
    preview.querySelector('.social__caption').textContent = item.description;
    return preview;
  };
  renderPhotoData(photoPreview, photo);

}());
