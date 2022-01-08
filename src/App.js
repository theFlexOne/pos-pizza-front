import React, { useState, useEffect } from 'react';
import useApp from './hooks/useApp';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NewOrder from './pages/NewOrder/NewOrder';
import Layout from './components/Layout';
import Customers from './pages/Customers/Customers';
import Settings from './pages/Settings/Settings';
import useDragScroll from './hooks/useDragScroll';
import { initSS, getFromSS, findInSS } from './utils/sessionStorageHelpers';

// findInSS();

console.log(getFromSS('menu'));

function App() {
  const {
    state: [app, err, isLoading],
  } = useApp();
  const dragScrollEvents = useDragScroll();

  useEffect(() => {
    if (app) {
      sessionStorage.clear();
      initSS(app);
    }
  }, [app]);

  useEffect(() => {
    sessionStorage.setItem('order', JSON.stringify({ customer: {}, cart: {} }));
  }, []);

  // const removeCustomerFromList = id => {
  //   setCustomerList(() => customerList.filter(customer => customer.id !== id));
  // };

  if (isLoading) return <h2>Loading...</h2>;
  if (err && !isLoading) {
    console.error(err);
    return <h2>{err.message}</h2>;
  }

  return (
    app &&
    !isLoading && (
      <Layout app={app}>
        <Box {...dragScrollEvents}>
          {app && (
            <Routes>
              <Route path="/" element={<NewOrder />} />
              <Route path="/NewOrder" element={<NewOrder />} />
              <Route
                path="/Customers"
                element={
                  <Customers
                  // customers={customerList}
                  // removeCustomerFromList={removeCustomerFromList}
                  />
                }
              />
              <Route path="/Settings" element={<Settings app={app} />} />
            </Routes>
          )}
        </Box>
      </Layout>
    )
  );
}

export default App;
