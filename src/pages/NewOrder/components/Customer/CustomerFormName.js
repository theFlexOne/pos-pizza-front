import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Keyboard from '../../../../components/Keyboard';

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

export default function CustomerFormName({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  nextPage,
}) {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const keyboard = useRef();

  return (
    <Box width="100%">
      <Box width="100%" height="50%">
        <Box component="form" sx={styles.form}>
          <TextField
            id="setFirstName"
            label="First Name"
            sx={styles.firstName}
            value={firstName}
            onChange={onFirstNameChange}
          />
          <TextField
            id="lastName"
            label="Last Name"
            sx={styles.lastName}
            value={lastName}
            onChange={onLastNameChange}
          />
        </Box>
      </Box>
      <Keyboard onBtnClick={nextPage} btnLabel="CONTINUE" />
    </Box>
  );
}
