import { describe, test } from 'vitest';
import generateArray from '../../RandomNoArray/randomNoArray';
import javaScriptSort from './JavaScriptSort';

describe('generateRandomNumber test', () => {
  test('test generateRandomNumber', async () => {
    const array = generateArray(10);
    const sortedArray = javaScriptSort(array);
    console.log({ sortedArray });
  });
});
