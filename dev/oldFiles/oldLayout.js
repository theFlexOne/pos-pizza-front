import React from 'react';
import { makeStyles } from '@mui/styles';
import TopNavBar from './TopNavBar';
import BottomInfoBar from './BottomInfoBar';
import { Divider } from '@mui/material';
import theme from '../assets/theme/theme';
import { ThemeProvider } from '@mui/material';
// import softRainbow from '../assets/colors/softRainbow';
// console.log(softRainbow);

// const newTheme = theme;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
  },
  page: {
    flex: '1 1 100%',
  },
});

console.log(theme);

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopNavBar />
        {/* <Divider /> */}
        <main className={classes.page}>{children}</main>
        {/* <Divider /> */}
        <BottomInfoBar />
      </div>
    </ThemeProvider>
  );
}
