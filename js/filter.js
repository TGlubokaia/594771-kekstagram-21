'use strict';

(function () {
  const picturesFilter = document.querySelector('.img-filters');
  let wizards = [];

  const getRandomPhotos = function () {
    let newLoad;
    newLoad = wizards;
    wizards = [];
    
    let randomPhotos = [];
    while (randomPhotos.length < 10) {
      let randomElement = newLoad[window.util.getRandomNumber(0, newLoad.length - 1)];
      if (randomPhotos.indexOf(randomElement) === -1) {
        randomPhotos.push(randomElement)
      }
    }
    window.gallery.renderPhoto(randomPhotos);
  }


  const getDiscussed = function () {
    window.gallery.renderPhoto(wizards.sort(function (left, right) {
      let rankDiff = right.comments.length - left.comments.length;
      return rankDiff;
    }
    ))
  }

  const photosUpdate = function () {
    window.gallery.renderPhoto(wizards);
  }

  const onFilterChange = function (evt) {
      evt.preventDefault();
      if (evt.target.matches('#filter-default')) {
        photosUpdate();
      } else if (evt.target.matches('#filter-random')) {
        getRandomPhotos();
      } else {
        getDiscussed();
      }
  }  

  const onPictureForm = function () {
    picturesFilter.addEventListener('click', onFilterChange);
  };


  const successHandler = function (data) {
    wizards = data;
    photosUpdate();
    ;
  };

  const errorHandler = function (errorMessage) {
    window.utils.createErrorMessage(errorMessage);  
  }

  window.load(successHandler, errorHandler);

  window.filter = {
    picturesFilter: picturesFilter,
    onPictureForm: onPictureForm,
  }




  /*
  const getRandom = function (photo) {

  }

  const getCommentsRank = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }
  const getCommentsDiscussed = function () {
    userPhotos.sort(function (left, right) {
        let rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = getCommentsRank(left.name, right.name);
        }
        return rankDiff;
    }
  }


const onUpdate = function (data) {
  userPhotos = data;
  updatePhotos();
};

const onPhotosChange = function (evt) {
  if (evt.target.matches('#filter-random')) {
    window.load(getRandom, onError);
  } else if (evt.target.matches('#filter-discussed')) {
    window.load(getRankDiscussed, onError);
  } else {
    window.load(onSuccess, onError);
  }
};




const updatePhotos = function () {
  renderPhotoElement(userPhotos.sort(function (left, right) {
    let rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  }));
}

*/
} ());