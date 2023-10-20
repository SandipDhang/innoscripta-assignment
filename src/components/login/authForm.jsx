import React, { useState } from 'react';
import { Button, Input } from '../common';
import { EmailIcon, LockIcon } from '../../assets/icons';
import { validateForm } from '../../utility';

const AuthForm = ({ formBtntext, onFormSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData) && onFormSubmit) onFormSubmit(formData);
  };
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <div className='mn-form-wrapper'>
      <form onSubmit={handleSubmit} className='mn-form'>
        <Input
          variant='email'
          type='email'
          startIcon={<EmailIcon />}
          required
          name='email'
          onChange={(e) => handleChange('email', e.target.value)}
          value={formData.email}
          placeholder='Email'
        />
        <Input
          variant='password'
          type='password'
          startIcon={<LockIcon />}
          required
          name='password'
          onChange={(e) => handleChange('password', e.target.value)}
          value={formData.password}
          placeholder='Password'
        />
        <Button
          type='submit'
          className='login-btn'
          disabled={!(formData.email && formData.password)}
        >
          {formBtntext}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
