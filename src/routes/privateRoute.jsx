import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(
    sessionStorage.getItem('MN_USER') || {}
  )?.email;

  if (isAuthenticated) {
    return children || <Outlet />;
  }
  return <Navigate replace to='/login' />;
};

export default ProtectedRoute;
