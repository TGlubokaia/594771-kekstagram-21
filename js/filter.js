'use strict';

(function () {
  const picturesFilter = document.querySelector(`.img-filters`);
  const filterButtons = document.querySelectorAll(`.img-filters__button`);
  const FILTER_ACTIVE_CLASS = `img-filters__button--active`;
  const RANDOM_PHOTOS_NUMBER = 10;
  let photoItems = [];
  let firstPhotoItems = [];



  const getNewPhotos = function (dataFromServer) {
    photoItems = dataFromServer;
    if (photoItems.length > 0) {
      picturesFilter.classList.remove(`img-filters--inactive`);
    }
  };

  const photosUpdate = function (newPhotos) {
    const pictures = document.querySelectorAll(`.picture`);
    pictures.forEach(function (element) {
      element.remove();
    });
    window.gallery.renderPhoto(newPhotos);
  };

  const getDiscussedPhotos = function () {
    let newSortedData = photoItems.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });
    return newSortedData;
  };

  const getRandomPhotos = function () {
    let newData = photoItems.sort(function () {
      return 0.5 - Math.random();
    }).slice(0, RANDOM_PHOTOS_NUMBER);
    return newData;
  };

  const addDebounce = window.debounce(function (data) {
    photosUpdate(data);
  });


  filterButtons.forEach(function (element) {
    element.addEventListener(`click`, function (evt) {
      window.util.buttonToggle(evt, filterButtons, FILTER_ACTIVE_CLASS);
      switch (element.id) {
        case `filter-discussed`:
          addDebounce(getDiscussedPhotos());
          break;
        case `filter-random`:
          addDebounce(getRandomPhotos());
          break;
        default:
          addDebounce(firstPhotoItems);
          break;
      }
    });
  });

  const onSuccessLoad = function (data) {
    firstPhotoItems = Object.assign([], data);
    window.gallery.renderPhoto(data);
    getNewPhotos(data);
  };

  const errorHandler = function (errorMessage) {
    window.util.createErrorMessage(errorMessage);
  };

  window.load(onSuccessLoad, errorHandler);

  window.filter = {
    firstPhotoItems: firstPhotoItems,
    
  }


})();
