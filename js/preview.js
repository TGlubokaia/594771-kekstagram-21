'use strict';

(function () {

  const photoPreview = document.querySelector('.big-picture');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  const pictureCancel = document.querySelector('.big-picture__cancel');
  const bigPucture = document.querySelector('.big-picture__img img');

  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  photoPreview.classList.remove('hidden');
  
  bigPucture.src = window.filter.onSuccessLoad[0].url;

  const onBigPictureEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      getBigPictureClose();
    }
  };

  const getBigPictureClose = function () {
    imgOverplay.classList.add('hidden');
    document.removeEventListener('keydown', onOverplayEscPress);
    imgOverplay.value = ``;
    window.picture.imgPreview.classList.remove(window.picture.imgPreview.classList.item(1));
  };

  const onLittlePicture = function () {
    const allPictures = document.querySelectorAll(`.picture`);
    allPictures.forEach(function (element, index) {
      element.addEventListener(`click`, function () {
        renderPhotoData(data[index]);
        openBigPicture();
      });
    })
  }


  const renderPhotoData = function (preview, item) {
    window.filter.firstPhotoItems[0].src = item.url;
    preview.querySelector('.likes-count').textContent = item.likes;
    preview.querySelector('.comments-count').textContent = item.comments.length;
    preview.querySelector('.social__caption').textContent = item.description;
    return preview;
  }

  /*
  const onselectedFile = function () {
    selectedFileInput.addEventListener(`change`, function () {
      imgOverplay.classList.remove(`hidden`);
      bodyElement.classList.add(`modal-open`);
      document.addEventListener(`keydown`, onOverplayEscPress);
      cancelButton.addEventListener(`click`, function () {
        getOverplayClose();
      });
    });
  };
  renderPhotoData(photoPreview, photo);

*/

}());
