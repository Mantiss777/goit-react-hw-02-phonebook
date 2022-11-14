import React from 'react';
import { Box } from './Box';
import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

// import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState({ visible: true });
    this.setState(prevState => ({
      name: prevState.name,
    }));
  };

  render() {
    return (
      <Box position="relative" as="main">
        <Section title="Please leave feedback">Phonebook </Section>
        <Form onSubmit={this.formSubmitHandler} />

        <Section title="Statistics">Contacts </Section>
        <Filter />
        <ContactList name={this.state.name} number={this.state.number} />
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
