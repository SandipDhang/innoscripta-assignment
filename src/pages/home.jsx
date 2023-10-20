import React, { useEffect } from 'react';
import { Header } from '../components/common';
import NewsList from '../components/home/newsList';
import NewsFilter from '../components/home/newsFilter';
import { fetchAllNews, fetchTopNews } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews, setNewsState } from '../state/slices/newsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { newsType } = useSelector(selectNews);
  const getNews = async () => {
    try {
      const news =
        newsType === 'feed' ? await fetchTopNews() : await fetchAllNews();
      dispatch(setNewsState({ key: 'news', value: news.articles || [] }));
      dispatch(setNewsState({ key: 'loading', value: false }));
    } catch (error) {
      dispatch(setNewsState({ key: 'news', value: [] }));
      dispatch(setNewsState({ key: 'loading', value: false }));
    }
  };
  useEffect(() => {
    dispatch(setNewsState({ key: 'loading', value: true }));
    getNews(newsType);
  }, [newsType]);
  return (
    <div className='mn-home'>
      <Header />
      <div className='mn-home-news-list-wrapper'>
        <NewsFilter />
        <NewsList />
      </div>
    </div>
  );
};

export default Home;
