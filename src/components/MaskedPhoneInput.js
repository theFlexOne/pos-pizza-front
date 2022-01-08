import React, { forwardRef, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import Cleave from 'cleave.js/react';
import { useCustomer } from '../context/CustomerContext';
import { useOrder } from '../context/OrderContext';
import CustomerTextField from '../pages/NewOrder/components/Customer/CustomerTextField';

const options = {
  blocks: [0, 3, 3, 4],
  delimiters: ['(', ') ', '-', '-'],
  numericOnly: true,
};

const MyCleaveInput = forwardRef((props, ref) => {
  return <Cleave options={options} htmlRef={ref} {...props} />;
});

const MaskedPhoneInput = (props, ref) => {
  const { state, actions } = useCustomer();
  const { phoneNumber } = state;
  const { handleInputChange } = actions;
  const inputRef = useRef();
  const order = useOrder();
  console.log(`order: `, { order });

  const handleChange = () => {
    const element = inputRef.current;
    handleInputChange(element);
  };
  const handleClick = () => inputRef.current.focus();

  // console.log('phoneNumber: ', phoneNumber);

  return (
    <>
      <CustomerTextField
        name="phoneNumber"
        label="Phone Number"
        InputProps={{ inputComponent: MyCleaveInput }}
        inputRef={inputRef}
        required
        autoFocus
      />
      {/* <TextField
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
      /> */}
    </>
  );
};

export default MaskedPhoneInput;
{
  /* <TextField
  value={phoneNumber}
  // onChange={handleChange}
  onChange={handleInputChange}
  onClick={focusTextField}
/>; */
}
