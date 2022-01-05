import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';
import useOrder from '../../hooks/useOrder';
import { CustomerProvider } from '../../context/CustomerContext';

export default function NewOrder({ menu, addCustomerToList, customerList }) {
  const [isMenu, setIsMenu] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const order = useOrder();

  const changeCustomer = () => {
    order.resetCustomer();
    setIsMenu(() => false);
    setFormStep(() => 1);
  };

  const handleNewCustomer = customer => {
    console.log(`customer - `, customer);
    addCustomerToList(customer);
    order.selectCustomer(customer);
  };

  useEffect(() => {
    if (order.customer) setIsMenu(true);
  }, [order.customer]);

  return isMenu ? (
    <Menu order={order} menu={menu} changeCustomer={changeCustomer} />
  ) : (
    <CustomerProvider>
      <Customer
        selectCustomer={order.selectCustomer}
        customerList={customerList}
        formStep={formStep}
        changeFormStep={val => setFormStep(val)}
        onNewCustomer={handleNewCustomer}
        goToMenu={() => setIsMenu(() => true)}
      />
    </CustomerProvider>
  );
}
