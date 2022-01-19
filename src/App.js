import React from 'react';
import useFetchApp from './hooks/useFetchApp';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NewOrder from './pages/NewOrder/NewOrder';
import Layout from './components/Layout';
import Customers from './pages/Customers/Customers';
import Settings from './pages/Settings/Settings';
import useDragScroll from './hooks/useDragScroll';
import { OrderProvider } from './context/OrderContext';
import Login from './pages/Login/Login';

const root = document.getElementById('root');
function App() {
  const [err, isLoading] = useFetchApp();
  const isSS = sessionStorage.length > 0;
  const dragScrollEvents = useDragScroll();

  if (isLoading) return <h2>Loading...</h2>;
  if (err && !isLoading) {
    console.error(err);
    return <h2>{err.message}</h2>;
  }

  const NewOrderProvider = () => (
    <OrderProvider>
      <NewOrder />
    </OrderProvider>
  );

  return (
    isSS &&
    !isLoading && (
      <Layout>
        <Box {...dragScrollEvents}>
          <Routes>
            <Route path="/" element={<NewOrderProvider />} />
            <Route path="/NewOrder" element={<NewOrderProvider />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Box>
      </Layout>
    )
  );
}

export default App;
