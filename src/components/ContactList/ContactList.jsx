import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  state = {};

  render() {
    const { deleteContact, filteredContacts } = this.props;

    return (
      <>
        <ul className={css.container}>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.li}>
                <span className={css.name}> {name}: </span>
                <span className={css.number}>{number} </span>
                <button
                  className={css.btn}
                  type="button"
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
