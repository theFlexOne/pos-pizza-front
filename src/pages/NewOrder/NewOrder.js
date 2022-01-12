import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';
import { CustomerProvider } from '../../context/CustomerContext';
import { useOrder } from '../../context/OrderContext';

export default function NewOrder() {
  const [isMenu, setIsMenu] = useState(false);
  const order = useOrder();

  console.log(`order`, order);

  useEffect(() => {
    order.customer && setIsMenu(() => true);
  }, [order]);

  return isMenu ? (
    <Menu goToCustomer={() => setIsMenu(false)} />
  ) : (
    <CustomerProvider>
      <Customer goToMenu={() => setIsMenu(true)} />
    </CustomerProvider>
  );
}
