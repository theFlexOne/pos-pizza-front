import { Box } from '@mui/material';
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';
import { useTheme } from '@emotion/react';

const styles = {
  mainPanel: {
    flex: '3',
    alignSelf: 'stretch',
    display: 'flex',
  },
};

const MainPanel = ({ menu, addToCart }) => {
  const [sectionIndex, setSectionIndex] = useState(0);
  console.log(`menu: `, menu);

  const theme = useTheme();

  return (
    <Box
      sx={{
        ...styles.mainPanel,
        backgroundColor: theme.palette.secondary[200],
      }}
    >
      <MenuSectionBar
        sections={menu.map(({ section }) => section)}
        index={sectionIndex}
        changeSection={id => setSectionIndex(id)}
      />
      <MenuItems section={menu[sectionIndex]} addToCart={addToCart} flex="1" />
    </Box>
  );
};

export default MainPanel;
