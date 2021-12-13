import React from 'react';
// import './InfoBar.css';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
// import useDateTime from '../../hooks/useDateTime';
import { DateTime } from 'luxon';

export default function InfoBar() {
  const theme = useTheme();

  const dt = DateTime.now();
  console.log(dt);
  const InfoCell = ({ children }) => {
    return (
      <Typography
        variant="caption"
        component="p"
        flex="1"
        align="center"
        color="rgba(255,255,255,0.5)"
      >
        {children}
      </Typography>
    );
  };

  const CellDivider = () => (
    <Divider
      orientation="vertical"
      sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
      flexItem
    />
  );

  return (
    <Box
      borderTop={`1px solid ${theme.palette.grey[800]}`}
      component="footer"
      className="Info-Bar"
      display="flex"
      backgroundColor={theme.palette.blueGrey[600]}
    >
      <InfoCell>USER</InfoCell>
      <CellDivider />
      <InfoCell>OTHER</InfoCell>
      <CellDivider />
      <InfoCell>OTHER</InfoCell>
      <CellDivider />
      <InfoCell>OTHER</InfoCell>
      <CellDivider />
      <InfoCell>OTHER</InfoCell>
      <CellDivider />
      <InfoCell>OTHER</InfoCell>
      <CellDivider />
      <InfoCell>DATE</InfoCell>
      <CellDivider />
      <InfoCell>TIME</InfoCell>
    </Box>
  );
}
