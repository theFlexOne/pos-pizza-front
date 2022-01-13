import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Box from '@mui/system/Box';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { DateTime as dt } from 'luxon';
import CustomerTableRow from './components/CustomerTableRow';
import FilterModal from './components/FilterModal';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { getFromSS } from '../../utils/sessionStorageHelpers';
import { deleteCustomer } from '../../utils/fetchHelpers';
import { formatForDisplay } from '../../utils/formatPhoneNumber';

const ROWS_PER_PAGE = 8;
const INITIAL_FILTER = { text: '', type: 'name' };

const toDateTimeFormat = ms => dt.fromMillis(ms).toFormat('D T');

const buildRows = (customers, page) => {
  return customers
    .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
    .map(({ name, phoneNumber: phone, address, id, recentOrders }) => {
      const fullName = name.firstName + ' ' + name.lastName;
      const fullAddress =
        address.streetAddress + ', ' + address.secondaryAddress;
      const orderedLast = recentOrders?.[0]
        ? toDateTimeFormat(recentOrders[0].timeStamp)
        : 'n/a';
      const phoneNumber = formatForDisplay(phone);

      return { fullName, phoneNumber, fullAddress, id, orderedLast };
    });
};

export default function Customers(props) {
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(INITIAL_FILTER);
  const [isDescending, setIsDescending] = useState(false);
  const [customerList, setCustomerList] = useState([]);

  const theme = useTheme();
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.secondary[500],
      flex: '1',
      overflow: 'hidden',
    },
    table: {
      flexGrow: '1',
      boxShadow: '.5px 2px 2px rgba(0,0,0,.3)',
      minWidth: '700px',
    },
    cell: {
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        svg: {
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
    },
    arrowDown: { ml: '.75rem', fontSize: '1rem' },
    arrowUp: { ml: '.75rem', fontSize: '1rem' },
    buttons: {
      mt: '.5rem',
      // mr: '1rem',
      // ml: '1rem',
      display: 'flex',
      gap: '.5rem',
      minHeight: '3.5rem',
      flex: '1',
    },
  };

  const isLastPage = page >= Math.ceil(customerList.length / ROWS_PER_PAGE - 1);

  const handleNextPage = () => setPage(() => page + 1);
  const handlePrevPage = () => setPage(() => page - 1);

  const handleFilter = () => {
    setPage(0);
    setIsOpen(false);
  };

  const resetFilter = () => setFilter(INITIAL_FILTER);

  const handleDeleteCustomer = id => {
    deleteCustomer(id);
    const newCustomerList = customerList.filter(customer => id !== customer.id);
    setCustomerList(newCustomerList);
    setIsOpen(false);
  };

  const getCustomersToDisplay = () => {
    const filterCallback = customer => {
      let data;
      const { firstName, lastName } = customer.name;
      switch (filter.type) {
        case 'name':
          data = firstName + ' ' + lastName;
          break;
        case 'tel':
          data = customer.phoneNumber;
          break;
        case 'address':
          data =
            customer.address.streetAddress +
            ', ' +
            customer.address.secondaryAddress;
          break;
        default:
          data = firstName + ' ' + lastName;
          break;
      }
      return data.toLowerCase().includes(filter.text.toLowerCase());
    };

    return customerList.filter(filterCallback);
  };
  const sortedCustomersByName = getCustomersToDisplay().sort((a, b) => {
    if (a.name.lastName > b.name.lastName === isDescending) return -1;
    else if (a.name.lastName < b.name.lastName === isDescending) return 1;
    return 0;
  });
  const rows = buildRows(sortedCustomersByName, page);

  useEffect(() => {
    const customers = getFromSS('customers');
    setCustomerList(customers);
  }, []);

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={{ m: '.5rem', display: 'flex', flexDirection: 'column' }}>
          <TableContainer sx={styles.table}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{ backgroundColor: theme.palette.secondary[700] }}
                >
                  <TableCell
                    sx={styles.cell}
                    onClick={() => setIsDescending(() => !isDescending)}
                  >
                    {'Name'}
                    {isDescending ? (
                      <ArrowDownwardIcon sx={styles.arrowDown} />
                    ) : (
                      <ArrowUpwardIcon sx={styles.arrowUp} />
                    )}
                  </TableCell>
                  <TableCell align="right">Phone Number</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Ordered Last</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: theme.palette.secondary[300] }}>
                {rows &&
                  rows.map(row => (
                    <CustomerTableRow
                      customer={row}
                      key={row.id}
                      onDeleteCustomer={handleDeleteCustomer}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={styles.buttons}>
            <Button variant="contained" onClick={() => setIsOpen(true)}>
              FILTER
            </Button>
            {filter.text && (
              <Button variant="contained" onClick={resetFilter}>
                CLEAR FILTER
              </Button>
            )}
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
      <FilterModal
        filter={filter}
        setFilter={setFilter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleFilter={handleFilter}
      />
    </>
  );
}
