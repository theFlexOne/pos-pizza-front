import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Keyboard from '../../../../components/Keyboard';
import { useTheme } from '@emotion/react';

const styles = {
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: '1rem',
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
};

export default function CustomerFormAddress({
  streetAddress,
  secondaryAddress,
  onStreetAddressChange,
  onSecondaryAddressChange,
  onCustomerSubmit,
  prevPage,
}) {
  const theme = useTheme();

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
    <Box width="100%" display="flex" flexDirection="column">
      <Box flex="1">
        <Box component="form" sx={styles.form}>
          <TextField
            id="streetAddress"
            label="Street Address"
            sx={styles.streetAddress}
            value={streetAddress}
            onChange={onStreetAddressChange}
            fullWidth
            autoFocus
            required
          />
          <TextField
            id="secondaryAddress"
            label="Apt/Suite/Other"
            sx={styles.secondaryAddress}
            value={secondaryAddress}
            onChange={onSecondaryAddressChange}
            fullWidth
          />
          <TextField
            id="city"
            label="City"
            value="Gravel Falls"
            sx={styles.city}
            disabled
            fullWidth
          />
          <TextField
            id="state"
            label="State"
            value="Minnesota"
            sx={styles.state}
            disabled
            fullWidth
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        height="auto"
        padding=".75rem 1.25rem"
        backgroundColor={theme.palette.secondary[900]}
      >
        <Keyboard next={nextBtn} prev={prevBtn} />
      </Box>
      {/* <Keyboard onBtnClick={onCustomerSubmit} btnLabel="START ORDER" /> */}
    </Box>
  );
}
