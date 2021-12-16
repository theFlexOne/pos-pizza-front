import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import NewOrder from '../pages/NewOrder/NewOrder';
// import MenuModal from '../MenuModal/MenuModal';
// import Order from '../Order/Order';

export default function Content({
  app: { menu = [], settings = [], orderHistory = [], customerList = [] },
}) {
  return (
    <Routes>
      <Box>
        {menu && <NewOrder menu={menu} />}
        {/* <Settings /> */}
        {/* <OrderHistory /> */}
        {/* <CustomerList /> */}
        {/* <NewMenuItem /> */}
      </Box>
    </Routes>
  );
}
