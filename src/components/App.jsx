import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import React from 'react';
import { useState } from 'react';

export default function App() {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });
    const { good, bad, neutral } = state;

    const handleLeaveFeedback = e => {
        const name = e.target.name;
        setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.ceil((good / countTotalFeedback()) * 100);
    };

    return (
        <>
            <h1>Expresso</h1>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(state)}
                    onLeaveFeedback={handleLeaveFeedback}
                ></FeedbackOptions>
            </Section>

            <Section title="Statistics">
                {!countTotalFeedback() ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback}
                        positivePercentage={countPositiveFeedbackPercentage}
                    />
                )}
            </Section>
        </>
    );
}
