/**
 * Global file for all routes
 */

import React from 'react';
import Home from '../pages/home';
import Login from '../pages/login';
import Container from '../components/layout';
import ProtectedRoute from './privateRoute';
import Register from '../pages/register';
import Preference from '../pages/preference';

export const appRoutes = [
  {
    // routes with Container
    element: <Container />,
    children: [
      {
        // protected routes
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/preference',
            element: <Preference />,
          },
        ],
      },
      // unprotected routes
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  // routes w/o Container
  {
    // protected routes
    element: <ProtectedRoute />,
    children: [
      {
        path: '/some-route-only-protected',
        element: <p>Some route with only protected</p>,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];
