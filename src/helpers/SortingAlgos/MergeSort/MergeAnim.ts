import { ANIMATION_SPEED } from '../../../Utils/constants';

export const getMergeSortAnim = (array: number[]): any[] => {
  const animations: any[] = [];
  if (array.length <= 1) return animations; // Return an empty array if the input array length is 1 or less
  const auxiliaryArray = [...array];
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
};

const mergeSortHelper = (
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: any[],
) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const doMerge = (
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: any[],
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]); // Comparing indices
    animations.push([i, j]); // Revert color change
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]); // Overwrite value at index k in mainArray with auxiliaryArray[i]
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]); // Overwrite value at index k in mainArray with auxiliaryArray[j]
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]); // Comparing indices (even though they are the same)
    animations.push([i, i]); // Revert color change
    animations.push([k, auxiliaryArray[i]]); // Overwrite value at index k in mainArray with auxiliaryArray[i]
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]); // Comparing indices (even though they are the same)
    animations.push([j, j]); // Revert color change
    animations.push([k, auxiliaryArray[j]]); // Overwrite value at index k in mainArray with auxiliaryArray[j]
    mainArray[k++] = auxiliaryArray[j++];
  }
};

export const mergeAnim = (array: number[]) => {
  const animations = getMergeSortAnim(array);
  if (!animations || !animations.length) {
    console.error('No animations generated');
    return [];
  }
  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;
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
      const color = i % 3 === 0 ? 'red' : 'turquoise';
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
  return animations;
};
