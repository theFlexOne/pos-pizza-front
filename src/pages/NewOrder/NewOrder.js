import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';
import useOrder from '../../hooks/useOrder';
import { CustomerProvider } from '../../context/CustomerContext';
import { getFromSessionStorage } from '../../utils/utilityFunctions';

export default function NewOrder() {
  const [isMenu, setIsMenu] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const order = useOrder();

  const menu = getFromSessionStorage('menu');
  console.log(`menu: `, menu);

  // const changeCustomer = () => {
  //   order.resetCustomer();
  //   setIsMenu(() => false);
  //   setFormStep(() => 1);
  // };

  // const handleNewCustomer = customer => {
  //   console.log(`customer - `, customer);
  //   addCustomerToList(customer);
  //   order.selectCustomer(customer);
  // };

  useEffect(() => {
    if (order.customer) setIsMenu(true);
  }, [order.customer]);

  return isMenu ? (
    <Menu order={order} />
  ) : (
    <CustomerProvider>
      <Customer
        formStep={formStep}
        changeFormStep={val => setFormStep(val)}
        order={order}
        // onNewCustomer={handleNewCustomer}
        goToMenu={() => setIsMenu(() => true)}
      />
    </CustomerProvider>
  );
}
