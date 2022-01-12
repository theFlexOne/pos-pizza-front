import { useTheme } from '@emotion/react';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { getFromSS } from '../../../../utils/sessionStorageHelpers';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';
import Cart from './Cart';
import CustomerInfoBox from './CustomerInfoBox';

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

const SidePanel = ({ goToCustomer }) => {
  const theme = useTheme();
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      backgroundColor={theme.palette.secondary[500]}
    >
      <CustomerInfoBox goToCustomer={goToCustomer} />
      <Divider sx={{ borderColor: 'rgba(0,0,0,0.5)' }} />
      <Cart />
    </Box>
  );
};

export default function Menu({ goToCustomer }) {
  return (
    <>
      <MainPanel />
      <SidePanel goToCustomer={goToCustomer} />
    </>
  );
}
