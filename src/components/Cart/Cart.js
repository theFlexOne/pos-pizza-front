import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Cart.css';
import Typography from '@mui/material/Typography';

export default function Cart({ order }) {
  return (
    <section className="Cart">
      <div className="cart-list-container">
        <ol className="cart-list"></ol>
        <Typography
          variant="body1"
          component="p"
          className="order-total"
        ></Typography>
      </div>
      <Button type="submit" variant="contained" className="checkout-btn">
        CHECKOUT
      </Button>
    </section>
  );
}
