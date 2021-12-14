import React, { useState } from 'react';
// import './MenuItems.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
// import styled from '@mui/system';
import buildPizza from '../../../../utils/buildPizza';
import Modal from '@mui/material/Modal';

const MenuButton = () => {};

export default function MenuItems({ section: { items }, addToCart }) {
  const handleClick = ({ name, toppings, id, prices: { large: price } }) => {
    return addToCart({
      name,
      price,
      toppings,
      id,
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
