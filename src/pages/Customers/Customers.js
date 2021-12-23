import { Box } from '@mui/system';
import React from 'react';

export default function Customers({ customers }) {
  const rows = customers.map(({ name, phoneNumber, address }) => {
    const fullName = name.firstName + ' ' + name.lastName;
    const fullAddress = address.streetAddress + ', ' + address.secondaryAddress;

    return { fullName, phoneNumber, fullAddress };
  });

  console.log(rows);

  return (
    <Box>
      {rows.map(row => (
        <div>{JSON.stringify(row)}</div>
      ))}
    </Box>
  );
}
