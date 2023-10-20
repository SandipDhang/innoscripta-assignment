import { combineReducers } from 'redux';
import newsSlice from './newsSlice';

export const RootReducers = combineReducers({ news: newsSlice });
