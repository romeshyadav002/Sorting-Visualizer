import { swap } from '../BubbleSort/BubbleSort';

export const quickSort = (array: number[]): number[] => {
  const op = [...array];
  quickSortHelper(op, 0, op.length - 1);
  return op;
};

const quickSortHelper = (array: number[], left: number, right: number) => {
  if (left >= right) {
    return;
  }
  const pivotIndex = Math.floor((left + right) / 2);
  console.log({ pivotIndex });
  const pivot = array[pivotIndex];
  console.log({ pivot });
  const index = partition(array, left, right, pivot);
  console.log({ index });
  quickSortHelper(array, left, index - 1);
  quickSortHelper(array, index, right);
};

const partition = (
  array: number[],
  left: number,
  right: number,
  pivot: number,
): number => {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      console.log({ left, right });
      swap(left, right, array);
      left++;
      right--;
    }
    console.log({ array, left, right });
  }
  console.log({ array });
  return left;
};
