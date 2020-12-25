import React, { Component } from 'react';
import Container from './components/Container';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Один метод на різні Батони
  updateStatistics = statName => {
    this.setState(prevState => ({
      [statName]: prevState[statName] + 1,
    }));
  };

  // сума відгуків
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, stat) => acc + stat, 0);
  };

  // % Позитивних від загальної кількості
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      updateStatistics,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={updateStatistics}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
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
    );
  }
}

export default App;
