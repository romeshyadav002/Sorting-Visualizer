'use client';

import React, { useState, useEffect } from 'react';
import generateArray from '../helpers/RandomNoArray/randomNoArray';
import Button from './Button';
import javaScriptSort from '../helpers/SortingAlgos/JavaScriptSort/JavaScriptSort';
import { mergeAnim } from '../helpers/SortingAlgos/MergeSort/MergeAnim';
import ArrayBars from './ArrayBars';
import { ANIMATION_SPEED, MAX_Number, SIZE } from '../Utils/constants';
import {
  bubbleSortAnim,
  processAnimations,
} from '../helpers/SortingAlgos/BubbleSort/BubbleAnim';
import {
  processQuickAnimations,
  quickSortAnim,
} from '../helpers/SortingAlgos/QuickSort/QuickAnim';

function SortingVisualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setArray(generateArray(SIZE));
  }, []);

  const resetArray = () => {
    if (!isSorting) {
      const randomArray = generateArray(SIZE);
      setArray(randomArray);
    }
  };

  const jsSort = () => {
    if (!isSorting) {
      const sortedArray = javaScriptSort(array);
      console.log({ sortedArray });
      setArray([...sortedArray]);
    }
  };

  const handleBubbleSort = () => {
    setIsSorting(true);
    const animations = bubbleSortAnim([...array]);
    processAnimations(animations);
    setTimeout(() => setIsSorting(false), animations.length * ANIMATION_SPEED);
  };

  const handleMergeSort = () => {
    setIsSorting(true);
    const animations = mergeAnim([...array]);
    setTimeout(() => setIsSorting(false), animations.length * ANIMATION_SPEED);
  };

  const handleQuickSort = () => {
    setIsSorting(true);
    const animations = quickSortAnim([...array]);
    processQuickAnimations(animations);
    setTimeout(() => setIsSorting(false), animations.length * ANIMATION_SPEED);
  };

  return (
    <div className="flex p-4 flex-col justify-between items-center w-full h-full gap-3">
      <div className="flex flex-row items-start justify-start gap-10">
        <Button text="Reset Array" onPress={resetArray} isSorting={isSorting} />
        <Button
          text="Merge Sort"
          onPress={handleMergeSort}
          isSorting={isSorting}
        />
        <Button
          text="Quick Sort"
          onPress={handleQuickSort}
          isSorting={isSorting}
        />
        <Button text="Heap Sort" onPress={jsSort} isSorting={isSorting} />
        <Button
          text="Bubble Sort"
          onPress={handleBubbleSort}
          isSorting={isSorting}
        />
        {/* <Button text="JavaScript Sort" onPress={jsSort} /> */}
      </div>

      <div
        className="flex flex-row px-1 bg-black items-end justify-center space-x-1 w-full rotate-180"
        style={{ height: MAX_Number }}
      >
        <ArrayBars array={array} />
      </div>
    </div>
  );
}

export default SortingVisualizer;
