import React from 'react';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import CustomerInfoBox from './components/CustomerInfoBox/CustomerInfoBox';
import MenuItems from './components/MenuItems';
import MenuSectionBar from './components/MenuSectionBar';
import Box from '@mui/system/Box';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';
import CustomerForm from './components/CustomerForm';

export default function NewOrder({ menu }) {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({});
  const [isMenu, setIsMenu] = useState(true);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = ({ idToRemove }) => {
    setCart(cart.filter(({ id }) => id !== idToRemove));
  };

  const applyCustomer = customer => {
    setCustomer(customer);
  };

  return (
    <>
      <MainPanel
        menu={menu}
        addToCart={addToCart}
        customer={customer}
        applyCustomer={applyCustomer}
        isMenu={isMenu}
      />
      <SidePanel
        removeFromCart={removeFromCart}
        order={cart}
        customer={customer}
        isMenu={isMenu}
      />
    </>
  );
}
