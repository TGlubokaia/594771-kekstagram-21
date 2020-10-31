'use strict';

(function () {
  const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureItemslist = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  const getPictureElements = function () {
    const pictureElements = [];
    for (let i = 1; i <= 25; i++) {
      const pictureElement = {
        url: 'photos/' + i + '.jpg',
        description: '',
        likes: window.util.randomNumber(15, 200),
        comments: window.data.getComments(window.data.userText, window.data.userName),
      };
      pictureElements.push(pictureElement);
    }
    return pictureElements;
  };
  const photoElements = getPictureElements();

  // Клонируем элемент
  const renderPhotoElement = function (photo) {
    const photoElement = pictureItemTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = window.data.getComments(window.data.userText, window.data.userName).length;
    return photoElement;
  };

  // Добавление нового элемента в список
  for (let i = 0; i < photoElements.length; i++) {
    fragment.appendChild(renderPhotoElement(photoElements[i]));
  }

  const addFragment = function () {
    pictureItemslist.appendChild(fragment);
  };

  window.gallery = {
    addFragment: addFragment,
  };
})();


