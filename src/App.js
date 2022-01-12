import React from 'react';
import useFetchApp from './hooks/useFetchApp';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NewOrder from './pages/NewOrder/NewOrder';
import Layout from './components/Layout';
import Customers from './pages/Customers/Customers';
import Settings from './pages/Settings/Settings';
import useDragScroll from './hooks/useDragScroll';
<<<<<<< HEAD
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
=======
import { OrderProvider } from './context/OrderContext';

function App() {
  const [err, isLoading] = useFetchApp();
  const isSS = sessionStorage.length > 0;
  const dragScrollEvents = useDragScroll();

  // const addCustomerToList = customer => {
  //   setCustomerList(() => [...customerList, customer]);
  // };
>>>>>>> main_MaskedPhoneInput

  // const removeCustomerFromList = id => {
  //   setCustomerList(() => customerList.filter(customer => customer.id !== id));
  // };

  if (isLoading) return <h2>Loading...</h2>;
  if (err && !isLoading) {
    console.error(err);
    return <h2>{err.message}</h2>;
  }

<<<<<<< HEAD
=======
  const NewOrderProvider = () => (
    <OrderProvider>
      <NewOrder />
    </OrderProvider>
  );

>>>>>>> main_MaskedPhoneInput
  return (
    isSS &&
    !isLoading && (
      <Layout>
        <Box {...dragScrollEvents}>
<<<<<<< HEAD
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
=======
          <Routes>
            <Route path="/" element={<NewOrderProvider />} />
            <Route path="/NewOrder" element={<NewOrderProvider />}></Route>
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
>>>>>>> main_MaskedPhoneInput
        </Box>
      </Layout>
    )
  );
}

export default App;
