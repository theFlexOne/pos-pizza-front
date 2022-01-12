import React, { forwardRef, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import Cleave from 'cleave.js/react';
import { useCustomer } from '../context/CustomerContext';

const options = {
  blocks: [0, 3, 3, 4],
  delimiters: ['(', ') ', '-', '-'],
  numericOnly: true,
};

const MyCleaveInput = forwardRef((props, ref) => {
  return <Cleave options={options} htmlRef={ref} {...props} />;
});

export default function MaskedPhoneInput() {
  const { state, actions } = useCustomer();
  const { phoneNumber } = state;
  const { handleChange } = actions;
  const inputRef = useRef();

  // const handleChange = e => setPhone(e.target.rawValue);
  const handleClick = () => inputRef.current.focus();

  console.log('phoneNumber: ', phoneNumber);

  return (
    <TextField
      name="phoneNumber"
      label="Phone Number"
      value={phoneNumber}
      onChange={handleChange}
      onClick={handleClick}
      InputProps={{ inputComponent: MyCleaveInput }}
      fullWidth
      autoFocus
      required
      inputRef={inputRef}
    />
  );
}

{
  /* <TextField
  value={phoneNumber}
  // onChange={handleChange}
  onChange={handleInputChange}
  onClick={focusTextField}
/>; */
}
