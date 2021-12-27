import React, { useState } from 'react';
import { TableCell, TableRow } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@emotion/react';

const POS_DATA_URL = 'http://localhost:8000/customers';

const CustomerTableRow = ({ customer, isOpen, handleOpen }) => {
  const theme = useTheme();
  const {
    fullName: name,
    phoneNumber: phone,
    fullAddress: address,
    orderedLast,
    id,
  } = customer;

  const handleDelete = () => {
    fetch(POS_DATA_URL + '/${id}', { method: 'DELETE' });
  };

  return (
    <TableRow
      sx={{
        '&:nth-of-type(even)': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }}
    >
      <TableCell>{name}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{address}</TableCell>
      <TableCell align="right">{orderedLast}</TableCell>
      <TableCell align="right" sx={{ padding: '0 .35rem 0 0' }}>
        <ClearIcon
          sx={{
            fontSize: '1.5rem',
            '&:hover': { color: theme.palette.primary[600] },
          }}
          onClick={handleDelete}
        />
      </TableCell>
    </TableRow>
  );
};
export default CustomerTableRow;
