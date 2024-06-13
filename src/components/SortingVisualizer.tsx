'use client';
import React, { useState } from 'react';
import generateArray from '../helpers/RandomNoArray/randomNoArray';
import Button from './Button';
import javaScriptSort from '../helpers/SortingAlgos/JavaScriptSort/JavaScriptSort';
import ArrayBars from './ArrayBars';
const SIZE = 70;
function SortingVisualizer() {
  const [array, setArray] = useState(generateArray(SIZE));
  const resetArray = () => {
    const randomArray = generateArray(SIZE);
    setArray(randomArray);
  };
  const jsSort = () => {
    const sortedArray = javaScriptSort(array);
    console.log({ sortedArray });
    setArray([...sortedArray]);
  };

  return (
    <div className="flex p-4 flex-row justify-between items-center w-full h-full">
      <div className="flex flex-col items-start justify-start gap-10">
        <Button text="Reset Array" onPress={resetArray} />
        <Button text="Merge Sort" onPress={resetArray} />
        <Button text="Quick Sort" onPress={resetArray} />
        <Button text="Heap Sort" onPress={resetArray} />
        <Button text="Bubble Sort" onPress={resetArray} />
        <Button text="JavaScript Sort" onPress={jsSort} />
      </div>
      <div className="flex flex-col py-1 bg-gray-700 items-end justify-center ">
        <ArrayBars array={array} />
      </div>
    </div>
  );
}

export default SortingVisualizer;
