import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { getFromSS } from '../../../../utils/sessionStorageHelpers';
import MenuItems from './MenuItems';
import MenuSectionBar from './MenuSectionBar';
import Cart from './Cart';
import CustomerInfoBox from './CustomerInfoBox';
import useStyles from '../../../../hooks/useStyles';

const MainPanel = props => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const menu = getFromSS('menu');
  console.log(`menu: `, menu);
  const styles = useStyles().menu;

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
  const styles = useStyles().menu;
  return (
    <Box sx={styles.sidePanel}>
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
