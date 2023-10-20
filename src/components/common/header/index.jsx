import React, { useState } from 'react';
import Logo from '../logo';
import Button from '../button';
import { PreferenceIcon, SearchIcon } from '../../../assets/icons';
import SearchBar from './searchBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews, setNewsState } from '../../../state/slices/newsSlice';
import Container from '../container';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const { searchKey } = useSelector(selectNews);

  const handleCancel = () => {
    setShowSearch(false);
    dispatch(setNewsState({ key: 'searchKey', value: '' }));
  };

  return (
    <div className='mn-header-wrapper'>
      <Container>
        <div className='mn-header'>
          {!showSearch && (
            <div className='mn-brand'>
              <Logo />
            </div>
          )}
          <div className='mn-header-actions'>
            {!showSearch && (
              <Button onClick={() => setShowSearch(true)}>
                <SearchIcon />
              </Button>
            )}
            {showSearch && (
              <SearchBar
                onCancel={handleCancel}
                value={searchKey}
                onChange={(e) =>
                  dispatch(
                    setNewsState({ key: 'searchKey', value: e.target.value })
                  )
                }
              />
            )}
            <Button onClick={() => navigate('/preference')}>
              <PreferenceIcon />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
