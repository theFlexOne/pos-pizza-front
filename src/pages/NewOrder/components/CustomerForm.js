import { Box, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  firstName: {
    mr: '2rem',
    flexBasis: '30%',
  },
  lastName: {
    flexBasis: '40%',
  },
};

export default function CustomerForm() {
  const [phoneNumber, setPhoneNumber] = useState('   -   -    ');
  const [input, setInput] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const keyboard = useRef();

  return (
    <Box width="100vw">
      <Box width="100%" height="50%">
        <Box component="form" sx={styles.form}>
          <TextField
            id="setFirstName"
            label="First Name"
            sx={styles.firstName}
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            id="lastName"
            label="Last Name"
            sx={styles.lastName}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        // input={input}
        // setInput={setInput}
        // keyboard={keyboard}
        width="100%"
        height="50%"
        backgroundColor="#393837"
      ></Box>
    </Box>
  );
}
