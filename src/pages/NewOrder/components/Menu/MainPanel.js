import { Box } from '@mui/material';
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';
import { useTheme } from '@emotion/react';
import { getFromSS } from '../../../../utils/sessionStorageHelpers';

const MainPanel = props => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const menu = getFromSS('menu');
  console.log(`menu: `, menu);

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
      <MenuItems section={menu[sectionIndex]} flex="1" />
    </Box>
  );
};

export default MainPanel;
