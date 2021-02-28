import React from 'react'
import Statistics from '../statistics/Statistics'
import Notification from '../notification/Notification'
import FeedbackOptions from '../feedbackOptions/FeedbackOptions'
import Section from '../section/Section'

class Counter extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  }

  handleCounterGood=()=>{
    this.setState(prevState=>({
        good: prevState.good+1,
    }))
    
  }
  handleCounterNeutral=()=>{
    this.setState(prevState=>({
        neutral: prevState.neutral+1,
      
    }))
  }
  handleCounterBad=()=>{
    this.setState(prevState=>({
        bad: prevState.bad+1,
    }))
  }
  countTotalFeedback(){
    const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
  };
  countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};
  
  render(){
    const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return(
      <>
        <FeedbackOptions
          onCounterGood={this.handleCounterGood}
          onCounterNeutral={this.handleCounterNeutral}
          onCounterBad={this.handleCounterBad}
        />
      
        <Section title="Statistics">
          {total === 0 ? (<Notification message="No feedback given" />) : (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
			  	)}
        </Section>
      </>
    )
  }
}
export default Counter