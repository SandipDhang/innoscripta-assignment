import React, { useState } from 'react';
import { Button, Container, Header } from '../components/common';
import { useNavigate } from 'react-router-dom';

const preferenceData = {
  Industry: [
    'FinTech',
    'Healthcare',
    'IT',
    'Banking',
    'Construction',
    'Energy',
    'Automotive',
  ],
  Interest: [
    'Technology',
    'Business',
    'Public Speaking',
    'Communication',
    'Gaming',
    'Comedy',
    'Current Affairs',
  ],
};

const Preference = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({});
  const redirectToHome = () => navigate('/');
  const togglePreference = (key, value) => {
    const existValues = selectedOptions[key];
    if (existValues?.includes(value)) {
      setSelectedOptions({
        ...selectedOptions,
        [key]: existValues?.filter((i) => i !== value),
      });
    } else {
      setSelectedOptions({
        ...selectedOptions,
        [key]: [...(existValues || []), value],
      });
    }
  };
  return (
    <div className='mn-home'>
      <Header />
      <Container>
        <div className='mn-preference-wrapper'>
          <h1 className='preference-header'>Customize Your Feed</h1>
          {Object.keys(preferenceData).map((preference) => (
            <div className='preference-section' key={preference}>
              <p className='section-heading'>Industry</p>
              <div className='section-options'>
                {preferenceData[preference].map((item) => (
                  <Button
                    key={item}
                    className={`select-option ${
                      selectedOptions?.[preference]?.includes(item)
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => togglePreference(preference, item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          ))}

          <div className='preference-action'>
            <Button className={' action-btn save-btn'} onClick={redirectToHome}>
              Save
            </Button>
            <Button
              className={' action-btn cancel-btn'}
              onClick={redirectToHome}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Preference;
