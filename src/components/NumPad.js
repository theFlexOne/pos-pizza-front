import { Box, Button } from '@mui/material';
import React from 'react';
import useStyles from '../hooks/useStyles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
  },
  button: { width: '100px', height: '100px', m: '1.5px' },
};

function NumPad(props) {
  const NumKey = ({ children, onBtnClick }) => {
    // const handleClick = onBtnClick ? () => onBtnClick : e => lookupCustomer(e);
    return (
      <Button sx={styles.button} variant="contained" color="secondary">
        {children}
      </Button>
    );
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.row}>
        <NumKey>1</NumKey>
        <NumKey>2</NumKey>
        <NumKey>3</NumKey>
      </Box>
      <Box>
        <NumKey>4</NumKey>
        <NumKey>5</NumKey>
        <NumKey>6</NumKey>
      </Box>
      <Box>
        <NumKey>7</NumKey>
        <NumKey>8</NumKey>
        <NumKey>9</NumKey>
      </Box>
      <Box>
        <NumKey>CLEAR</NumKey>
        <NumKey>0</NumKey>
        <NumKey>
          <span className="material-icons-outlined">backspace</span>
        </NumKey>
      </Box>
    </Box>
  );
}

export default NumPad;
