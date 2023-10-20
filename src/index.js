import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import NavigationRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavigationRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
