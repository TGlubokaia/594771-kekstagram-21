'use strict';

(function () {
  const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  window.util = {
    randomNumber: getRandomNumber,
  };
})();
