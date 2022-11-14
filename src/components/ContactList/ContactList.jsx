import React from 'react';
import { Box } from '../Box';

const ContactList = ({ name, number }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    as="section"
  >
    <ul>
      <li>
        <span>{name}</span>
        <span>{number}</span>
      </li>
    </ul>
  </Box>
);

export default ContactList;
