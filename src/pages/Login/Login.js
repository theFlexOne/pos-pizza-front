import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, OutlinedInput, Stack, Typography } from '@mui/material';
import NumPad from '../../components/NumPad';
import useStyles from '../../hooks/useStyles';
import { getFromSS } from '../../utils/sessionStorageHelpers';
import { Validator } from '../../utils/formValidation';

const PIN_LENGTH = 4;

export default function Login() {
  const [isPassword, setIsPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const inputRef = useRef();
  const employees = useRef(null);
  const currentEmployee = useRef(undefined);
  const styles = useStyles().login;

  console.log(`Validator: `, { Validator });

  useEffect(() => {
    employees.current = getFromSS('employees');
    console.log(`employees: `, employees.current);
  }, [getFromSS]);

  const handleInputClick = () => inputRef.current.focus();
  const handleChange = e => {
    console.log(`e: `, e);
    const { value } = e.target;
    const { inputType } = e.nativeEvent;
    if (inputType === 'deleteContentBackward')
      return setInputValue(inputValue.slice(0, -1));
    if (inputValue.length === PIN_LENGTH) return inputValue;
    // const newValue = value.slice(0, -1);
    // console.log(`newValue: `, newValue);
    setInputValue(value);
  };

  const lookupEmployee = () => {
    console.log(`employees: `, employees.current);
    const foundEmployee = employees.current.find(
      employee => employee.loginId === inputValue
    );
    console.log(`foundEmployee: `, foundEmployee);
    currentEmployee.current = foundEmployee;
    setIsPassword(true);
    setInputValue('');
    return;
  };

  const validateLogin = () => {
    if (inputValue === currentEmployee.current.loginPin)
      return console.log('YAY');
    else console.log('BOOO');
  };

  const handleSubmit = () => {
    console.log(`id:`, inputRef.current.id);
    setIsPassword(() => !isPassword);
    // if (isPassword) {
    //   const isValid = Validator.validate(inputRef.current.id, inputValue);
    //   if (isValid) {
    //     validateLogin();
    //   } else {
    //     setError({
    //       type: inputRef.current.id,
    //       message: `${inputValue} is an invalid ${inputRef.current.id}`,
    //     });
    //     console.log(error.message);
    //   }
    // }
    // const isValid = Validator.validate('loginId', inputValue);
    // if (isValid) {
    //   lookupEmployee();
    // } else {
    //   setError({
    //     type: 'loginId',
    //     message: `${inputValue} is an invalid loginId`,
    //   });
    //   console.log(error.message);
    // }
  };

  const handleGoBack = () => {
    setIsPassword(false);
    setInputValue('');
  };

  // useEffect(() => {
  //   if (currentEmployee.current && !isPassword)
  //     setInputValue(currentEmployee.current.loginId);
  // }, [currentEmployee]);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.numPadWrapper}>
          <Typography>
            Please Enter a Valid {isPassword ? 'PIN' : 'ID'}
          </Typography>
          <OutlinedInput
            id={isPassword ? 'loginPin' : 'loginId'}
            label={isPassword ? 'password' : 'text'}
            // inputProps={{ value: inputValue }}
            inputRef={inputRef}
            onClick={handleInputClick}
            onChange={handleChange}
            value={inputValue}
            sx={styles.textField}
            placeholder={isPassword ? '****' : '1234'}
            variant="outlined"
            type={isPassword ? 'password' : 'text'}
          />
          <NumPad />
        </Box>
        {/* <input type="password" /> */}
        <Box sx={styles.buttonsWrapper}>
          <Button
            size="large"
            sx={{
              minWidth: '150px',
              mb: 'auto',
              mt: 'auto',
              mr: '1rem',
              p: '1rem',
              // height: '2.5rem',
            }}
            onClick={handleSubmit}
            variant="contained"
          >
            {isPassword ? 'Login' : 'Enter'}
          </Button>
          <Button
            onClick={handleGoBack}
            variant="contained"
            disabled={!isPassword}
            sx={{ minWidth: '150px', mb: '1rem', mr: '1rem', p: '1rem' }}
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
