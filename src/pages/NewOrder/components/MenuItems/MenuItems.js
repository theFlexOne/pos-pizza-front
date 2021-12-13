import React from 'react';
import './MenuItems.css';
import Button from '@mui/material/Button';

export default function MenuItems({ section, addToCart }) {
  // console.log(section);

  const buildPizza = section => {
    console.log(section);
  };

  return (
    <div className="Menu-Items">
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
    </div>
  );
}
