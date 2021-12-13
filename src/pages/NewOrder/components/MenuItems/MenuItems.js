import React from 'react';
// import './MenuItems.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function MenuItems({ section, addToCart }) {
  // console.log(section);

  const buildPizza = section => {
    console.log(section);
  };

  return (
    <Box className="Menu-Items" flexGrow="1">
      {section &&
        section.items.map(item => {
          return (
            <Button
              color="primary"
              variant="contained"
              className="item"
              key={item.id}
              onClick={() => buildPizza(item)}
            >
              {item.section}
            </Button>
          );
        })}
    </Box>
  );
}
