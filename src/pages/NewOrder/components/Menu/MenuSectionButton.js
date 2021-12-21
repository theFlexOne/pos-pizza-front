import './MenuSectionButton.css';
import React from 'react';
import Button from '@mui/material/Button';

export default function MenuSectionButton({
  sectionInfo,
  active,
  changeSection,
}) {
  return (
    <Button
      variant={active ? 'contained' : 'outlined'}
      color="secondary"
      onClick={() => changeSection(sectionInfo)}
      disableElevation
    >
      {sectionInfo.section}
    </Button>
  );
}
