import React from 'react';
import s from './Statistics.module.css';
import { number, func } from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.statList}>
      <li className={s.stat}>
        <span>Good:</span> {good}
      </li>
      <li className={s.stat}>
        <span>Neutral:</span> {neutral}
      </li>
      <li className={s.stat}>
        <span>Bad:</span> {bad}
      </li>
      <li className={s.stat}>
        <span>Total:</span> {total()}
      </li>
      <li className={s.stat}>
        <span>Positive feedback:</span> {positivePercentage()}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: number.isRequired,
  neutral: number.isRequired,
  bad: number.isRequired,
  total: func.isRequired,
  positivePercentage: func.isRequired,
};

export default Statistics;
