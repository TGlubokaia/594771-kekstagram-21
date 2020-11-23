'use strict';

(function () {

  const photoPreview = document.querySelector('.big-picture');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  const photoPreviewCancel = document.querySelector('.big-picture__cancel');
  const commentsBlock = document.querySelector('.social__comments');
  let allComments = [];
  const NUMBER_OF_COMMENTS_IN_BLOCK = 5;
  const commentCountNumber = 0;
  
  const onEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      getClose();
    }
  };

  const getClose = function () {
    photoPreview.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  };

  const getOpen = function () {
    photoPreview.classList.remove(`hidden`);
    document.body.classList.add(`modal-open`);
    document.addEventListener('keydown', onEscPress);
        photoPreviewCancel.addEventListener(`click`, function () {
          getClose();
        })
  };

  
  const createComment = function (comments) {
    const commentFragment = document.createDocumentFragment();
    comments.forEach(function(element) {
      const comment = document.createElement(`li`);
      comment.classList.add(`social__comment`);

      const commentImg = document.createElement(`img`);
      commentImg.classList.add(`social__picture`);
      commentImg.src = element.avatar;
      commentImg.alt = element.name;
      comment.appendChild(commentImg);

      const commentText = document.createElement(`p`);
      commentText.classList.add(`social__text`);
      commentText.textContent = element.message;
      comment.appendChild(commentText);

      commentFragment.appendChild(comment);
    })
    commentsBlock.appendChild(commentFragment);
  }


  const getPreviewData = function (element) {
    photoPreview.querySelector('img').src = element.url;
    photoPreview.querySelector('.likes-count').textContent = element.likes;
    photoPreview.querySelector('.comments-count').textContent = element.comments.length;
    photoPreview.querySelector('.social__caption').textContent = element.description;
    commentsBlock.querySelectorAll(`li`).forEach(function (element) {
      element.remove();
    });
    allComments = element.comments;
    createComment(allComments);

  };

  window.preview = {
    getPreviewData: getPreviewData,
    getOpen: getOpen,
  }

}());

