import React, { useState } from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

export default function Menu({
  menu,
  customer,
  changeCustomer,
  addToCart,
  removeFromCart,
  cart,
}) {
  return (
    <>
      <MainPanel menu={menu} addToCart={addToCart} customer={customer} />
      <SidePanel
        removeFromCart={removeFromCart}
        cart={cart}
        customer={customer}
        changeCustomer={changeCustomer}
      />
    </>
  );
}
