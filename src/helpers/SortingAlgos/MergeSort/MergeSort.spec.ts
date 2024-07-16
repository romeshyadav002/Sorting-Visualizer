import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import mergeSort from './MergeSort';
import { getMergeSortAnim, mergeAnim } from './MergeAnim';

describe('mergeSort test', () => {
  test('test mergeSort', async () => {
    const array = generateArray(5);
    console.log({ array });
    const sortedArray = mergeSort(array);
    console.log({ sortedArray });
  });
});

describe('mergeSortAnim test', () => {
  const array = generateArray(10);
  console.log({ array });
  test.only('test mergeSortAnim', async () => {
    const animationsArray = getMergeSortAnim(array);
    console.log({ animationsArray });
  });
});
