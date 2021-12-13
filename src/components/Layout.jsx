import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, orange } from '@mui/material/colors';
import TopBar from './TopBar/TopBar';
import InfoBar from './InfoBar/InfoBar';
import { Box } from '@mui/system';

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
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
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
