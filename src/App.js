import React, { useState } from 'react';
import Container from './components/Container';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
  // useState React hook
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // update State values if button pressed
  const updateStatistics = statName => {
    switch (statName) {
      // update good State value
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      // update neutral State value
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      // update bad State value
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  // sum feedback
  const countTotalFeedback = () => good + neutral + bad;

  // % positive feedback
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={updateStatistics}
          />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </Container>
    </>
  );
};

export default App;
