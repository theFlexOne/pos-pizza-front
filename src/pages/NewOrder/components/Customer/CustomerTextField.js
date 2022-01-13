import React, { useRef, forwardRef } from 'react';
import { TextField } from '@mui/material';
import Cleave from 'cleave.js/react';
import { useCustomer } from '../../../../context/CustomerContext';

const CleavePhoneInput = forwardRef((props, ref) => {
  const options = {
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-', '-'],
    numericOnly: true,
  };
  return <Cleave options={options} htmlRef={ref} {...props} />;
});

const cleaveInputProps = { inputComponent: CleavePhoneInput };

const CustomerTextField = forwardRef(
  ({ name, label, autoFocus, onEnter, ...other }, ref) => {
    const { state, actions } = useCustomer();
    const value = state[name];
    const { handleInputChange } = actions;
    const inputRef = ref || useRef();

    const handleChange = ({ target }) => handleInputChange(target);
    const handleClick = () => inputRef.current.focus();

    const isPhoneNumber = name === 'phoneNumber';

    return (
      <TextField
        name={name || undefined}
        label={label || ''}
        value={value}
        onClick={handleClick}
        onChange={handleChange}
        inputRef={inputRef}
        InputProps={isPhoneNumber ? cleaveInputProps : undefined}
        inputProps={{ autoFocus }}
        fullWidth
        {...other}
      />
    );
  }
);

export default CustomerTextField;
