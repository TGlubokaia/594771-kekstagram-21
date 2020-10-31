'use strict';

(function () {
  const hashtagsInput = document.querySelector('.text__hashtags');
  const submitButton = document.querySelector('.img-upload__submit');

  const onSubmitButton = function () {
    submitButton.addEventListener('click', function () {
      const re = /^#\w{1,19}$/;
      const hashtagsInputText = hashtagsInput.value;
      const hashtags = hashtagsInputText.split(" ");
      const result = hashtags.every(function (v) {
        return re.test(v);
      });
      if (result !== true) {
        hashtagsInput.setCustomValidity('Что-то пошло не так');
      } else {
        hashtagsInput.setCustomValidity('');
      }
    });
  };

  window.input = {
    onSubmitButton: onSubmitButton,
  };
})();
// Валидация хеш-тегов
