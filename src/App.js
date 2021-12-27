import React, { useState, useEffect } from 'react';
import useApp from './hooks/useApp';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NewOrder from './pages/NewOrder/NewOrder';
import Layout from './components/Layout';
// import useFetch from './hooks/useFetch';
import Customers from './pages/Customers/Customers';

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [menu, setMenu] = useState([]);
  const [app, err, isLoading] = useApp();

  useEffect(() => {
    if (app) {
      setCustomerList(() => app.customers);
      setMenu(() => app.menu);
    }
  }, [app]);

  const updateCustomerList = customer => {
    setCustomerList(() => [...customerList, customer]);
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (err) {
    console.error(err);
    return <h2>{err.message}</h2>;
  }

  return (
    <Layout app={app}>
      <Box className="page" display="flex" flexBasis="100%">
        {app && (
          <Routes>
            <Route
              path="/"
              element={
                <NewOrder
                  menu={menu}
                  updateCustomerList={updateCustomerList}
                  customerList={customerList}
                />
              }
            />
            <Route
              path="/NewOrder"
              element={
                <NewOrder
                  menu={menu}
                  updateCustomerList={updateCustomerList}
                  customerList={customerList}
                />
              }
            />
            <Route
              path="/Customers"
              element={<Customers customers={customerList} />}
            />
          </Routes>
        )}
      </Box>
    </Layout>
  );
}

export default App;
