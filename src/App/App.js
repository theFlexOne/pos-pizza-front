import React, { useEffect, useState } from 'react';
// import './App.css';
import TopBar from '../components/TopBar/TopBar';
import InfoBar from '../components/InfoBar/InfoBar';
import useApp from '../hooks/useApp';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NewOrder from '../pages/NewOrder/NewOrder';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({});

function App() {
  const [app, err, isLoading] = useApp();

  if (isLoading) return <h2>Loading...</h2>;
  if (err) {
    console.error(err);
    return <h2>{err.message}</h2>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        display="flex"
        flexDirection="column"
        height="100vh"
        maxHeight="100vh"
      >
        <TopBar app={app || undefined} />
        <Box component="section" className="page" display="flex" flex="1">
          {app && (
            <Routes>
              <Route path="/" element={<NewOrder menu={app.menu} />} />
              <Route path="/NewOrder" element={<NewOrder menu={app.menu} />} />
            </Routes>
          )}
        </Box>
        <InfoBar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
