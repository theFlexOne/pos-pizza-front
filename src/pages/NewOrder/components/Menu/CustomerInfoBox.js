import { Box, Button } from '@mui/material';
import React from 'react';
// import './CustomerInfoBox.css';
import Typography from '@mui/material/Typography';

export default function CustomerInfoBox({ customer, changeCustomer }) {
  const {
    name: { firstName, lastName },
    phoneNumber,
    address: { streetAddress, secondaryAddress },
  } = customer;
  console.log(customer);
  // console.log(fn, ln, pn, ad1, ad2);
  return (
    <Box>
      <div className="left">
        <Typography variant="body2" component="p" className="name">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant="body2" component="p" className="phone-number">
          {phoneNumber}
        </Typography>
        <Typography variant="body2" component="p" className="address">
          {streetAddress + ', ' + secondaryAddress}
        </Typography>
      </div>
      <div className="right">
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={changeCustomer}
        >
          Change Customer
        </Button>
      </div>
    </Box>
  );
}
