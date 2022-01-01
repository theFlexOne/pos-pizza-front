import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@emotion/react';
import useDateTime from '../hooks/useDateTime';

export default function InfoBar() {
  const theme = useTheme();
  const styles = {
    bar: {
      borderTop: `1px solid ${theme.palette.secondary[800]}`,
      display: 'flex',
      backgroundColor: theme.palette.secondary[600],
    },
    cell: {
      flex: '1',
      align: 'center',
      color: 'rgba(255,255,255,0.5)',
    },
    divider: { backgroundColor: 'rgba(255,255,255,0.7)' },
  };
  //* Custom components
  const CellDivider = () => (
    <Divider orientation="vertical" sx={styles.divider} flexItem />
  );

  const InfoCell = ({ children, ...other }) => {
    return (
      <Typography variant="caption" component="p" sx={styles.cell}>
        {children}
      </Typography>
    );
  };

  const DateCell = () => {
    const date = useDateTime().toFormat('D');
    return <InfoCell>{date}</InfoCell>;
  };

  const TimeCell = () => {
    const time = useDateTime().toFormat('tt');
    return <InfoCell>{time}</InfoCell>;
  };

  return (
    <Box component="footer" sx={styles.bar}>
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
      <DateCell />
      <CellDivider />
      <TimeCell />
    </Box>
  );
}
