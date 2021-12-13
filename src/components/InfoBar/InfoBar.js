import React from 'react';
// import './InfoBar.css';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function InfoBar() {
  const theme = useTheme();
  const InfoCell = ({ children }) => {
    return (
      <Typography
        variant="caption"
        component="p"
        flex="1"
        // borderRight={`1px solid ${theme.palette.grey[800]}`}
        align="center"
      >
        {children}
      </Typography>
    );
  };

  return (
    <Box
      borderTop={`1px solid ${theme.palette.grey[800]}`}
      component="footer"
      className="Info-Bar"
      display="flex"
      backgroundColor={theme.palette.grey[600]}
    >
      <InfoCell>USER</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>OTHER</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>OTHER</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>OTHER</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>OTHER</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>OTHER</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>DATE</InfoCell>
      <Divider orientation="vertical" flexItem />
      <InfoCell>TIME</InfoCell>
    </Box>
  );
}
