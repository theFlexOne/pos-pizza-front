import React from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

export default function Menu({
  order,
  menu,
  customer,
  changeCustomer,
  addToCart,
  removeFromCart,
  cart,
}) {
  return (
    <>
      <MainPanel order={order} menu={menu} addToCart={addToCart} />
      <SidePanel
        order={order}
        removeFromCart={removeFromCart}
        cart={cart}
        customer={customer}
        changeCustomer={changeCustomer}
      />
    </>
  );
}
