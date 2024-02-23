import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import React, { Component } from 'react';
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleLeaveFeedback = (e) => {
      const name = e.target.name;
        this.setState((prevState) => {
          return {
            [name] : prevState[name] + 1
          }
        });
    }

    countTotalFeedback = ()=> {
      const { good, neutral, bad } = this.state;
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
        const { good} = this.state;
        return Math.ceil(good / this.countTotalFeedback() * 100)
    }

  render() {
    const {good, neutral, bad} = this.state
    return (
      <>
        <h1>Expresso</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}>
          </FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
         { !this.countTotalFeedback() ? <Notification message="There is no feedback"/> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage} />}
        </Section>
      </>
    )
  }
}
