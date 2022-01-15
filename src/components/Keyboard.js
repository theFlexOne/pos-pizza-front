import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from '../hooks/useStyles';

const KeyboardBtn = ({ label, action, disabled, sx = {} }) => {
  return (
    <Button
      onClick={action || null}
      disabled={disabled || false}
      sx={{ ...sx, flex: 1, height: '3.5rem' }}
      variant="contained"
      size="large"
    >
      {label || ''}
    </Button>
  );
};

export default function Keyboard({ next, prev }) {
  const styles = useStyles().keyboard;
  return (
    <Box sx={styles.keyboardContainer}>
      <Typography variant="body2" marginTop="auto">
        **SPACE RESERVED FOR A QWERTY-LIKE KEYBOARD**
      </Typography>
      <Box
        sx={{
          width: '50vw',
          minHeight: '3.5rem',
          m: 'auto 0',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <KeyboardBtn {...prev} />
        <KeyboardBtn {...next} />
      </Box>
    </Box>
  );
}

// Keyboard.

// Keyboard.prototype = {
//   setPrevBtn({ label, action, disabled, sx }) {
//     return {
//       label: 'PREV PAGE' || '',
//       action: action || null,
//       disabled: disabled || false,
//       sx: sx || {},
//     };
//   },
// };
