import React, { useState } from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

export default function Menu({ menu, customer, changeCustomer }) {
  const [cart, setCart] = useState([]);
  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = ({ id }) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <MainPanel menu={menu} addToCart={addToCart} customer={customer} />
      <SidePanel
        removeFromCart={removeFromCart}
        order={cart}
        customer={customer}
        changeCustomer={changeCustomer}
      />
    </>
  );
}
