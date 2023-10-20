import React from 'react';
import Container from '../common/container';
import { Button } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews, setNewsState } from '../../state/slices/newsSlice';

const newsTypes = ['Feed', 'All'];

const NewsFilter = () => {
  const dispatch = useDispatch();
  const { newsType } = useSelector(selectNews);
  return (
    <Container className='mn-news-filter'>
      <div className='filter-btns'>
        {newsTypes.map((type) => (
          <Button
            key={type}
            className={`news-type-btn ${
              newsType === type.toLowerCase() ? 'selected' : ''
            }`}
            onClick={() =>
              dispatch(
                setNewsState({ key: 'newsType', value: type.toLowerCase() })
              )
            }
          >
            {type}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default NewsFilter;
