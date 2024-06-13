import React from 'react';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <div>
      <button
        onClick={onPress}
        className="flex bg-pink-600 px-3 py-1 rounded-lg"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
