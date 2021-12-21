import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';

export default function NewOrder({ app }) {
  const { menu, customers } = app;
  const [customer, setCustomer] = useState(null);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (customer) setIsMenu(true);
  }, [customer]);

  console.log(customer);

  return isMenu ? (
    <Menu menu={menu} customer={customer} />
  ) : (
    <Customer customerList={customers} setCustomer={setCustomer} />
  );
}
