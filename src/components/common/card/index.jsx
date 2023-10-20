import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='mn-card'>
      <div className='card-header'>{data?.heading}</div>
      <div
        className='card-thumbnail'
        style={{ backgroundImage: `url(${data?.thumbnail})` }}
      />
      <div className='card-title'>{data?.title}</div>
      <div className='card-text'>
        {data?.text?.length > 70
          ? `${data?.text?.substr(0, 70)} ...`
          : data?.text}
      </div>
    </div>
  );
};

export default Card;
