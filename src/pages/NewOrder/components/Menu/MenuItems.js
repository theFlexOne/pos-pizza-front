import React from 'react';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';

const MenuItemButton = ({ item, ...other }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ minHeight: '5rem', gridColumn: 'span 1' }}
      {...other}
    >
      {item.name.split('-').join(' ')}
    </Button>
  );
};

export default function MenuItems({ section, addToCart }) {
  const items = section?.items;

  const handleClick = item => {
    const { name, toppings, prices, type } = item;
    addToCart({
      name,
      price: (() => {
        if (type === 'specialty') return prices.large;
        if (type === 'wings') return prices[20];
      })(),
      toppings,
      id: uuid(),
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
            <MenuItemButton
              key={item.id}
              item={item}
              onClick={() => handleClick(item)}
            />
          );
        })}
    </Box>
  );
}
