import { ANIMATION_SPEED } from '../../../Utils/constants';

export const bubbleSortAnim = (array: number[]): any[] => {
  const animations: any[] = [];
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1, 'compare']);
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1, 'swap']);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      animations.push([j, j + 1, 'reset']);
    }
  }
  return animations;
};

export const processAnimations = (animations: any[]) => {
  for (let i = 0; i < animations.length; i++) {
    const [barOneIdx, barTwoIdx, action] = animations[i];
    const bar1 = document.getElementById(barOneIdx.toString());
    const bar2 = document.getElementById(barTwoIdx.toString());
    const barOneStyle = (bar1 as HTMLElement)?.style;
    const barTwoStyle = (bar2 as HTMLElement)?.style;
    const color = action === 'compare' ? 'red' : 'turquoise';

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
