import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import mergeSort from './MergeSort';
import { getMergeSortAnim } from './MergeAnim';

describe('mergeSort test', () => {
  test('test mergeSort', async () => {
    const array = generateArray(10);
    const sortedArray = mergeSort(array);
    console.log({ sortedArray });
  });
});

describe('mergeSortAnim test', () => {
  test.only('test mergeSortAnim', async () => {
    const array = generateArray(10);
    console.log({ array });
    const sortedArray = getMergeSortAnim(array);
    console.log(sortedArray[1]);
    console.log(sortedArray[0]);
  });
});
