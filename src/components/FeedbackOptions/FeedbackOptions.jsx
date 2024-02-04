import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsList, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => (
        <li key={option}>
          <FeedbackButton type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </FeedbackButton>
        </li>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
