import React, { useRef } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import blueGrey from '@mui/material/colors/blueGrey';
// import orange from '@mui/material/colors/orange';
import TopBar from './TopBar';
import InfoBar from './InfoBar';
import Box from '@mui/system/Box';
import { LayoutProvider } from '../context/LayoutContext';

// const theme = createTheme({
//   palette: {
//     primary: orange,
//     secondary: blueGrey,
//   },
//   typography: {
//     // fontFamily: [
//     //   //*insert fonts here
//     // ],
//   },
// });

export default function Layout({ app, children }) {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateRows: 'min-content 1fr 1.25rem',
      // display: 'flex',
      // flexDirection: 'column',
      height: '100vh',
      maxHeight: '100vh',
    },
  };

  return (
    <LayoutProvider>
      <Box sx={styles.container}>
        <TopBar app={app} />
        {children}
        <InfoBar />
      </Box>
    </LayoutProvider>
  );
}
