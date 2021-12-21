import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function CustomerLookup({
  phone,
  onPhoneNumberChange,
  lookupPhoneNumber,
  clearField,
}) {
  const checkForCustomer = () => {};

  // const [isNewCustomer, setIsNewCustomer] = useState(true);

  return (
    <Box display="flex" flex="1">
      <Box
        flex="2"
        display="flex"
        alignItems="center"
        flexDirection="column"
        paddingTop="4rem"
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h5" component="h1" marginBottom="2rem">
            Please enter telephone number:
          </Typography>
          <Box>
            <TextField
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              label="Phone Number"
              variant="outlined"
              value={phone}
              onChange={onPhoneNumberChange}
              fullWidth
              autoFocus
              required
            />
            <Button onClick={clearField}>CLEAR</Button>
          </Box>
        </Box>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        padding="3rem 1rem"
        gap="1rem"
      >
        <Box flex="1" backgroundColor="#393837"></Box>
        <Button onClick={lookupPhoneNumber} variant="contained">
          LOOKUP PHONE NUMBER
        </Button>
      </Box>
    </Box>
  );
}
