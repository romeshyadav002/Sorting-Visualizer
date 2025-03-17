import { swap } from '../BubbleSort/BubbleSort';

const selectionSort = (array: number[]) => {
  const len = array.length;
  let counter = 0;
  while (counter < len) {
    let min = counter;
    for (let i = counter + 1; i < len; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    swap(counter, min, array);
    counter = counter + 1;
  }
  return array;
};

export default selectionSort;
