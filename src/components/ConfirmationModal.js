import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import React from 'react';

function ConfirmationModal(props) {
  const {
    isOpen,
    onModalClose,
    title,
    onCancel,
    onConfirm,
    children,
    ...other
  } = props;
  return (
    <Dialog
      open={isOpen}
      onClose={onModalClose}
      TransitionComponent={Slide}
      TransitionProps={{ direction: 'up' }}
      transitionDuration={{ enter: 250, exit: 150 }}
      {...other}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="large"
          onClick={onCancel}
          color="error"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={onConfirm}
          color="success"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationModal;
