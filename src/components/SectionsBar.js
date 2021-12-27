import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function SectionBar({ sections, index, changeSection }) {
  const SectionButton = props => {
    const { id, label } = props;
    const status = (() => {
      return id === index
        ? {
            backgroundColor: theme.palette.secondary[50],
            color: theme.palette.primary[900],
            // fontWeight: 'bold',
            // fontSize: 'larger',
          }
        : {
            backgroundColor: theme.palette.secondary[300],
            color: theme.palette.secondary[50],
          };
    })();
    return (
      <Box
        {...props}
        flex="1 1 100%"
        position="relative"
        padding=".25rem .5rem"
      >
        <Button
          // variant={id == index ? 'contained' : 'outlined'}
          onClick={() => changeSection(id)}
          sx={{
            ...status,
            minHeight: '100%',
            minWidth: '100%',
          }}
          {...props}
        >
          {label}
        </Button>
      </Box>
    );
  };

  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor={theme.palette.secondary[600]}
    >
      {sections.map((section, i) => (
        <SectionButton key={section} id={i} label={section} />
      ))}
    </Box>
  );
}
