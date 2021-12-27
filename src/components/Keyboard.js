import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';

const styles = {
  keyboardContainer: {
    flexBasis: '100%',
    backgroundColor: '#38D435',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
// class KeyboardButton {
//   constructor({label, action, disabled, sx}) {
//     this.label = label || '';
//     this.action = action || console.error('must include an action prop');
//     this.disabled = disabled || false;
//     this.sx = sx || {};
//   }
// }

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
