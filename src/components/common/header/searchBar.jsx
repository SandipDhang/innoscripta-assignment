import React from 'react';
import { CloseIcon, SearchIcon } from '../../../assets/icons';
import Button from '../button';

const SearchBar = ({ onCancel, value, onChange }) => {
  return (
    <div className='mn-search'>
      <div className='search-bar-icon'>
        <SearchIcon />
      </div>
      <div className='search-bar-input'>
        <input
          type='text'
          onChange={onChange}
          value={value}
          placeholder='Search'
        />
      </div>
      <div className='search-bar-icon'>
        <Button onClick={onCancel} className='search-close-btn'>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
