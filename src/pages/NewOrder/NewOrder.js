import React from 'react';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import CustomerInfoBox from './components/CustomerInfoBox/CustomerInfoBox';
import MenuItems from './components/MenuItems';
import MenuSectionBar from './components/MenuSectionBar';
import Box from '@mui/system/Box';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';

export default function NewOrder({ menu }) {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({});
  // const [isBuilding, setIsBuilding] = useState(false);

  console.log(menu);
  console.log(cart);

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
    // <Box className="New-Order" minHeight="100%" display="flex">
    <>
      <MainPanel
        menu={menu}
        addToCart={addToCart}
        customer={customer}
        applyCustomer={applyCustomer}
      />
      <SidePanel
        removeFromCart={removeFromCart}
        order={cart}
        customer={customer}
      />
      {/* <Modal>
        <ButtonGroup>
          <Button></Button>
        </ButtonGroup>
      </Modal> */}
    </>
    // </Box>
  );
}
