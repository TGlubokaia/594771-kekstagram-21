'use strict';

(function () {
  const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureItemslist = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const MAX_PHOTO_ON_SCREEN = 25;

  // Клонируем элемент
  const renderPhotoElement = function (photo) {
    const photoElement = pictureItemTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    return photoElement;
  };

  const onSuccess = function (photos) {

    // Добавление нового элемента в список
    for (var i = 0; i < MAX_PHOTO_ON_SCREEN; i++) {
      fragment.appendChild(renderPhotoElement(photos[i]));
    }
    pictureItemslist.appendChild(fragment);
  };

  const onError = function (errorMessage) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(onSuccess, onError);
})();
