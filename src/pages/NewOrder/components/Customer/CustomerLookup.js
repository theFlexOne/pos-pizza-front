import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CustomerTextField from './CustomerTextField';
import { useCustomer } from '../../../../context/CustomerContext';
import useStyles from '../../../../hooks/useStyles';
import NumPad from '../../../../components/NumPad';

export default function CustomerLookup({ goToMenu }) {
  const styles = useStyles().customerLookup;
  const { actions } = useCustomer();
  const { lookupCustomer, handleClearInput } = actions;
  const inputRef = useRef();

  const clearField = () => handleClearInput('phoneNumber');
  const handleKeyDown = ({ key }) => key === 'Enter' && lookupCustomer();

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box sx={styles.form} onKeyDown={handleKeyDown}>
          <Typography variant="h5" component="h1" marginBottom="2rem">
            Please enter telephone number:
          </Typography>
          <Box sx={styles.inputWrapper}>
            <CustomerTextField
              ref={inputRef}
              name="phoneNumber"
              label="Phone Number"
              autoFocus
              // flow
            />
          </Box>
          <Button variant="contained" onClick={goToMenu}>
            SWITCH TO MENU
          </Button>
        </Box>
        <Box>
          <Typography component="h1" variant="h3" sx={{ mt: '5rem' }}>
            POS {} Pizza
          </Typography>
          <Typography component="h1" variant="h5">
            (Point-of-Sales)
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.keypadContainer}>
        <NumPad />
        <Button
          onClick={() => lookupCustomer()}
          variant="contained"
          sx={{ mt: 'auto' }}
        >
          LOOKUP TEL
        </Button>
        <Button variant="contained" onClick={clearField} sx={{ mb: 'auto' }}>
          CLEAR <ClearIcon sx={{ ml: '1rem' }} />
        </Button>
      </Box>
    </Box>
  );
}
