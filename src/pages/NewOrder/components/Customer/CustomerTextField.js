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
  );
}
