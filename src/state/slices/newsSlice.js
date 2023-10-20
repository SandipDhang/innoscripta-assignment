import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  searchKey: '',
  newsType: 'feed',
  loading: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsState: (state, action) => {
      return { ...state, [action.payload.key]: action.payload.value };
    },
  },
});

export const { setNewsState } = newsSlice.actions;
export const selectNews = (state) => state.news;
export default newsSlice.reducer;
