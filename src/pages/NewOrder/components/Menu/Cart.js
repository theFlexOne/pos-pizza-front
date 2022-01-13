import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import CartItem from './CartItem';
import { toMoneyString } from '../../../../utils/textMods';
import { useOrder } from '../../../../context/OrderContext';
import useStyles from '../../../../hooks/useStyles';

const SALES_TAX = 0.07;

const CartTotal = ({ subtotal }) => {
  const CartTotalCell = ({ label, children }) => {
    const styles = useStyles().cart;
    return (
      <Box sx={styles.cell}>
        <Typography variant="body2" alignSelf="center">
          {label.toUpperCase()}
        </Typography>
        <Typography
          name={label}
          component="p"
          variant="body2"
          alignSelf="center"
        >
          {toMoneyString(children)}
        </Typography>
      </Box>
    );
  };

  return (
    <Box display="flex" marginTop="auto" bTop="2px solid rgba(0, 0, 0, 0.5)">
      <CartTotalCell label="subtotal">{subtotal}</CartTotalCell>
      <CartTotalCell label="tax">{subtotal * SALES_TAX}</CartTotalCell>
      <CartTotalCell label="total">{subtotal * (1 + SALES_TAX)}</CartTotalCell>
    </Box>
  );
};

export default function Cart(props) {
  const [subtotal, setSubtotal] = useState(0);
  const { cart, removeFromCart } = useOrder();

  const styles = useStyles().cart;

  useEffect(() => {
    const orderSum = cart.reduce((sum, item) => {
      return sum + item.price;
    }, 0.0);
    setSubtotal(orderSum);
  }, [cart]);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.list}>
        {cart &&
          cart.map((item, i) => {
            return (
              <CartItem
                removeFromCart={removeFromCart}
                item={item}
                key={item.id}
              />
            );
          })}
        <CartTotal subtotal={subtotal} />
      </Box>
      <Box margin=".25rem .5rem" display="flex" justifyContent="center">
        <Button
          type="submit"
          variant="contained"
          sx={{ flexGrow: '1' }}
          fullWidth
        >
          CHECKOUT
        </Button>
      </Box>
    </Box>
  );
}
