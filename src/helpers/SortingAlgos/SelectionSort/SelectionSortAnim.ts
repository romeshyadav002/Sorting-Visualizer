import { ANIMATION_SPEED } from '../../../Utils/constants';

export const getSelectionSortAnim = (array: number[]): any[] => {
  const animations: any[] = [];
  if (array.length <= 1) return animations; // Return an empty array if the input array length is 1 or less
  selectionSortHelper(array, animations);
  return animations;
};

const selectionSortHelper = (array: number[], animations: any[]) => {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      animations.push([i, j]); // Comparing indices
      animations.push([i, j]); // Revert color change
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      animations.push([i, array[minIdx]]); // Overwrite value at index i in array with array[minIdx]
      animations.push([minIdx, array[i]]); // Overwrite value at index minIdx in array with array[i]
      swap(i, minIdx, array);
    }
    // Ensure that the final state of the bar heights is recorded
    animations.push([i, array[i]]); // Record the final value swap
  }
  animations.push([len - 1, array[len - 1]]); // Record the final value for the last element
};

const swap = (i: number, j: number, array: number[]) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const selectionAnim = (array: number[]) => {
  const animations = getSelectionSortAnim(array);
  if (!animations || !animations.length) {
    console.error('No animations generated');
    return [];
  }
  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 4 === 0 || i % 4 === 1;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const bar1 = document.getElementById(barOneIdx.toString());
      const bar2 = document.getElementById(barTwoIdx.toString());
      if (!bar1 || !bar2) {
        console.error('Bar elements not found', barOneIdx, barTwoIdx);
        continue;
      }
      const barOneStyle = (bar1 as HTMLElement)?.style;
      const barTwoStyle = (bar2 as HTMLElement)?.style;
      const color = i % 4 === 0 ? 'red' : 'turquoise';
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const bar1 = document.getElementById(barOneIdx.toString());
        if (!bar1) {
          console.error('Bar element not found', barOneIdx);
          return;
        }
        const barOneStyle = (bar1 as HTMLElement)?.style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED);
    }
  }
  // At the end of the animation, ensure all bars are the same color
  setTimeout(() => {
    for (let i = 0; i < array.length; i++) {
      const bar = document.getElementById(i.toString());
      if (bar) {
        (bar as HTMLElement).style.backgroundColor = 'turquoise';
      }
    }
  }, animations.length * ANIMATION_SPEED);

  return animations;
};
