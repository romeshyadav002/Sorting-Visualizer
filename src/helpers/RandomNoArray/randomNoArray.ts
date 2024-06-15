import { MAX_Number, MIN_Number } from '../../Utils/constants';
import generateRandomNumber from '../RandomNumber/randomNumberGenerator';

const generateArray = (size: number) => {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = generateRandomNumber(MIN_Number, MAX_Number);
    array.push(randomNumber);
  }
  return array;
};

export default generateArray;
