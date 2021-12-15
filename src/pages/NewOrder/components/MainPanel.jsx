import { Box } from '@mui/material';
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';

const MainPanel = ({ menu, addToCart }) => {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <Box flex="3" alignSelf="stretch" display="flex">
      <MenuSectionBar
        sections={menu.map(section => section.section)}
        index={sectionIndex}
        changeSection={setSectionIndex}
      />
      <MenuItems section={menu[sectionIndex]} addToCart={addToCart} flex="1" />
    </Box>
  );
};

export default MainPanel;
