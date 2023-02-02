import { getRandomNumber, getRandomFloat, getRandomArrayElement, getNewArray } from './util.js';

const TITLES = [
  'Стандартная квартира в центре города',
  'Прекрасный вид из окна на городской парк',
  'Рядом с домом большое количество кафе',
  'Маленькая и очень уютная квартирка',
  'Квартира в многоквартирном доме',
  'Маленькая квартира рядом с парком',
  'Шикарный вид из окна на море',
  'Квартира с видом на горы',
  'Комната на чердаке',
  'Уютное гнёздышко',
  'Комната в многокомнатной квартире',
  'Мини-отель',
  'Президент-отель',
  'Хостел',
  'Расположение в деловом районе города',
  'Небольшая бюджетная квартира для студентов',
];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['мебель', 'постельные принадлежности', 'полотенца', 'туалетные принадлежности', 'шкаф', 'балкон', 'кондиционер', 'холодильник', 'чайник', 'фен'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const Price = {
  MIN: 0,
  MAX: 100000,
};

const createOffers = (_count, id) => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: `img/avatars/user${String(++id).padStart(2,'0')}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 7),
      quests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(CHECKS),
      checkout: getRandomArrayElement(CHECKS),
      features: getNewArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getNewArray(PHOTOS),
    },
    location: location,
  };
};

export {createOffers};
