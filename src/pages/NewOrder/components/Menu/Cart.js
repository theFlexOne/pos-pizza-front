import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { capAll } from '../../../../utils/textMods';

const salesTax = 0.07;

const toMoneyString = num => '$' + num.toFixed(2);

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
          <Typography variant="caption">{item.toppings.join(', ')}</Typography>
        )}
      </Box>
      {/* {i < order.length && <Divider />} */}
    </>
  );
};

const CartTotal = ({ subtotal }) => {
  return (
    <Box display="flex">
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography name="subtotal" component="p" variant="caption">
          {subtotal}
        </Typography>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography name="salesTax" component="p" variant="caption">
          {subtotal * salesTax}
        </Typography>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography name="total" component="p" variant="caption">
          {subtotal * (1 + salesTax)}
        </Typography>
      </Box>
    </Box>
  );
};

export default function Cart({ order }) {
  const [subtotal, setSubtotal] = useState(0.0);

  useEffect(() => {
    const orderSum = order.reduce((sum, item) => {
      return sum + item.price;
    }, 0.0);
    setSubtotal(orderSum);
  }, [order]);

  return (
    <Box display="flex" flexDirection="column" flex="3" maxHeight="100%">
      <Box flex="1 1 90%" backgroundColor="#cedadf" margin="1rem .5rem">
        {order && order.map((item, i) => <CartItem item={item} key={i} />)}
        <CartTotal subtotal={subtotal} />
      </Box>
      <Button type="submit" variant="contained">
        CHECKOUT
      </Button>
    </Box>
  );
}
