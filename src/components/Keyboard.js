import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';

const styles = {
  keyboardContainer: {
    flex: '1',
    backgroundColor: '#38D435',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function Keyboard({ onBtnClick, btnLabel, prev, disabled }) {
  return (
    <Box sx={styles.keyboardContainer}>
      <Typography variant="body2" marginTop="auto">
        **SPACE RESERVED FOR A QWERTY-LIKE KEYBOARD**
      </Typography>
      <ButtonGroup
        // size="large"
        fullWidth
        sx={{ maxWidth: '50vw', minHeight: '3.5rem', m: 'auto 0' }}
      >
        <Button variant="contained" onClick={prev} size="large">
          PREV PAGE
        </Button>
        <Button variant="contained" disabled={disabled} onClick={onBtnClick}>
          {btnLabel}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
