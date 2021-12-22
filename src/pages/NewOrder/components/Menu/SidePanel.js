import Box from '@mui/system/Box';
import React from 'react';
import Cart from './Cart';
import CustomerInfoBox from './CustomerInfoBox';
import { useTheme } from '@emotion/react';

export default function SidePanel({
  order,
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
      <Cart order={order} />
    </Box>
  );
}
