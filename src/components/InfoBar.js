import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@emotion/react';
import useDateTime from '../hooks/useDateTime';

export default function InfoBar() {
  const theme = useTheme();

  const [date, time] = useDateTime();

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

  // const ClockCell = () => {
  //   return <InfoCell />;
  // };

  const CellDivider = () => (
    <Divider
      orientation="vertical"
      sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
      flexItem
    />
  );

  return (
    <Box
      borderTop={`1px solid ${theme.palette.secondary[800]}`}
      component="footer"
      className="Info-Bar"
      display="flex"
      backgroundColor={theme.palette.secondary[600]}
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
      <InfoCell>{date}</InfoCell>
      <CellDivider />
      <InfoCell>{time}</InfoCell>
    </Box>
  );
}
