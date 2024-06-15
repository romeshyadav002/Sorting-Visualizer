import React, { HTMLAttributes } from 'react';
import { cn } from '../Utils/classMerge';

interface ButtonProps {
  text: string;
  onPress: () => void;
  className?: HTMLAttributes<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, className }) => {
  return (
    <div>
      <button
        onClick={onPress}
        className={cn('flex bg-pink-600 px-3 py-1 rounded-lg', className)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
