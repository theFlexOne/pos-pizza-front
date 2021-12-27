import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { capAll, toMoneyString } from '../../../../utils/textMods';
import ClearIcon from '@mui/icons-material/Clear';

export default function CartItem({ item, removeFromCart }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { id, price, toppings = undefined, name } = item;

  console.log(id, price, toppings, name);

  const styles = {
    container: {
      display: 'flex',
    },
    clearIcon: {
      fontSize: '1rem',
      alignSelf: 'center',
      '&:hover': { color: 'red' },
    },
  };

  return (
    <>
      <Box
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          {isMouseOver && (
            <ClearIcon
              onClick={() => removeFromCart(id)}
              sx={styles.clearIcon}
            />
          )}
          <Typography sx={{ mr: 'auto', pr: '.5rem' }}>
            {capAll(name)}
          </Typography>
          <Typography price={price}>{toMoneyString(price)}</Typography>
        </Box>
        <Box>
          {toppings && (
            <Typography variant="caption">{toppings.join(', ')}</Typography>
          )}
        </Box>
      </Box>
      {/* {i < order.length && <Divider />} */}
    </>
  );
}
