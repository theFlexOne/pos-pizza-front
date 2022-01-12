import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Customer from './components/Customer/Customer';
import { CustomerProvider } from '../../context/CustomerContext';
<<<<<<< HEAD
import { getFromSessionStorage } from '../../utils/utilityFunctions';
import { OrderProvider } from '../../context/OrderContext';
=======
import { useOrder } from '../../context/OrderContext';
>>>>>>> main_MaskedPhoneInput

export default function NewOrder() {
  const [isMenu, setIsMenu] = useState(false);
  const order = useOrder();

<<<<<<< HEAD
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
=======
  console.log(`order`, order);
>>>>>>> main_MaskedPhoneInput

  useEffect(() => {
    order.customer && setIsMenu(() => true);
  }, [order]);

<<<<<<< HEAD
  return (
    <OrderProvider>
      {isMenu ? (
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
      )}
      ;
    </OrderProvider>
=======
  return isMenu ? (
    <Menu goToCustomer={() => setIsMenu(false)} />
  ) : (
    <CustomerProvider>
      <Customer goToMenu={() => setIsMenu(true)} />
    </CustomerProvider>
>>>>>>> main_MaskedPhoneInput
  );
}
