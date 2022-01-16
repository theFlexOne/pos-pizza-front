import { Box } from '@mui/material';
import React, { useRef, useEffect } from 'react';
// import Keyboard from '../../../../components/Keyboard';
import Keyboard from '../../../../lib/Keyboard/Keyboard';
import { useTheme } from '@emotion/react';
import CustomerTextField from './CustomerTextField';
import { useCustomer } from '../../../../context/CustomerContext';
import useStyles from '../../../../hooks/useStyles';

export default function CustomerFormName({ nextPage, prevPage }) {
  const { firstName } = useCustomer().state;
  const styles = useStyles().customerFormName;
  const inputRef = useRef();

  const nextBtn = {
    label: 'Next Page',
    action: nextPage,
    disabled: !firstName,
  };

  const prevBtn = {
    label: 'Prev Page',
    action: prevPage,
  };

  const handleKeyDown = ({ key }) => key === 'Enter' && nextPage();
  const handleInput = e => console.dir(inputRef.current);

  const options = {
    nextBtn,
    prevBtn,
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <Box
          component="form"
          sx={styles.form}
          ref={inputRef}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
        >
          <Box sx={styles.firstNameWrapper}>
            <CustomerTextField
              onEnter={() => nextPage()}
              label="First Name"
              name="firstName"
              autoFocus
              sx={styles.firstName}
            />
          </Box>
          <Box sx={styles.lastNameWrapper}>
            <CustomerTextField
              onEnter={() => nextPage()}
              label="Last Name"
              name="lastName"
              sx={styles.lastName}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.keyboardContainer}>
        {/* <Keyboard /> */}
        <Keyboard options={options} />
      </Box>
    </Box>
  );
}
