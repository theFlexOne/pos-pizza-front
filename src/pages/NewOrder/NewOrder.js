import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';

export default function NewOrder({ menu, addCustomerToList, customerList }) {
  // const { menu } = app;
  const [customer, setCustomer] = useState(null);
  const [isMenu, setIsMenu] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const changeCustomer = () => {
    setIsMenu(() => false);
    setCustomer(() => null);
    setFormStep(() => 1);
  };

  const handleNewCustomer = customer => {
    console.log(`customer - `, customer);
    addCustomerToList(customer);
    setCustomer(() => customer);
    // setCustomerList(() => [...customerList, customer]);
  };

  useEffect(() => {
    if (customer) setIsMenu(true);
  }, [customer]);

  return isMenu ? (
    <Menu
      menu={menu}
      customer={customer}
      changeCustomer={changeCustomer}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  ) : (
    <Customer
      customerList={customerList}
      setCustomer={customer => setCustomer(customer)}
      formStep={formStep}
      changeFormStep={val => setFormStep(val)}
      onNewCustomer={handleNewCustomer}
      goToMenu={() => setIsMenu(() => true)}
    />
  );
}
