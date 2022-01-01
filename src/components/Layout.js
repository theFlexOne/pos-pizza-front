import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blueGrey from '@mui/material/colors/blueGrey';
import orange from '@mui/material/colors/orange';
import TopBar from './TopBar';
import InfoBar from './InfoBar';
import Box from '@mui/system/Box';

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: blueGrey,
  },
  typography: {
    // fontFamily: [
    //   //*insert fonts here
    // ],
  },
});

export default function Layout({ app, children }) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxHeight: '100vh',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>
        <TopBar app={app} />
        {children}
        <InfoBar />
      </Box>
    </ThemeProvider>
  );
}
