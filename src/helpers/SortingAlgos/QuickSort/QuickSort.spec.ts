import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import { quickSort } from './QuickSort';

describe('quickSort test', () => {
  test.only('test quickSort', async () => {
    const array = generateArray(5);
    console.log({ array });
    const op = quickSort(array);
    console.log({ op });
  });
});
