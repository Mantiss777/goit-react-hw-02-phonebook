import React from 'react';
import { Box } from './Box';
import Section from './Section/Section';
import Form from './Form/Form';
// import FeedbackOptions from './Feedback/Feedback';
// import Statistics from './Statistics/Statistics';

// import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Box position="relative" as="main">
        <Section title="Please leave feedback">Phonebook </Section>
        <Form onSubmit={this.formSubmitHandler} />

        <Section title="Statistics">Contacts </Section>
        {/* {!this.state.visible && (
          <Notification message="There is no feedback">
            There is no feedback
          </Notification>
        )}

        {this.state.visible && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positiveFeedbeck}
          />
        )} */}
      </Box>
    );
  }
}
