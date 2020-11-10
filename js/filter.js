'use strict';

(function () {
  const picturesFilter = document.querySelector('.img-filters');
  let photoItems = [];
  let all = []

  const getRandomPhotos = function () {
    let newLoad = [];
    Object.assign(newLoad, photoItems);
    let randomPhotos = [];
    while (randomPhotos.length < 10) {
      let randomElement = newLoad[window.util.getRandomNumber(0, newLoad.length - 1)];
      if (randomPhotos.indexOf(randomElement) === -1) {
        randomPhotos.push(randomElement);
      }
    }
    window.gallery.renderPhoto(randomPhotos);
    all = randomPhotos; 
  };

  const getDiscussed = function () {
    let newPhotos = [];
    Object.assign(newPhotos, photoItems);
    window.gallery.renderPhoto(newPhotos.sort(function (left, right) {
      let rankDiff = right.comments.length - left.comments.length;
      return rankDiff;
    }
    ));
    all = newPhotos;
  };
 

  const photosUpdate = function () {
    all = window.gallery.renderPhoto(photoItems);
  };

  const onFilterChange = window.debounce(function (evt) {
    evt.preventDefault();
    if (evt.target.matches('#filter-default')) {
      photosUpdate();
    } else if (evt.target.matches('#filter-random')) {
      getRandomPhotos();
    } else {
      getDiscussed();
    }
  });

  const onPictureForm = function () {
    picturesFilter.addEventListener('click', onFilterChange);
  };

  const successHandler = function (data) {
    photoItems = data;
    photosUpdate();
  };

  const errorHandler = function (errorMessage) {
    window.utils.createErrorMessage(errorMessage);
  };

  window.load(successHandler, errorHandler);

  window.filter = {
    picturesFilter: picturesFilter,
    onPictureForm: onPictureForm,
    photoItems: photoItems,
    all: all,
  };
})();
