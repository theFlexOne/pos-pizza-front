import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TableCell,
  TableRow,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@emotion/react';

const CustomerTableRow = ({ customer, onDeleteCustomer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const styles = {
    row: {
      '&:nth-of-type(even)': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
      },
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    },
    clearIcon: {
      fontSize: '1.5rem',
      '&:hover': { color: theme.palette.primary[600] },
    },
  };
  const {
    fullName: name,
    phoneNumber: phone,
    fullAddress: address,
    orderedLast,
    id,
  } = customer;

  return (
    <>
      <TableRow sx={styles.row}>
        <TableCell>{name}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="right">{address}</TableCell>
        <TableCell align="right">{orderedLast}</TableCell>
        <TableCell align="right" sx={{ padding: '0 .35rem 0 0' }}>
          <ClearIcon sx={styles.clearIcon} onClick={() => setIsOpen(true)} />
        </TableCell>
      </TableRow>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle id="delete-dialog-title">{'Delete Customer?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete this customer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="large"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => onDeleteCustomer(id)}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CustomerTableRow;
