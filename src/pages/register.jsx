import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Logo } from '../components/common';
import AuthForm from '../components/login/authForm';

const Register = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (data) => {
    sessionStorage.setItem('MN_USER', JSON.stringify(data));
    navigate('/');
  };
  return (
    <Container className='mn-auth'>
      <div className='mn-brand'>
        <Logo />
      </div>
      <h1 className='auth-heading'>Create an account</h1>
      <AuthForm formBtntext={'Register'} onFormSubmit={handleFormSubmit} />
      <Link to='/login' className='mn-link'>
        Login here
      </Link>
    </Container>
  );
};

export default Register;
