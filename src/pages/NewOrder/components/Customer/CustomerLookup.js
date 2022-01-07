import { Box, Button, Typography } from '@mui/material';
import React, { forwardRef, useRef } from 'react';
import { useTheme } from '@emotion/react';
import ClearIcon from '@mui/icons-material/Clear';
import { useCustomer } from '../../../../context/CustomerContext';
import MaskedPhoneInput from '../../../../components/MaskedPhoneInput';
import {
  addToSessionsStorage,
  getFromSessionStorage,
} from '../../../../utils/utilityFunctions';

// const useRefs = () => {
//   const refs = {
//     toMenu: useRef(),
//     lookup: useRef(),
//     clear: useRef(),
//   };
//   return refs;
// };

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

export default function CustomerLookup({ focusTextField, goToMenu }) {
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
      bgColor: theme.palette.secondary[200],
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputWrapper: {
      bgcolor: theme.palette.secondary[50],
      mb: '1rem',
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
    keypadContainer: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      padding: '3rem 1rem',
      gap: '1rem',
    },
  };
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
      // addToSessionsStorage(
      //   'order',
      //   JSON.stringify({ ...{ ...order, customer: customer } })
      // );
      goToMenu();
    }
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box sx={styles.form}>
          <Typography variant="h5" component="h1" marginBottom="2rem">
            Please enter telephone number:
          </Typography>
          <Box sx={styles.inputWrapper}>
            <MaskedPhoneInput />
            {/* <TextField
              name="phoneNumber"
              label="Phone Number"
              value={phoneNumber}
              // onChange={handleChange}
              onChange={handleInputChange}
              onClick={focusTextField}
              fullWidth
              autoFocus
              required
            /> */}
          </Box>
          <Button variant="contained" onClick={goToMenu}>
            SWITCH TO MENU
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.keypadContainer,
          backgroundColor: theme.palette.secondary[900],
        }}
      >
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
          <CustomerContextButton ref={lookup} onClick={handleLookup}>
            LOOKUP
          </CustomerContextButton>
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
