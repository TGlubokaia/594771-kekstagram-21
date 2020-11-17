'use strict';

(function () {
  const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createErrorMessage = function (errorMessage) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };



  const buttonToggle = function (evt, buttons, ACTIVE_CLASS) {
    buttons.forEach(function (element) {
      element.classList.remove(ACTIVE_CLASS);
    });
    evt.target.classList.add(ACTIVE_CLASS);
  };

  window.util = {
    getRandomNumber: getRandomNumber,
    createErrorMessage: createErrorMessage,
    buttonToggle: buttonToggle,

  };
})();

