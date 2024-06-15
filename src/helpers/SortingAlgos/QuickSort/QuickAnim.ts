import { ANIMATION_SPEED } from '../../../Utils/constants';
// import { swap } from '../BubbleSort/BubbleSort';

export const quickSortAnim = (array: number[]): any[] => {
  const animations: any[] = [];
  const op = [...array];
  quickSortHelper(op, 0, op.length - 1, animations);
  return animations;
};

const quickSortHelper = (
  array: number[],
  left: number,
  right: number,
  animations: any[],
) => {
  if (left < right) {
    const index = partition(array, left, right, animations);
    quickSortHelper(array, left, index - 1, animations);
    quickSortHelper(array, index, right, animations);
  }
};

const partition = (
  array: number[],
  left: number,
  right: number,
  animations: any[],
): number => {
  const pivot = array[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (array[left] < pivot) {
      animations.push([left, left, 'compare']);
      animations.push([left, left, 'reset']);
      left++;
    }
    while (array[right] > pivot) {
      animations.push([right, right, 'compare']);
      animations.push([right, right, 'reset']);
      right--;
    }
    if (left <= right) {
      animations.push([left, right, 'compare']);
      animations.push([left, right, 'swap']);
      swap(left, right, array);
      animations.push([left, right, 'reset']);
      left++;
      right--;
    }
  }
  return left;
};

const swap = (i: number, j: number, array: number[]) => {
  [array[i], array[j]] = [array[j], array[i]];
};

export const processQuickAnimations = (animations: any[]) => {
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, action] = animations[i];
    const bar1 = document.getElementById(barOneIdx.toString());
    const bar2 = document.getElementById(barTwoIdx.toString());
    const barOneStyle = (bar1 as HTMLElement)?.style;
    const barTwoStyle = (bar2 as HTMLElement)?.style;
    const color = action === 'compare' ? 'red' : 'green';

    setTimeout(() => {
      if (action === 'compare' || action === 'reset') {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      } else if (action === 'swap') {
        [barOneStyle.height, barTwoStyle.height] = [
          barTwoStyle.height,
          barOneStyle.height,
        ];
      }
    }, i * ANIMATION_SPEED);
  }
};
