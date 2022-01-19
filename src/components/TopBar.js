import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';

export default function TopBar() {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();

  const handleChange = (_, newTab) => {
    setSelectedTab(newTab);
    // e.preventDefault();
  };

  const LinkTab = props => {
    return (
      <Tab
        component={Link}
        to="/NewOrder"
        iconPosition="end"
        // sx={{ color: 'rgba(255, 255, 255, .5' }}
        {...props}
      />
    );
  };

  return (
    <Box
      className="Top-Bar header"
      component="header"
      sx={{ backgroundColor: theme.palette.secondary[700] }}
    >
      <Tabs
        component="nav"
        className="nav tabs"
        variant="fullWidth"
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{ width: '1rem' }}
      >
        <LinkTab label="New Order" to="/NewOrder" />
        <LinkTab label="Order History" to="/OrderHistory" disabled />
        <LinkTab label="Customers" to="/Customers" />
        <LinkTab label="Settings" to="/Settings" />
        <LinkTab label="Reports" to="/Reports" disabled />
        <LinkTab label="Custom 1" disabled />
      </Tabs>
    </Box>
  );
}
