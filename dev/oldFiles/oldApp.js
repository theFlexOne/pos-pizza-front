import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useData from './hooks/useData';
import Order from './pages/Order/Order';
import Layout from './components/Layout';

function App() {
  // const { app } = useData({});
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await (await fetch('http://localhost:8000/app')).json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data || 'fetching data...');

  return (
    data && (
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={<Order menuData={data.menu} />}
          ></Route>
          <Route path="/Order" element={<Order menuData={data.menu} />}></Route>
          {/* <Route path="/OrderHistory" element={<OrderHistory />}></Route>
    <Route path="/CustomerList" element={<CustomerList />}></Route>
  <Route path="/Settings" element={<Settings />}></Route> */}
        </Routes>
      </Layout>
    )
  );
}

export default App;
