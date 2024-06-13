import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import mergeSort from './MergeSort';

describe('generateRandomNumber test', () => {
  test('test generateRandomNumber', async () => {
    const array = generateArray(10);
    const sortedArray = mergeSort(array);
    console.log({ sortedArray });
  });
});
