import { describe, test } from 'vitest';
import generateRandomNumber from './randomNumberGenerator';

describe('generateRandomNumber test', () => {
  test('test generateRandomNumber', async () => {
    const min = 5;
    const max = 1000;
    const randomNumber = generateRandomNumber(min, max);
    console.log({ randomNumber });
  });
});
