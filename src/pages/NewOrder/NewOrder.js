import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';

export default function NewOrder({ app }) {
  const { menu, customers } = app;
  const [customer, setCustomer] = useState(null);
  const [isMenu, setIsMenu] = useState(false);
  const [customerList, setCustomerList] = useState(customers);
  const [formStep, setFormStep] = useState(1);

  const changeCustomer = () => {
    setIsMenu(() => false);
    setCustomer(() => null);
    setFormStep(() => 1);
  };

  const handleNewCustomer = customer => {
    setCustomerList(() => [...customerList, customer]);
    setCustomer(() => customer);
  };

  useEffect(() => {
    if (customer) setIsMenu(true);
  }, [customer]);

  console.log(customer || 'NONE');

  return isMenu ? (
    <Menu menu={menu} customer={customer} changeCustomer={changeCustomer} />
  ) : (
    <Customer
      customerList={customerList}
      setCustomer={setCustomer}
      formStep={formStep}
      changeFormStep={val => setFormStep(val)}
      onNewCustomer={handleNewCustomer}
    />
  );
}
