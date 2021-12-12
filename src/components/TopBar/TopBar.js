import React, { useState } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TopBar() {
  let tabIdCounter = 0;
  const [index, setIndex] = useState(0);

  const onTabClick = (e, index) => {
    setIndex(index);
    // e.preventDefault();
  };

  const LinkTab = props => {
    return (
      <Tab
        component={Link}
        className="tab"
        id={`${tabIdCounter++}`}
        to="/"
        {...props}
      />
    );
  };

  return (
    <AppBar className="Top-Bar header">
      <Tabs className="nav tabs" value={index} onChange={onTabClick}>
        <LinkTab label="New Order" to="/New-Order" />
        <LinkTab label="Order History" to="/Order-History" />
        <LinkTab label="Customer List" to="/Customer-List" />
        <LinkTab label="Settings" to="/Settings" />
        <LinkTab label="Wait Times" />
        <LinkTab label="Custom 2" />
        <LinkTab label="Custom 3" />
        <LinkTab label="Custom 4" />
      </Tabs>
    </AppBar>
  );
}
