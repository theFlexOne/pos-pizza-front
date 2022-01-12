import { Box, Button, Typography } from '@mui/material';
<<<<<<< HEAD
import React, { forwardRef, useRef } from 'react';
import { useTheme } from '@emotion/react';
import ClearIcon from '@mui/icons-material/Clear';
import { useCustomer } from '../../../../context/CustomerContext';
import MaskedPhoneInput from '../../../../components/MaskedPhoneInput';
import { getFromSessionStorage } from '../../../../utils/utilityFunctions';

const CustomerContextButton = forwardRef(
  ({ onClick: onBtnClick, children, ...other }, ref) => {
    const { actions } = useCustomer();

    const handleClick = () => {
      onBtnClick(ref);
    };
    return (
      <Button
        ref={ref}
        variant="contained"
        sx={{ mt: 'auto' }}
        onClick={handleClick}
        {...other}
      >
        {children}
      </Button>
    );
  }
);

export default function CustomerLookup({ goToMenu, toNextStep }) {
=======
import React from 'react';
import { useTheme } from '@emotion/react';
import ClearIcon from '@mui/icons-material/Clear';
import CustomerTextField from './CustomerTextField';
import { useCustomer } from '../../../../context/CustomerContext';

export default function CustomerLookup({ goToMenu }) {
>>>>>>> main_MaskedPhoneInput
  const theme = useTheme();
  const styles = {
    page: {
      display: 'flex',
      flex: '1',
    },
    formContainer: {
      flex: '2',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '4rem',
      borderRight: `1.5px solid ${theme.palette.secondary[500]}`,
      backgroundColor: theme.palette.secondary[200],
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputWrapper: {
      bgcolor: theme.palette.secondary[50],
      mb: '1rem',
    },
    keypadContainer: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      padding: '3rem 1rem',
      gap: '1rem',
      bgcolor: theme.palette.secondary[400],
    },
    buttonsBox: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.5rem',
      bgcolor: '#ff00d4',
    },
  };
<<<<<<< HEAD
  const lookup = useRef();
  const { lookupCustomer } = useCustomer().actions;

  const handleLookup = async () => {
    const customer = await lookupCustomer();
    if (customer) {
      const order = await getFromSessionStorage('order');
      console.log(`order: `, order);
      sessionStorage.setItem(
        'order',
        JSON.stringify({ ...order, customer: customer })
      );
      goToMenu();
      return;
    }
    toNextStep();
  };
=======
  const { actions } = useCustomer();
>>>>>>> main_MaskedPhoneInput

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box sx={styles.form}>
          <Typography variant="h5" component="h1" marginBottom="2rem">
            Please enter telephone number:
          </Typography>
          <Box sx={styles.inputWrapper}>
            <CustomerTextField
              name="phoneNumber"
              label="Phone Number"
              autoFocus
            />
          </Box>
          <Button variant="contained" onClick={goToMenu}>
            SWITCH TO MENU
          </Button>
        </Box>
      </Box>
      <Box sx={styles.keypadContainer}>
        <Box sx={styles.buttonsBox}>
          <Typography
            component="h3"
            variant="body2"
            sx={{
              textDecoration: 'underline',
              textDecorationThickness: '.1rem',
              mt: 'auto',
            }}
          >
            **SPACE RESERVED FOR A NUMERIC TOUCH KEYPAD**
          </Typography>
<<<<<<< HEAD
          <CustomerContextButton ref={lookup} onClick={handleLookup}>
            LOOKUP
          </CustomerContextButton>
=======
          <Button
            onClick={() => actions.lookupCustomer()}
            variant="contained"
            sx={{ mt: 'auto' }}
          >
            LOOKUP TEL
          </Button>
>>>>>>> main_MaskedPhoneInput
          <Button
            variant="contained"
            // onClick={clearField}
            sx={{ mb: 'auto' }}
          >
            CLEAR <ClearIcon sx={{ ml: '1rem' }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

/* <TextField
              name="phoneNumber"
              label="Phone Number"
              value={phoneNumber}
              // onChange={handleChange}
              onChange={handleInputChange}
              onClick={focusTextField}
              fullWidth
              autoFocus
              required
            /> */
