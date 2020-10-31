'use strict';

(function () {
  const getComments = function (text, name) {
    const pictureComments = [];
    for (let i = 0; i < 3; i++) {
      const commentElement = {
        avatar: 'img/avatar-' + window.util.randomNumber(1, 6) + '.svg',
        message: text[window.util.randomNumber(0, text.length - 1)],
        name: name[window.util.randomNumber(0, name.length - 1)],
      };
      pictureComments.push(commentElement);
    }
    return pictureComments;
  };
  window.data = {
    getComments: getComments,
    userName: ['Мириам Мэйзел', 'Фрэнк Адлер', 'Луиза Бэнкс', 'Марк Уотни', 'Пол Атрейдес'],
    userText: [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ],
  };
})();
