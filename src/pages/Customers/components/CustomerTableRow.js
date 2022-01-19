import React, { useState } from 'react';
import { TableCell, TableRow } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import useStyles from '../../../hooks/useStyles';
import ConfirmationModal from '../../../components/ConfirmationModal';

const CustomerTableRow = ({ customer, onDeleteCustomer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles().customerTableRow;
  const {
    fullName: name,
    phoneNumber: phone,
    fullAddress: address,
    orderedLast,
    id,
  } = customer;

  const handleClose = () => setIsOpen(false);

  const modalOptions = {
    open: isOpen,
    onModalClose: handleClose,
    title: 'Delete Customer?',
    onCancel: handleClose,
    onConfirm: () => onDeleteCustomer(id),
  };

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
      <ConfirmationModal {...modalOptions}>
        Are you sure you want to delete this customer?
      </ConfirmationModal>
    </>
  );
};
export default CustomerTableRow;
