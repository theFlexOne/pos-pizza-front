import { Box, Button } from '@mui/material';
import React from 'react';

export default function Keyboard({ onBtnClick, btnLabel }) {
  return (
    <Box
      // input={input}
      // setInput={setInput}
      // keyboard={keyboard}
      width="100%"
      height="50%"
      backgroundColor="#393837"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button variant="contained" onClick={onBtnClick}>
        {btnLabel}
      </Button>
    </Box>
  );
}
