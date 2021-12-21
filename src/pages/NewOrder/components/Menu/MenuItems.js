import React from 'react';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// const MenuButton = () => {};

export default function MenuItems({ section, addToCart }) {
  const items = section?.items;
  const handleClick = item => {
    const { name, toppings, prices } = item;
    addToCart({
      name,
      price: (prices && prices.large) || 'N/A',
      toppings,
    });
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      flex="1"
      alignItems="center"
      gap="1rem"
      padding="1rem"
    >
      {items &&
        items.map(item => {
          return (
            <Button
              variant="contained"
              onClick={() => handleClick(item)}
              color="primary"
              key={item.id}
              // flex="1"
              // flexWrap="wrap"
              sx={{ minHeight: '5rem', gridColumn: 'span 1' }}
            >
              {item.name.split('-').join(' ')}
            </Button>
          );
        })}
    </Box>
  );
}
