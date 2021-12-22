import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { capAll } from '../../../../utils/textMods';
import { useTheme } from '@emotion/react';

const salesTax = 0.07;

const toMoneyString = num => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
};

const CartItem = ({ item, i }) => {
  return (
    <>
      <Box>
        <Box display="flex">
          <Typography marginRight="auto" paddingRight=".5rem">
            {capAll(item.name)}
          </Typography>
          <Typography price={item.price}>
            {toMoneyString(item.price)}
          </Typography>
        </Box>
        {item.toppings && (
          <Typography variant="body2">{item.toppings.join(', ')}</Typography>
        )}
      </Box>
      {/* {i < order.length && <Divider />} */}
    </>
  );
};

const CartTotal = ({ subtotal }) => {
  return (
    <Box
      display="flex"
      marginTop="auto"
      borderTop="2px solid rgba(0, 0, 0, 0.5)"
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="body2" alignSelf="center">
          SUBTOTAL
        </Typography>
        <Typography
          name="subtotal"
          component="p"
          variant="body2"
          alignSelf="center"
        >
          {toMoneyString(subtotal)}
        </Typography>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="body2" alignSelf="center">
          TAX
        </Typography>
        <Typography
          name="salesTax"
          component="p"
          variant="body2"
          alignSelf="center"
        >
          {toMoneyString(subtotal * salesTax)}
        </Typography>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="body2" alignSelf="center">
          TOTAL
        </Typography>
        <Typography
          name="total"
          component="p"
          variant="body2"
          alignSelf="center"
        >
          {toMoneyString(subtotal * (1 + salesTax))}
        </Typography>
      </Box>
    </Box>
  );
};

export default function Cart({ order }) {
  const [subtotal, setSubtotal] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const orderSum = order.reduce((sum, item) => {
      return sum + item.price;
    }, 0.0);
    setSubtotal(orderSum);
  }, [order]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="3"
      maxHeight="100%"
      paddingBottom=".5rem"
    >
      <Box
        padding=".5rem"
        flex="1 1 90%"
        backgroundColor={theme.palette.secondary[50]}
        margin="1rem .5rem"
        display="flex"
        flexDirection="column"
        borderRadius="4px"
      >
        {order && order.map((item, i) => <CartItem item={item} key={i} />)}
        <CartTotal subtotal={subtotal} />
      </Box>
      <Button type="submit" variant="contained" margin="0 .5rem">
        CHECKOUT
      </Button>
    </Box>
  );
}
