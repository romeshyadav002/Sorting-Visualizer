import { ANIMATION_SPEED } from '../../../Utils/constants';

export const bubbleSort = (array: number[]) => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let curr = array[j];
      let temp = array[j + 1];
      if (curr > temp) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
};

export function swap(i: number, j: number, array: number[]) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
