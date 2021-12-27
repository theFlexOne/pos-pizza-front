import { Box, Button } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';

const styles = {
  parent: {
    flex: '.5',
    display: 'flex',
    flexDirection: 'column',
    padding: '.25rem',
    gap: '.25rem',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: '3px',
    paddingLeft: '0.25rem',
  },
  label: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 'auto',
    flex: '1',
  },
};

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
  return (
    <Box sx={styles.parent}>
      {customer ? (
        <Box sx={styles.infoBox}>
          <Box display="flex">
            <Typography variant="caption" sx={styles.label}>
              {'NAME: '}
            </Typography>
            <Typography variant="body2" component="p" className="name" flex="4">
              {`${firstName} ${lastName}`.toUpperCase()}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" sx={styles.label}>
              {'TEL: '}
            </Typography>
            <Typography variant="body2" component="p" className="name" flex="4">
              {phoneNumber}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" sx={styles.label}>
              {'ADR: '}
            </Typography>
            <Typography variant="body2" component="p" className="name" flex="4">
              {(streetAddress + ', ' + secondaryAddress).toUpperCase()}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography variant="body2">
          CLICK BUTTON TO CHOOSE A CUSTOMER
        </Typography>
      )}
      <Box
        justifySelf="center"
        flex="1 0 20%"
        marginLeft="auto"
        marginRight=".25rem"
      >
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={changeCustomer}
          fullWidth
          sx={{ fontSize: 'smaller' }}
        >
          {customer ? 'RESET' : 'ADD CUSTOMER'}
        </Button>
      </Box>
    </Box>
  );
}
