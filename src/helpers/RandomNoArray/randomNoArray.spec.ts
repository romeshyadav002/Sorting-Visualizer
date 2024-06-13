import { describe, test } from 'vitest';
import generateArray from './randomNoArray';

describe('generateArray test', () => {
  test('test generateArray', async () => {
    const array = generateArray(10);
    console.log({ array });
  });
});
