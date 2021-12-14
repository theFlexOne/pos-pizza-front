import React, { useEffect } from 'react';
import { useState } from 'react';
// import './NewOrder.css';
import Cart from './components/Cart/Cart';
import CustomerInfoBox from './components/CustomerInfoBox/CustomerInfoBox';
import Menu from './components/Menu/Menu';
import MenuItems from './components/MenuItems/MenuItems';
import MenuSectionBar from './components/MenuSectionBar/MenuSectionBar';
import Box from '@mui/system/Box';
import Modal from '@mui/material/Modal';
import { Button, ButtonGroup } from '@mui/material';

export default function NewOrder({ menu }) {
  const [liveOrder, setLiveOrder] = useState([]);
  // const [isBuilding, setIsBuilding] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);

  console.log(menu);
  console.log(liveOrder);

  const handleAddItem = item => {
    setLiveOrder(() => [...liveOrder, item]);
  };

  return (
    // <Box className="New-Order" minHeight="100%" display="flex">
    <>
      <Box flex="3" alignSelf="stretch" display="flex">
        <MenuSectionBar
          sections={menu.map(section => section.section)}
          index={sectionIndex}
          changeSection={setSectionIndex}
        />
        <MenuItems
          section={menu[sectionIndex]}
          addToCart={item => setLiveOrder([...liveOrder, item])}
          flex="1"
        />
      </Box>
      <Box flex="1">
        <CustomerInfoBox />
        <Cart order={liveOrder} />
      </Box>
      {/* <Modal>
        <ButtonGroup>
          <Button></Button>
        </ButtonGroup>
      </Modal> */}
    </>
    // </Box>
  );
}
