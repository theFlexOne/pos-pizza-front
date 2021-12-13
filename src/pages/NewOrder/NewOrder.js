import React, { useEffect } from 'react';
import { useState } from 'react';
// import './NewOrder.css';
import Cart from './components/Cart/Cart';
import CustomerInfoBox from './components/CustomerInfoBox/CustomerInfoBox';
import Menu from './components/Menu/Menu';
import MenuItems from './components/MenuItems/MenuItems';
import MenuSectionBar from './components/MenuSectionBar/MenuSectionBar';
import Box from '@mui/system/Box';

export default function NewOrder({ menu }) {
  const [liveOrder, setLiveOrder] = useState([]);
  const [sectionIndex, setSectionIndex] = useState(0);

  console.log(menu);

  const handleAddItem = item => {
    setLiveOrder(() => [...liveOrder, item]);
  };

  return (
    // <Box className="New-Order" minHeight="100%" display="flex">
    <>
      <Box
        className="New-Order-main-box"
        flex="3"
        alignSelf="stretch"
        display="flex"
      >
        <MenuSectionBar
          sections={menu.map(section => section.section)}
          index={sectionIndex}
          changeSection={setSectionIndex}
        />
        <MenuItems menuSection={menu[sectionIndex]} flex="1" />
      </Box>
      <Box className="New-Order-side-box" flex="1">
        <CustomerInfoBox className="Customer-Info-Box" />
        <Cart className="Cart" order={liveOrder} />
      </Box>
    </>
    // </Box>
  );
}
