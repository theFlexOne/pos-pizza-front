import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';
import { useCustomer } from '../../../../context/CustomerContext';
import CustomerTextField from './CustomerTextField';
import useStyles from '../../../../hooks/useStyles';

export default function CustomerFormAddress({ prevPage }) {
  const { state, actions } = useCustomer();
  const { streetAddress } = state;
  const { handleCustomerSubmit } = actions;
  const theme = useTheme();
  const styles = useStyles().customerFormAddress;
  const nextBtn = {
    label: 'Next Page',
    action: handleCustomerSubmit,
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
            <CustomerTextField
              name="streetAddress"
              label="Street Address"
              autoFocus
              required
            />
          </Box>
          <Box sx={{ ...styles.inputWrapper, ...styles.secondaryAddress }}>
            <CustomerTextField
              name="secondaryAddress"
              label="Apt/Suite/Other"
            />
          </Box>
          <Box sx={{ ...styles.inputWrapper, ...styles.city }}>
            <TextField
              name="city"
              label="City"
              value="Gravel Falls"
              disabled
              fullWidth
            />
          </Box>
          <Box sx={{ ...styles.inputWrapper, ...styles.state }}>
            <TextField
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
        <Keyboard next={nextBtn} prev={prevBtn} />
      </Box>
      {/* <Keyboard onBtnClick={onCustomerSubmit} btnLabel="START ORDER" /> */}
    </Box>
  );
}
