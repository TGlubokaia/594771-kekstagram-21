'use strict';

const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureItemslist = document.querySelector('.pictures');
const pictureCommentsName = ['Мириам Мэйзел', 'Фрэнк Адлер', 'Луиза Бэнкс', 'Марк Уотни', 'Пол Атрейдес'];
const pictureCommentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Получение рандомного числа
const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Получение массива комментариев
const getComments = function (text, name) {
  const pictureComments = [];
  for (let i = 0; i < 3; i++) {
    const commentElement = {
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: text[getRandomNumber(0, text.length - 1)],
      name: name[getRandomNumber(0, name.length - 1)],
    };
    pictureComments.push(commentElement);
  }
  return pictureComments;
};


// Получение массива фото элементов
const getPictureElements = function () {
  const pictureElements = [];
  for (let i = 1; i <= 25; i++) {
    const pictureElement = {
      url: 'photos/' + i + '.jpg',
      description: '',
      likes: getRandomNumber(15, 200),
      comments: getComments(pictureCommentsText, pictureCommentsName),
    };
    pictureElements.push(pictureElement);
  }
  return pictureElements;
};
const photoElements = getPictureElements();

// Клонируем элемент
const renderPhotoElement = function (photo) {
  const photoElement = pictureItemTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = getComments(pictureCommentsText, pictureCommentsName).length;
  return photoElement;
};

// Добавление нового элемента в список
const fragment = document.createDocumentFragment();
for (let i = 0; i < photoElements.length; i++) {
  fragment.appendChild(renderPhotoElement(photoElements[i]));
}
pictureItemslist.appendChild(fragment);
