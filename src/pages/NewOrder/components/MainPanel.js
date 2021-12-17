import { Box } from '@mui/material';
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';

const MainPanel = ({ menu, addToCart, isMenu }) => {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <Box flex="3" alignSelf="stretch" display="flex">
      isMenu ? (
      <MenuSectionBar
        sections={menu.map(({ section }) => section)}
        index={sectionIndex}
        changeSection={(_, i) => setSectionIndex(i)}
      />
      <MenuItems section={menu[sectionIndex]} addToCart={addToCart} flex="1" />
      ) : (
      <LookupCustomer />)
    </Box>
  );
};

export default MainPanel;
