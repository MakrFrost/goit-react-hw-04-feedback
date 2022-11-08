import { useState } from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function Feedback() {
  const options = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function setFeedback(option) {
    const name = option;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <section className={css.block}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={setFeedback} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage() + '%'}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
}

export default Feedback;
