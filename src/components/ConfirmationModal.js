import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

function ConfirmationModal(props) {
  const { isOpen, onClose, title, cancel, confirm, children, ...other } = props;
  return (
    <Dialog open={isOpen} onClose={onClose} {...other}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" size="large" onClick={cancel}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={confirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationModal;
