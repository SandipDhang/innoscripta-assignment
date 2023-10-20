import React from 'react';
import TextInput from './textInput';

const Input = ({ variant, ...rest }) => {
  switch (variant) {
    case 'text':
    case 'password':
      return <TextInput {...rest} />;

    default:
      return <TextInput {...rest} />;
  }
};

export default Input;
