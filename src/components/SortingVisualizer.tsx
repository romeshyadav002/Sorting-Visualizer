'use client';

import React, { useState, useEffect } from 'react';
import generateArray from '../helpers/RandomNoArray/randomNoArray';
import Button from './Button';
import javaScriptSort from '../helpers/SortingAlgos/JavaScriptSort/JavaScriptSort';
import { mergeAnim } from '../helpers/SortingAlgos/MergeSort/MergeAnim';
import ArrayBars from './ArrayBars';
import { MAX_Number, SIZE } from '../Utils/constants';
import {
  bubbleSortAnim,
  processAnimations,
} from '../helpers/SortingAlgos/BubbleSort/BubbleAnim';

function SortingVisualizer() {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(generateArray(SIZE));
  }, []);

  const resetArray = () => {
    const randomArray = generateArray(SIZE);
    setArray(randomArray);
  };

  const jsSort = () => {
    const sortedArray = javaScriptSort(array);
    console.log({ sortedArray });
    setArray([...sortedArray]);
  };

  const handleBubbleSort = () => {
    const animations = bubbleSortAnim([...array]);
    processAnimations(animations);
  };
  const handleMergeSort = () => {
    mergeAnim(array);
  };

  return (
    <div className="flex p-4 flex-col justify-between items-center w-full h-full gap-3">
      <div className="flex flex-row items-start justify-start gap-10">
        <Button text="Reset Array" onPress={resetArray} />
        <Button text="Merge Sort" onPress={handleMergeSort} />
        <Button text="Quick Sort" onPress={resetArray} />
        <Button text="Heap Sort" onPress={resetArray} />
        <Button text="Bubble Sort" onPress={handleBubbleSort} />
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
