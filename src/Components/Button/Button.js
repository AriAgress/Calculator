import React from 'react';
import './Button.css';

const Button = ({ className, value, onClick }) => {
  return (
    <div className={className} value={value} onClic={onClick}>
      {value}
    </div>
  );
};

export default Button;
