import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';
import ClearIcon from '@mui/icons-material/Clear';
import Cleave from 'cleave.js/react';

const MaskedTextField = props => {
  const { inputRef, ...otherProps } = props;
  const options = {
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-', '-'],
    numericOnly: true,
    href: ref => inputRef(ref),
  };
  return <Cleave {...otherProps} />;
};

export default function CustomerLookup({
  phone,
  onPhoneNumberChange,
  focusTextField,
  lookupPhoneNumber,
  clearField,
  goToMenu,
  onInputChange,
}) {
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

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box sx={styles.form}>
          <Typography variant="h5" component="h1" marginBottom="2rem">
            Please enter telephone number:
          </Typography>
          <Box sx={styles.inputWrapper}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              value={phone}
              // onChange={handleChange}
              onChange={onInputChange}
              onClick={focusTextField}
              fullWidth
              autoFocus
              required
            />
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
          <Button
            onClick={lookupPhoneNumber}
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
    </Box>
  );
}
