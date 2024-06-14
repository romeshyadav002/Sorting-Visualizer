import React from 'react';
interface ButtonProps {
  array: number[];
}
const ArrayBars: React.FC<ButtonProps> = ({ array }) => {
  return (
    <div className=" flex flex-row space-x-1">
      {array.map((val, index) => {
        const customClass = `w-1 bg-gray-300`;
        return (
          <div
            key={index}
            id={`${index}`}
            style={{ height: val }}
            className={customClass}
          ></div>
        );
      })}
    </div>
  );
};

export default ArrayBars;
