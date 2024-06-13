import React from 'react';
interface ButtonProps {
  array: number[];
}
const ArrayBars: React.FC<ButtonProps> = ({ array }) => {
  return (
    <div className="space-y-1">
      {array.map((val, index) => (
        <div
          key={index}
          style={{ width: `${val}px` }}
          className="bg-purple-400 h-1"
        ></div>
      ))}
    </div>
  );
};

export default ArrayBars;
