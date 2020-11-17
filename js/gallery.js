'use strict';

(function () {
  const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureItemslist = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  

  // Клонируем элемент
  const renderPhotoElement = function (photo) {
    const photoElement = pictureItemTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    return photoElement;
  };

  // Добавление нового элемента в список
  const renderPhoto = function (photos) {
    for (let j = 0; j < photos.length; j++) {
      fragment.appendChild(renderPhotoElement(photos[j]));
    }
    pictureItemslist.appendChild(fragment);
    window.preview.onLittlePictures();
  };
  
  window.gallery = {
    renderPhoto: renderPhoto,
    pictureItemslist: pictureItemslist,
  };

})();

