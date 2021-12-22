import { Box, Button } from '@mui/material';
import React from 'react';
// import './CustomerInfoBox.css';
import Typography from '@mui/material/Typography';

export default function CustomerInfoBox({
  customer = undefined,
  changeCustomer,
}) {
  let firstName, lastName, phoneNumber, streetAddress, secondaryAddress;
  customer &&
    ({
      name: { firstName, lastName },
      phoneNumber,
      address: { streetAddress, secondaryAddress },
    } = customer);
  console.log(customer || 'N/A');
  // console.log(fn, ln, pn, ad1, ad2);
  return (
    <Box flex=".5" display="flex" flexDirection="column">
      {customer ? (
        <>
          <Typography variant="body2" component="p" className="name">
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="body2" component="p" className="phone-number">
            {phoneNumber}
          </Typography>
          <Typography variant="body2" component="p" className="address">
            {streetAddress + ', ' + secondaryAddress}
          </Typography>
        </>
      ) : null}
      <Box justifySelf="center" margin="auto 1.5rem">
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={changeCustomer}
          fullWidth
        >
          {customer ? 'Change Customer' : 'Add Customer'}
        </Button>
      </Box>
    </Box>
  );
}
