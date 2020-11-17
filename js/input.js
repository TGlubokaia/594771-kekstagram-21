'use strict';

(function () {
  const hashtagsInput = document.querySelector('.text__hashtags');
  const submitButton = document.querySelector('.img-upload__submit');

  const onSubmitButton = function () {
    submitButton.addEventListener('click', function () {
      const re = /^$|\s|^#\w{1,19}$/;
      const hashtagsInputText = hashtagsInput.value;
      const hashtags = hashtagsInputText.split(" ");
      const result = hashtags.every(function (v) {
        return re.test(v);
      });
      if (!result || hashtags.length > 5) {
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

