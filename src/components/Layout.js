import React, { useState } from 'react';
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

const body = document.querySelector('body');

export default function Layout({ app, children }) {
  // const [isDragging, setIsDragging] = useState(false)
  body.addEventListener('mousedown', e => {
    e.stopImmediatePropagation();
    console.log(e);
    console.log('is down');
  });
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
