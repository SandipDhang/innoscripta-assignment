import React from 'react';

const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button className={`mn-btn ${className || ''}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
