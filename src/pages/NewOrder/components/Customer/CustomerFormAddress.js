import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import Keyboard from '../../../../components/Keyboard';
import Keyboard from '../../../../lib/Keyboard/Keyboard';
import { useTheme } from '@emotion/react';
import { useCustomer } from '../../../../context/CustomerContext';
import CustomerTextField from './CustomerTextField';
import useStyles from '../../../../hooks/useStyles';

export default function CustomerFormAddress({ prevPage }) {
  const { state, actions } = useCustomer();
  const { streetAddress } = state;
  const { handleCustomerSubmit } = actions;
  const styles = useStyles().customerFormAddress;

  const options = {
    nextBtn: {
      label: 'Next Page',
      action: handleCustomerSubmit,
      disabled: !streetAddress,
    },

    prevBtn: {
      label: 'Prev Page',
      action: prevPage,
    },
  };

  const handleKeyDown = ({ key }) => key === 'Enter' && handleCustomerSubmit();

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box component="form" sx={styles.form} onKeyDown={handleKeyDown}>
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
        <Keyboard options={options} />
      </Box>
      {/* <Keyboard onBtnClick={onCustomerSubmit} btnLabel="START ORDER" /> */}
    </Box>
  );
}
