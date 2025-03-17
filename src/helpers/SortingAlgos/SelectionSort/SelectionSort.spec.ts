import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import selectionSort from './SelectionSort';

describe('quickSort test', () => {
  test.only('test quickSort', async () => {
    const array = generateArray(5);
    console.log('intial array', { array });
    const op = selectionSort(array);
    console.log({ op });
  });
});
