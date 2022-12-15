import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContact = data => {
    const hasName = this.state.contacts.some(it => it.name === data.name);
    if (hasName) {
      Notify.warning(`Contact "${data.name}" is already exist.`);
      return;
    }

    const newContact = { ...data, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(it =>
      it.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Form addContact={this.addContact} />
        <Filter filter={filter} onChange={this.handleInputChange} />
        <ContactList
          contacts={contacts}
          deleteContact={this.deleteContact}
          filteredContacts={filteredContacts}
        />
      </div>
    );
  }
}
