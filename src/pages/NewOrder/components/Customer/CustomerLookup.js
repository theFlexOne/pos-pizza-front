import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';

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
    backgroundColor: '',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsBox: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
  },
  keypadContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem 1rem',
    gap: '1rem',
  },
};

export default function CustomerLookup({
  phone,
  onPhoneNumberChange,
  lookupPhoneNumber,
  clearField,
  goToMenu,
}) {
  const theme = useTheme();

  return (
    <Box sx={styles.page}>
      <Box
        sx={{
          ...styles.formContainer,
          backgroundColor: theme.palette.secondary[200],
        }}
      >
        <Box sx={styles.form}>
          <Typography variant="h5" component="h1" marginBottom="2rem">
            Please enter telephone number:
          </Typography>
          <Box
            backgroundColor={theme.palette.secondary[50]}
            sx={{ mb: '1rem' }}
          >
            <TextField
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              label="Phone Number"
              variant="filled"
              value={phone}
              onChange={onPhoneNumberChange}
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
        <Box
          sx={{
            ...styles.buttonsBox,
            backgroundColor: '#38D435',
          }}
        >
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
            LOOKUP PHONE NUMBER
          </Button>
          <Button variant="contained" onClick={clearField} sx={{ mb: 'auto' }}>
            CLEAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
