import Box from '@mui/system/Box';
import React from 'react';
import Cart from './Cart/Cart';
import CustomerInfoBox from './CustomerInfoBox/CustomerInfoBox';

export default function SidePanel({ order, removeFromCart, customer }) {
  return (
    <Box flex="1" display="flex" flexDirection="column">
      <CustomerInfoBox customer={customer} />
      <Cart order={order} />
    </Box>
  );
}
