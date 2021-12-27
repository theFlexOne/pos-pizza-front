import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import Box from '@mui/system/Box';
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { DateTime as dt } from 'luxon';
import CustomerTableRow from './components/CustomerTableRow';

const ROWS_PER_PAGE = 8;

export default function Customers({ customers, removeCustomerFromList }) {
  const [page, setPage] = useState(0);

  const theme = useTheme();

  const isLastPage = page >= Math.ceil(customers.length / ROWS_PER_PAGE - 1);

  const handleNextPage = () => setPage(() => page + 1);
  const handlePrevPage = () => setPage(() => page - 1);
  // const handleDeleteCustomer = id => {};

  const rows = customers
    .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
    .map(({ name, phoneNumber, address, id, recentOrders }) => {
      const fullName = name.firstName + ' ' + name.lastName;
      const fullAddress =
        address.streetAddress + ', ' + address.secondaryAddress;
      const orderedLast = recentOrders?.[0]?.timeStamp
        ? dt.fromMillis(recentOrders[0].timeStamp).toFormat('D T')
        : 'n/a';

      return { fullName, phoneNumber, fullAddress, id, orderedLast };
    });

  console.log(rows);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.secondary[500],
        flex: '1',
        overflow: 'hidden',
        // padding: '1rem',
      }}
    >
      <Box sx={{ m: '.5rem', display: 'flex', flexDirection: 'column' }}>
        <TableContainer
          sx={{ flexGrow: '1', boxShadow: '.5px 2px 2px rgba(0,0,0,.3)' }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.secondary[700] }}>
                <TableCell>Name</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Ordered Last</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: theme.palette.secondary[300] }}>
              {rows.map(row => (
                <CustomerTableRow
                  customer={row}
                  removeCustomerFromList={removeCustomerFromList}
                  key={row.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            mt: '.5rem',
            // mr: '1rem',
            // ml: '1rem',
            display: 'flex',
            gap: '.5rem',
            minHeight: '3.5rem',
            flex: '1',
          }}
        >
          <Button variant="contained">FILTER</Button>
          <Button
            variant="contained"
            sx={{ ml: 'auto' }}
            disabled={page === 0}
            onClick={handlePrevPage}
          >
            PREV
          </Button>
          <Button
            variant="contained"
            disabled={isLastPage}
            onClick={handleNextPage}
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
