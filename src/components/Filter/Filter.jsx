import React from 'react';
import { Box } from '../Box';
// import { nanoid } from 'nanoid';

const Filter = ({ name, number }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    as="section"
  >
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        //   value={this.state.number}
        //   onChange={this.handleNumberChange}

        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  </Box>
);

export default Filter;
