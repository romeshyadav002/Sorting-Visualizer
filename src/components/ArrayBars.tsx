import React from 'react';
interface ButtonProps {
  array: number[];
}
const ArrayBars: React.FC<ButtonProps> = ({ array }) => {
  return (
    <div className=" flex flex-row space-x-1">
      {array.map((val, index) => {
        return (
          <div
            key={index}
            id={`${index}`}
            style={{ height: val, backgroundColor: 'turquoise' }}
            className="w-2"
          ></div>
        );
      })}
    </div>
  );
};

export default ArrayBars;
