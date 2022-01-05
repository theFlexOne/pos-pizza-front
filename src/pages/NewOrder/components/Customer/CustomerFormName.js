import { Box, TextField } from '@mui/material';
import React from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';
import { useCustomer } from '../../../../context/CustomerContext';

export default function CustomerFormName({
  // firstName,
  // lastName,
  // onInputChange,
  focusTextField,
  // onFirstNameChange,
  // onLastNameChange,
  nextPage,
  prevPage,
}) {
  const theme = useTheme();
  const styles = {
    page: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.secondary[200],
    },
    formContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flexBasis: '70%',
      gap: '1.5rem',

      '& > *': {
        borderRadius: '4px',
      },
    },
    inputWrapper: {
      backgroundColor: theme.palette.secondary[50],
      flex: '1 1 35%',
    },
    firstName: {
      flex: '1 1 30%',
    },
    lastName: {
      flex: '1 1 40%',
    },
  };

  const { state, actions, customer } = useCustomer();
  const { firstName, lastName } = state;
  const { handleInputChange } = actions;

  const nextBtn = {
    label: 'Next Page',
    action: nextPage,
    disabled: !firstName,
  };

  const prevBtn = {
    label: 'Prev Page',
    action: prevPage,
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box component="form" sx={styles.form}>
          <Box sx={styles.inputWrapper}>
            <TextField
              label="First Name"
              sx={styles.firstName}
              value={firstName}
              onChange={handleInputChange}
              onClick={focusTextField}
              name="firstName"
              fullWidth
              autoFocus
              required
            />
          </Box>
          <Box
            flex="1 1 55%"
            borderRadius="4px"
            backgroundColor={theme.palette.secondary[50]}
          >
            <TextField
              label="Last Name"
              name="lastName"
              sx={styles.lastName}
              value={lastName}
              onChange={handleInputChange}
              onClick={focusTextField}
              fullWidth
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        height="auto"
        padding=".75rem 1.25rem"
        backgroundColor={theme.palette.secondary[900]}
      >
        <Keyboard next={{ ...nextBtn }} prev={{ ...prevBtn }} />
      </Box>
    </Box>
  );
}
