import { Box } from '@mui/material';
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';
import { useTheme } from '@emotion/react';

const MainPanel = ({ menu, order }) => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const theme = useTheme();
  const styles = {
    mainPanel: {
      flex: '3',
      alignSelf: 'stretch',
      display: 'flex',
      backgroundColor: theme.palette.secondary[200],
    },
  };

  return (
    <Box sx={styles.mainPanel}>
      <MenuSectionBar
        sections={menu.map(({ section }) => section)}
        index={sectionIndex}
        changeSection={id => setSectionIndex(id)}
      />
      <MenuItems
        section={menu[sectionIndex]}
        addToCart={order.addToCart}
        flex="1"
      />
    </Box>
  );
};

export default MainPanel;
