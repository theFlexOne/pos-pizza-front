import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& > *': {
      borderRadius: '4px',
    },
  },
  firstName: {
    flex: '1 1 30%',
  },
  lastName: {
    flex: '1 1 40%',
  },
};

export default function CustomerFormName({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  nextPage,
  prevPage,
}) {
  const theme = useTheme();

  console.log(theme);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      backgroundColor={theme.palette.secondary[200]}
    >
      <Box flex="1" display="flex" justifyContent="center">
        <Box
          component="form"
          sx={styles.form}
          display="inherit"
          flexBasis="70%"
          gap="1.5rem"
        >
          <Box
            backgroundColor={theme.palette.secondary[50]}
            flex="1 1 35%"
            // borderRadius="4px"
          >
            <TextField
              id="setFirstName"
              label="First Name"
              sx={styles.firstName}
              value={firstName}
              onChange={onFirstNameChange}
              fullWidth
              autoFocus
              required
            />
          </Box>
          <Box
            flex="1 1 55%"
            borderRadius="4px"
            backgroundColor={theme.palette.secondary[50]}
          >
            <TextField
              id="lastName"
              label="Last Name"
              sx={styles.lastName}
              value={lastName}
              onChange={onLastNameChange}
              fullWidth
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
        <Keyboard
          onBtnClick={nextPage}
          prev={prevPage}
          disabled={!firstName}
          btnLabel="NEXT PAGE"
        />
      </Box>
    </Box>
  );
}
