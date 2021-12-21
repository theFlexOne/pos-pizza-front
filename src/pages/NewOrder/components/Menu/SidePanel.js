import Box from '@mui/system/Box';
import React from 'react';
import Cart from './Cart';
import CustomerInfoBox from './CustomerInfoBox';

export default function SidePanel({
  order,
  removeFromCart,
  customer,
  changeCustomer,
}) {
  return (
    <Box flex="1" display="flex" flexDirection="column">
      <CustomerInfoBox customer={customer} changeCustomer={changeCustomer} />
      <Cart order={order} />
    </Box>
  );
}
