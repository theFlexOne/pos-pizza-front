import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';

export default function Settings() {
  const [index, setIndex] = useState(0);

  const {
    palette: { primary, secondary },
  } = useTheme();
  const styles = {
    tab: {
      pt: '1.5rem',
      pb: '1.5rem',
      color: primary[500],
      '&.Mui-selected': {
        bgcolor: primary[500],
        color: secondary[900],
      },
    },
  };

  const SettingsTab = ({ label, sx, ...other }) => {
    return <Tab label={label} sx={{ ...styles.tab, ...sx }} {...other} />;
  };

  return (
    <Box sx={{ height: '100%', bgcolor: secondary[500], flexBasis: '20%' }}>
      <Tabs
        value={index}
        orientation="vertical"
        sx={{ flexGrow: '1', '& .MuiTabs-flexContainer': { flexGrow: '1' } }}
        onChange={(_, val) => setIndex(val)}
      >
        <SettingsTab label="Menu" />
        <SettingsTab label="Customers" />
        <SettingsTab label="OTHER" />
      </Tabs>
    </Box>
  );
}
