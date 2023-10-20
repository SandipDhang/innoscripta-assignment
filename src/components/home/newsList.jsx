import React from 'react';
import Container from '../common/container';
import { useSelector } from 'react-redux';
import { selectNews } from '../../state/slices/newsSlice';
import { Card, Loader } from '../common';
import { searchDataset } from '../../utility';

const NewsList = () => {
  const { loading, news, searchKey } = useSelector(selectNews);
  return (
    <Container className='mn-news-wrapper'>
      <div className='mn-news-list'>
        {loading && <Loader />}
        {!loading &&
          news?.length > 0 &&
          searchDataset(news, searchKey)?.map(
            (item, idx) =>
              item?.title !== '[Removed]' && (
                <div className='mn-news-card' key={`News_${idx}`}>
                  <Card
                    data={{
                      title: item?.title,
                      text: item?.description,
                      thumbnail: item?.urlToImage,
                      heading: item?.source?.name,
                    }}
                  />
                </div>
              )
          )}
      </div>
    </Container>
  );
};

export default NewsList;
