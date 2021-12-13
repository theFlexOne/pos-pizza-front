import { Button } from '@mui/material';
import React from 'react';
// import './CustomerInfoBox.css';
import Typography from '@mui/material/Typography';

export default function CustomerInfoBox() {
  return (
    <section className="Customer-Info-Box">
      <div className="left">
        <Typography variant="body2" component="p" className="name">
          *name here*
        </Typography>
        <Typography variant="body2" component="p" className="phone-number">
          *phone number here*
        </Typography>
        <Typography variant="body2" component="p" className="address">
          *address here (only if delivery)*
        </Typography>
      </div>
      <div className="right">
        <Typography
          variant="caption"
          component="p"
          className="order-type"
          color="primary"
        >
          *order type*
        </Typography>

        <Button variant="contained" size="small" color="primary">
          Edit Info
        </Button>
      </div>
    </section>
  );
}
