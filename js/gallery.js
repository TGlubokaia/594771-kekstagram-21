'use strict';

(function () {
  const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureItemslist = document.querySelector('.pictures');
  const allPictures = pictureItemslist.querySelectorAll('a');
  const fragment = document.createDocumentFragment();
  const imgUpload = pictureItemslist.querySelector('.img-upload');
  const h = pictureItemslist.querySelector('.pictures__title');

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
      for (var i = 0; i < photos.length; i++) {
        fragment.appendChild(renderPhotoElement(photos[i]));
      }
      pictureItemslist.appendChild(fragment);
      window.filter.picturesFilter.classList.remove('img-filters--inactive');
    };

    window.gallery = {
      renderPhoto: renderPhoto,
    }

})();

