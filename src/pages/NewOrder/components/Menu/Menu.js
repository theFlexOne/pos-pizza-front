import React from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';
import useOrder from '../../../../hooks/useOrder';
import { getFromSessionStorage } from '../../../../utils/utilityFunctions';
import { useEffect } from 'react';

export default function Menu({ changeCustomer, order }) {
  const menu = getFromSessionStorage('menu');

  console.log({ order });

  useEffect(() => {
    console.log(order);
  }, [order.customer]);
  return (
    <>
      <MainPanel order={order} menu={menu} />
      <SidePanel order={order} changeCustomer={changeCustomer} />
    </>
  );
}
