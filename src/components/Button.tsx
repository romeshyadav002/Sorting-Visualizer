import React, { HTMLAttributes } from 'react';
import { cn } from '../Utils/classMerge';

interface ButtonProps {
  text: string;
  onPress: () => void;
  className?: HTMLAttributes<HTMLButtonElement>;
  isSorting: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  className,
  isSorting,
}) => {
  return (
    <div>
      <button
        disabled={isSorting}
        onClick={onPress}
        style={{ opacity: isSorting ? 0.5 : 1 }}
        className={cn('flex bg-pink-600 px-3 py-1 rounded-lg', className)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
