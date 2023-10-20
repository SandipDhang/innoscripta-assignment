import React from 'react';

const Container = ({ children, className }) => {
  return <div className={`mn-container ${className || ''}`}>{children}</div>;
};

export default Container;
