const mergeSort = (array: number[]): number[] => {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const mid = Math.floor(length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);
  const merge1 = mergeSort(firstHalf);
  const merge2 = mergeSort(secondHalf);

  return merge(merge1, merge2);
};

const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

export default mergeSort;
