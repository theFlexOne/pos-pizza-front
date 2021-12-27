import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material';
import Keyboard from '../../../components/Keyboard';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';

const styles = {
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80%',
    p: 0,
  },
  container: {
    backgroundColor: '#353536',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    p: '2rem',
  },
  form: {
    flexGrow: '1',
    bgcolor: 'rgba(255, 255, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    p: '0 5rem',
  },
  textFieldBox: {
    mr: '5rem',
    flex: '1',
  },
  textField: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: '4px',
  },
};

export default function FilterModal({
  isOpen,
  setIsOpen,
  filter,
  setFilter,
  handleFilter,
}) {
  const inputText = filter.text;
  const filterType = filter.type;
  // const [inputText, setInputText] = useState('');
  // const [filterType, setFilterType] = useState('name');
  const {
    palette: { primary, secondary },
  } = useTheme();

  const filterSubmitBtn = {
    label: 'search',
    action: handleFilter,
  };

  const cancelBtn = {
    label: 'cancel',
    action() {
      setFilter({ text: '', type: 'name' });
      setIsOpen(false);
    },
  };

  const FilterButton = ({ label, disabled }) => {
    const active = label === filterType ? { bgcolor: primary[800] } : {};

    return (
      <Button
        variant="contained"
        onClick={e => setFilter({ ...filter, type: e.target.textContent })}
        sx={{ ...active, minHeight: '3.5rem', flexBasis: '100%' }}
        disabled={disabled}
      >
        {label}
      </Button>
    );
  };

  return (
    <Dialog fullScreen open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogContent sx={styles.dialog}>
        <Box sx={styles.container}>
          <Box sx={styles.form}>
            <Box sx={styles.textFieldBox}>
              <TextField
                label={`Filter customers by ${filterType}:`}
                value={inputText}
                onChange={e => setFilter({ ...filter, text: e.target.value })}
                sx={styles.textField}
                fullWidth
              />
            </Box>
            <ButtonGroup sx={{ flexBasis: '40%' }}>
              <FilterButton label="name" />
              <FilterButton label="tel" />
              <FilterButton label="address" />
            </ButtonGroup>
          </Box>
        </Box>
        <Keyboard
          sx={{ flexGrow: 1 }}
          next={filterSubmitBtn}
          prev={cancelBtn}
        />
      </DialogContent>
    </Dialog>
  );
}
