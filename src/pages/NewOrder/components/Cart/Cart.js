import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
// import './Cart.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { capAll } from '../../../../utils/textMods';
import { Container } from '@mui/material';

const displayPrice = num => {
  return '$' + num.toFixed(2);
};
const CartItem = ({ item, i }) => {
  return (
    <>
      <Box>
        <Box display="flex">
          <Typography marginRight="auto" paddingRight=".5rem">
            {capAll(item.name)}
          </Typography>
          <Typography price={item.price}>{displayPrice(item.price)}</Typography>
        </Box>
        <Typography variant="caption">{item.toppings.join(', ')}</Typography>
      </Box>
      {/* {i < order.length && <Divider />} */}
    </>
  );
};

const CartTotal = ({ total }) => {
  return (
    <Typography component={Box} textAlign="end">
      {displayPrice(total)}
    </Typography>
  );
};

export default function Cart({ order }) {
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const orderSum = order.reduce((sum, item) => {
      return sum + item.price;
    }, 0.0);
    setTotal(orderSum);
  }, [order]);

  console.log(order);
  console.log(displayPrice(total));

  return (
    <Box display="flex" flexDirection="column" flex="3" maxHeight="100%">
      <Box flex="1 1 90%" backgroundColor="#cedadf" margin="1rem .5rem">
        {order && order.map((item, i) => <CartItem item={item} key={i} />)}
        <CartTotal total={total} />
      </Box>
      <Button type="submit" variant="contained">
        CHECKOUT
      </Button>
    </Box>
  );
}
