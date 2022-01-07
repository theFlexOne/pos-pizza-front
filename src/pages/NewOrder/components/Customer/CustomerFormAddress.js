import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';
import { useCustomer } from '../../../../context/CustomerContext';

export default function CustomerFormAddress({
  focusTextField,
  onCustomerSubmit,
  prevPage,
}) {
  const { state, actions, customer } = useCustomer();
  const { streetAddress, secondaryAddress } = state;
  const { handleInputChange, addCustomerToList } = actions;
  const { fullAddress } = customer;
  console.log(fullAddress());

  const theme = useTheme();
  const styles = {
    page: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    formContainer: {
      flex: 1,
      bgcolor: theme.palette.secondary[200],
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      gap: '1rem',
    },
    inputWrapper: {
      backgroundColor: theme.palette.secondary[50],
      borderRadius: '4px',
    },
    streetAddress: {
      flexBasis: '60%',
    },
    secondaryAddress: {
      flexBasis: '35%',
    },
    city: {
      flexBasis: '65%',
    },
    state: {
      flexBasis: '30%',
    },
    keyboardContainer: {
      display: 'flex',
      flex: '1',
      height: 'auto',
      padding: '.75rem 1.25rem',
      backgroundColor: theme.palette.secondary[900],
    },
  };

  const nextBtn = {
    label: 'Next Page',
    action: onCustomerSubmit,
    disabled: !streetAddress,
  };

  const prevBtn = {
    label: 'Prev Page',
    action: prevPage,
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box component="form" sx={styles.form}>
          <Box sx={{ ...styles.inputWrapper, ...styles.streetAddress }}>
            <TextField
              name="streetAddress"
              label="Street Address"
              value={streetAddress}
              onChange={handleInputChange}
              onClick={focusTextField}
              fullWidth
              autoFocus
              required
            />
          </Box>
          <Box sx={{ ...styles.inputWrapper, ...styles.secondaryAddress }}>
            <TextField
              onClick={focusTextField}
              name="secondaryAddress"
              label="Apt/Suite/Other"
              value={secondaryAddress}
              onChange={handleInputChange}
              fullWidth
            />
          </Box>
          <Box sx={{ ...styles.inputWrapper, ...styles.city }}>
            <TextField
              onClick={focusTextField}
              name="city"
              label="City"
              value="Gravel Falls"
              disabled
              fullWidth
            />
          </Box>
          <Box sx={{ ...styles.inputWrapper, ...styles.state }}>
            <TextField
              onClick={focusTextField}
              name="state"
              label="State"
              value="Minnesota"
              disabled
              fullWidth
            />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.keyboardContainer}>
        <Button onClick={() => console.log('click')}>SEND</Button>
        <Keyboard next={nextBtn} prev={prevBtn} />
      </Box>
      {/* <Keyboard onBtnClick={onCustomerSubmit} btnLabel="START ORDER" /> */}
    </Box>
  );
}
