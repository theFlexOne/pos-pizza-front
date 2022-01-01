import React from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

export default function Menu({
  order,
  menu,
  changeCustomer,
  // customer,
  // addToCart,
  // removeFromCart,
  // cart,
}) {
  return (
    <>
      <MainPanel order={order} menu={menu} />
      <SidePanel order={order} changeCustomer={changeCustomer} />
    </>
  );
}
