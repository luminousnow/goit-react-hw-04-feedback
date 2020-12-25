import React from 'react';
import s from './FeedbackOptions.module.css';
import { array, func } from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(statName => {
    return (
      <button
        key={statName}
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback(statName)}
      >
        {statName}
      </button>
    );
  });
}

FeedbackOptions.propTypes = {
  options: array.isRequired,
  onLeaveFeedback: func.isRequired,
};

export default FeedbackOptions;
