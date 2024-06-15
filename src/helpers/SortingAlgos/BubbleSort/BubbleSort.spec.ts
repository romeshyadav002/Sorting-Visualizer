import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import { bubbleSort, swap } from './BubbleSort';

describe('swap test', () => {
  test('test swap', async () => {
    const array = generateArray(5);
    console.log({ array });
    swap(1, 3, array);
    console.log({ array });
  });
});

describe('bubbleSort test', () => {
  test.only('test bubbleSort', async () => {
    const array = generateArray(5);
    console.log({ array });
    const op = bubbleSort(array);
    console.log({ op });
  });
});
