import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import './Cart.css';
import Typography from '@mui/material/Typography';
import { Box, Container, Divider } from '@mui/material';

export default function Cart({ order }) {
  const CartItem = ({ item, i }) => {
    return (
      <>
        <Box>
          <Typography>{item.name}</Typography>
          <Typography>{item.price}</Typography>
        </Box>
        {i + 1 < order.length && <Divider />}
      </>
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="3"
      gridRows="3 / 7"
      maxHeight="100%"
    >
      <Box component="ol" flexGrow="1">
        {order.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </Box>
      <Button type="submit" variant="contained" className="checkout-btn">
        CHECKOUT
      </Button>
    </Box>
  );
}
