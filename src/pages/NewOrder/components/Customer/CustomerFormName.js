import { Box } from '@mui/material';
import React from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';
import CustomerTextField from './CustomerTextField';
import { useCustomer } from '../../../../context/CustomerContext';

export default function CustomerFormName({ nextPage, prevPage }) {
  const { firstName } = useCustomer().state;
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
    // keyboardContainer: { backgroundColor: theme.palette.secondary[900] },
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

  // const { state, actions, customer } = useCustomer();
  // const { firstName, lastName } = state;
  // const { handleInputChange } = actions;

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
            <CustomerTextField
              label="First Name"
              name="firstName"
              autoFocus
              sx={styles.firstName}
            />
          </Box>
          <Box
            flex="1 1 55%"
            borderRadius="4px"
            backgroundColor={theme.palette.secondary[50]}
          >
            <CustomerTextField
              label="Last Name"
              name="lastName"
              sx={styles.lastName}
              // value={lastName}
              // onChange={handleInputChange}
              // onClick={focusTextField}
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
