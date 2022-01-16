import { Box, Button } from '@mui/material';
import styles from './styles';
import buildCharacterKeys from './keys/characterKeys';
import buildActionKeys from './keys/actionKeys';
import React, { forwardRef, useEffect, useRef } from 'react';

// const DEFAULT_OPTIONS = {
//   label: '',
//   size: undefined,
//   action: undefined,
//   value: '',
// };

const rowOne = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const rowTwo = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const rowThree = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const rowFour = ['{clear}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{bksp}'];
const rowFive = ['{prev}', ' ', '{next}'];

const Keyboard = ({ inputValue, onChange, options }) => {
  const keys = [...buildCharacterKeys(), ...buildActionKeys()];
  // const handleClick = target => {
  //   console.log(`target: `, target);
  //   return;
  //   const keyValue = target.value;
  //   if (keyValue[0] === '{') return onChange(inputValue);
  //   return onChange(inputValue + keyValue);
  // };

  const KeyboardKey = ({ inputKey: key }) => {
    const handleClick = e => {
      const activeTextField = document.activeElement;
      // const oldValue = activeTextField.value;
      const newValue = activeTextField.value + e.target.value;
      activeTextField.value = newValue;
      // console.log('key value: ', e.target.value);
    };
    return (
      <Button
        data-input-value={inputValue}
        sx={{ ...styles.key, ...key?.size }}
        color="secondary"
        variant="contained"
        data-type={key.type}
        onClick={handleClick}
        value={key.value || key.label}
      >
        {key.label}
      </Button>
    );
  };

  const generateKeys = str => {
    // if (str.includes('{')) return;
    const key = keys.find(key => str === key.name);
    return key && <KeyboardKey key={str} inputKey={key} />;
  };

  return (
    <Box sx={styles.keyboard}>
      <Box sx={{ ...styles.keyboardRow, ...styles.rowOne }}>
        <Box sx={{ gridColumn: '1 / 3' }} className="keyboard-gap" />
        {rowOne.map(generateKeys)}
        <Box sx={{ gridColumn: '23 / 25' }} className="keyboard-gap" />
      </Box>
      <Box sx={{ ...styles.keyboardRow, ...styles.secondRow }}>
        <Box sx={{ gridColumn: '1 / 3' }} className="keyboard-gap" />
        {rowTwo.map(generateKeys)}
        <Box sx={{ gridColumn: '23 / 25' }} className="keyboard-gap" />
      </Box>
      <Box sx={{ ...styles.keyboardRow, ...styles.thirdRow }}>
        <Box sx={{ gridColumn: '1 / 4' }} className="keyboard-gap" />
        {rowThree.map(generateKeys)}
        <Box sx={{ gridColumn: '21 / 25' }} className="keyboard-gap" />
      </Box>
      <Box sx={{ ...styles.keyboardRow, ...styles.fourthRow }}>
        <Box sx={{ gridColumn: '1 / 3' }} />
        {rowFour.map(generateKeys)}
        <Box sx={{ gridColumn: '23 / 25' }} />
      </Box>
      <Box sx={{ ...styles.keyboardRow, ...styles.bottomRow }}>
        <Button
          sx={{ gridColumn: '4 / 10' }}
          color="primary"
          variant="contained"
          onClick={options.prevBtn.action}
          disabled={options.prevBtn.disabled}
        >
          PREV
        </Button>
        <Button
          sx={{ gridColumn: '16/22' }}
          onClick={options.nextBtn.action}
          disabled={options.nextBtn.disabled}
          color="primary"
          variant="contained"
        >
          NEXT
        </Button>
        {/* {rowFive.map(generateKeys)} */}
      </Box>
    </Box>
  );
};

export default Keyboard;
