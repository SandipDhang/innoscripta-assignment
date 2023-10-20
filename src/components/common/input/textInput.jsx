import React from 'react';
import Button from '../button';

const TextInput = ({
  startIcon,
  onChange,
  value,
  endIcon,
  onEndIconClick,
  type,
  placeholder,
}) => {
  return (
    <div className='mn-input'>
      {startIcon && <div className='input-icon'>{startIcon}</div>}
      <div className='input'>
        <input
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
      <div className='input-icon'>
        {endIcon && (
          <Button onClick={onEndIconClick} className='input-btn'>
            {endIcon}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
