import generateRandomNumber from '../RandomNumber/randomNumberGenerator';

const min = 5;
const max = 1000;
const generateArray = (size: number) => {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = generateRandomNumber(min, max);
    array.push(randomNumber);
  }
  return array;
};

export default generateArray;
