import React from 'react';
import './MenuItems.css';
import Button from '@mui/material/Button';

export default function MenuItems({ section, addToCart }) {
  // console.log(section);

  const buildPizza = type => {
    console.log(type);
  };

  return (
    <div className="Menu-Items">
      {section &&
        section.items.map(type => {
          return (
            <Button
              color="primary"
              variant="contained"
              className="item"
              key={type['item-id']}
              onClick={() => buildPizza(type)}
            >
              {type.name}
            </Button>
          );
        })}
    </div>
  );
}
