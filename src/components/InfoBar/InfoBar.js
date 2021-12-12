import React from 'react';
import './InfoBar.css';
import Typography from '@mui/material/Typography';

export default function InfoBar() {
  return (
    <footer className="Info-Bar">
      <Typography variant="caption" component="p" className="info">
        DATE
      </Typography>
      <Typography variant="caption" component="p" className="info">
        TIME
      </Typography>
      <Typography variant="caption" component="p" className="info">
        USER
      </Typography>
      <Typography variant="caption" component="p" className="info">
        CUSTOM
      </Typography>
      <Typography variant="caption" component="p" className="info">
        CUSTOM
      </Typography>
      <Typography variant="caption" component="p" className="info">
        CUSTOM
      </Typography>
    </footer>
  );
}
