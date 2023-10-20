import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='mn-layout'>
      <Outlet />
    </div>
  );
};

export default Layout;
