<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import { useOrder } from '../../../../context/OrderContext';

export default function CustomerTextField(props) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const orderRef = useOrder();
  const { name, label } = props;

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
    // inputRef.current.focus();
  };

  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    const currentCustomer = orderRef.current;
    orderRef.current = { ...currentCustomer, [name]: inputValue };
    console.log(`orderRef.current: `, orderRef.current);
  }, [inputValue]);

  return (
    <TextField
      InputProps={{ inputRef: inputRef }}
      inputRef={inputRef}
      value={inputValue}
      onChange={handleChange}
      onClick={focusInput}
      {...props}
      fullWidth
    />
=======
import React, { useRef, forwardRef } from 'react';
import { TextField } from '@mui/material';
import Cleave from 'cleave.js/react';
import { useCustomer } from '../../../../context/CustomerContext';

const CleavePhoneNumber = forwardRef((props, ref) => {
  const options = {
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-', '-'],
    numericOnly: true,
  };
  return <Cleave options={options} htmlRef={ref} {...props} />;
});

const cleaveInputProps = { inputComponent: CleavePhoneNumber };

export default function CustomerTextField({
  name,
  label,
  autoFocus,
  ...other
}) {
  const { state, actions } = useCustomer();
  const value = state[name];
  const { handleInputChange } = actions;

  const inputRef = useRef();

  // console.log(`${name || label || 'input'} =`, value);
  // console.log({ name, label });
  // console.log(`inputRef: `, { inputRef });

  const handleChange = ({ target }) => {
    handleInputChange(target);
  };
  const handleClick = () => inputRef.current.focus();

  const isPhoneNumber = name === 'phoneNumber';

  return (
    <>
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
    </>
>>>>>>> main_MaskedPhoneInput
  );
}
