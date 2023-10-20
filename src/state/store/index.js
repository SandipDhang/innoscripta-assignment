import { configureStore } from '@reduxjs/toolkit';
import { RootReducers } from '../slices';

export const store = configureStore({
  reducer: RootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});
