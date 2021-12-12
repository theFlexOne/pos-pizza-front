import './SettingsNavBar.css';
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
export default function SettingsNavBar() {
  return (
    <Box>
      <nav>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText>Item #1</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
