import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import CartItem from './CartItem';
import { toMoneyString } from '../../../../utils/textMods';

const SALES_TAX = 0.07;

const CartTotal = ({ subtotal }) => {
  return (
    <Box
      display="flex"
      marginTop="auto"
      bcartTop="2px solid rgba(0, 0, 0, 0.5)"
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="body2" alignSelf="center">
          SUBTOTAL:
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
          TAX:
        </Typography>
        <Typography
          name="salesTax"
          component="p"
          variant="body2"
          alignSelf="center"
        >
          {toMoneyString(subtotal * SALES_TAX)}
        </Typography>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="body2" alignSelf="center">
          TOTAL:
        </Typography>
        <Typography
          name="total"
          component="p"
          variant="body2"
          alignSelf="center"
        >
          {toMoneyString(subtotal * (1 + SALES_TAX))}
        </Typography>
      </Box>
    </Box>
  );
};

export default function Cart({ cart, removeFromCart }) {
  const [subtotal, setSubtotal] = useState(0);

  console.log(`cart: `, cart);

  const theme = useTheme();

  useEffect(() => {
    const orderSum = cart.reduce((sum, item) => {
      return sum + item.price;
    }, 0.0);
    setSubtotal(orderSum);
  }, [cart]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="3"
      maxHeight="100%"
      // paddingBottom=".5rem"
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
