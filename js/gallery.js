'use strict';

(function () {
  const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureItemslist = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();


  // Клонируем элемент
  const renderPhotoElement = function (photos) {
    for (let photo of photos) {
      const photoElement = pictureItemTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = photo.url;
      photoElement.querySelector('.picture__likes').textContent = photo.likes;
      photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
      fragment.appendChild(photoElement);
    }
    pictureItemslist.appendChild(fragment);
  };

  // Добавление нового элемента в список
  const renderPhoto = function (photos) {
    renderPhotoElement(photos);
    const allPictures = document.querySelectorAll(`.picture`);
    allPictures.forEach(function(element, index) {
      element.addEventListener(`click`, function () {
        window.preview.getPreviewData(photos[index]);
        window.preview.getOpen();
      })
    });
    
  };
  
  window.gallery = {
    renderPhoto: renderPhoto,
    pictureItemslist: pictureItemslist,
  };

})();

