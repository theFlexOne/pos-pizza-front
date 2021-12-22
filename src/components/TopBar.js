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
        className="nav tabs"
        variant="fullWidth"
        value={selectedTab}
        onChange={handleChange}
      >
        <LinkTab label="New Order" to="/NewOrder" />
        <LinkTab label="Order History" to="/OrderHistory" />
        <LinkTab label="Customer List" to="/CustomerList" />
        <LinkTab label="Settings" to="/Settings" />
        <LinkTab label="Wait Times" />
        <LinkTab label="Custom 2" />
        <LinkTab label="Custom 3" />
        <LinkTab label="Custom 4" />
      </Tabs>
    </Box>
  );
}
