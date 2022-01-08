import { Box, TextField } from '@mui/material';
import React, { useRef } from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';
import { useCustomer } from '../../../../context/CustomerContext';
import CustomerTextField from './CustomerTextField';

export default function CustomerFormName({ toNextStep, toPrevStep }) {
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

  const CustomerTextField2 = props => {
    const inputRef = useRef();
    const { state, actions } = useCustomer();
    const { handleInputChange, focusInput } = actions;
    const { name } = props;
    // const element = inputRef.current;

    const focusTextField = () => focusInput(inputRef.current);

    const handleChange = () => handleInputChange(inputRef.current);

    return (
      <TextField
        value={state[name]}
        inputRef={inputRef}
        onChange={handleChange}
        onClick={focusTextField}
        fullWidth
        {...props}
      />
    );
  };

  const { state, actions, more } = useCustomer();
  const { firstName, lastName, formStep } = state;
  const { handleInputChange, focusInput } = actions;

  const keyboardOptions = {
    next: {
      label: 'Next Page',
      action: toNextStep,
      // disabled: !firstName,
    },
    prev: {
      label: 'Prev Page',
      action: toPrevStep,
    },
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box component="form" sx={styles.form}>
          <Box sx={styles.inputWrapper}>
            <CustomerTextField
              label="First Name"
              sx={styles.firstName}
              name="firstName"
              autoFocus
              required
            />
          </Box>
          <Box
            flex="1 1 55%"
            borderRadius="4px"
            backgroundColor={theme.palette.secondary[50]}
          >
            <CustomerTextField
              label="Last Name"
              sx={styles.lastName}
              name="lastName"
            />
            {/* <TextField
              label="Last Name"
              name="lastName"
              sx={styles.lastName}
              value={lastName}
            /> */}
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
        <Keyboard {...keyboardOptions} />
      </Box>
    </Box>
  );
}
