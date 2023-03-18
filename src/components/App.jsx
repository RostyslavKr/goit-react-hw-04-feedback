import React, { useState } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    if (option === 'good') {
      setGood(good => good + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral => neutral + 1);
    }
    if (option === 'bad') {
      setBad(bad => bad + 1);
    }
  };

  const optionsFeedback = ['good', 'neutral', 'bad'];
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );
  return (
    <Layout>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsFeedback}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Layout>
  );
}
