function getRandomNumber (min, max)  {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

function getRandomFloat(min, max, decimals) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(decimals);
}

function getNewArray (array) {
  const maxLength = array.length;
  const randomLength = getRandomNumber(1, maxLength);
  const newArray = [];

  while (newArray.length < randomLength) {
    const randomIndex = getRandomNumber(0, maxLength - 1);
    const el = array[randomIndex];
    const isUniq = !newArray.includes(el);

    if (isUniq) {
      newArray.push(el);
    }
  }
  return newArray;
}

export {getRandomNumber, getRandomFloat, getRandomArrayElement, getNewArray};
