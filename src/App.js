import React from 'react';
import useApp from './hooks/useApp';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NewOrder from './pages/NewOrder/NewOrder';
import Layout from './components/Layout';

function App() {
  const [app, err, isLoading] = useApp();

  if (isLoading) return <h2>Loading...</h2>;
  if (err) {
    console.error(err);
    return <h2>{err.message}</h2>;
  }

  return (
    <Layout app={app}>
      <Box className="page" display="flex" flex="1">
        {app && (
          <Routes>
            <Route path="/" element={<NewOrder app={app} />} />
            <Route path="/NewOrder" element={<NewOrder app={app} />} />
          </Routes>
        )}
      </Box>
    </Layout>
  );
}

export default App;
