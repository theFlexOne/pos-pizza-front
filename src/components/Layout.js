import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blueGrey from '@mui/material/colors/blueGrey';
import TopBar from './TopBar';
import InfoBar from './InfoBar';
import Box from '@mui/system/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF850A',
    },
    secondary: {
      main: '#004161',
    },
    blueGrey,
  },
});

export default function Layout({ app, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        maxHeight="100vh"
      >
        <TopBar app={app} />
        {children}
        <InfoBar />
      </Box>
    </ThemeProvider>
  );
}
