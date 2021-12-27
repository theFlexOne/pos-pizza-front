import Box from '@mui/system/Box';
import React from 'react';
import Cart from './Cart';
import CustomerInfoBox from './CustomerInfoBox';
import { useTheme } from '@emotion/react';
import { Divider } from '@mui/material';

export default function SidePanel({
  cart,
  removeFromCart,
  customer,
  changeCustomer,
}) {
  const theme = useTheme();
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      backgroundColor={theme.palette.secondary[500]}
    >
      <CustomerInfoBox customer={customer} changeCustomer={changeCustomer} />
      <Divider sx={{ borderColor: 'rgba(0,0,0,0.5)' }} />
      <Cart removeFromCart={removeFromCart} cart={cart} />
    </Box>
  );
}
