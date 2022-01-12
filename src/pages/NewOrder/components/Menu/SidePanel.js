import Box from '@mui/system/Box';
import React from 'react';
import Cart from './Cart';
import CustomerInfoBox from './CustomerInfoBox';
import { useTheme } from '@emotion/react';
import { Divider } from '@mui/material';

export default function SidePanel({ goToCustomer }) {
  const theme = useTheme();
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      backgroundColor={theme.palette.secondary[500]}
    >
      <CustomerInfoBox goToCustomer={goToCustomer} />
      <Divider sx={{ borderColor: 'rgba(0,0,0,0.5)' }} />
      <Cart />
    </Box>
  );
}
