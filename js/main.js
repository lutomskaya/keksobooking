import { createOffers } from './data.js';

const OFFERS_COUNT = 10;

const advertisement = Array.from({length: OFFERS_COUNT}, createOffers);

console.log(advertisement);
