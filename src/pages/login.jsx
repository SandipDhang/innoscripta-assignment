import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Logo } from '../components/common';
import AuthForm from '../components/login/authForm';

const Login = () => {
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
      <h1 className='auth-heading'>Log in to your account</h1>
      <AuthForm formBtntext={'Login'} onFormSubmit={handleFormSubmit} />
      <Link to='/register' className='mn-link'>
        Create an account
      </Link>
    </Container>
  );
};

export default Login;
