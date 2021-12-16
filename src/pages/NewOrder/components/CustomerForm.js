import { Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import TouchKeyboard from '../../../components/TouchKeyboard';

export default function CustomerForm() {
  const [phoneNumber, setPhoneNumber] = useState('   -   -    ');
  const [input, setInput] = useState('');
  const keyboard = useRef();

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <Box width="100vw">
      <Box width="100%" height="50%">
        <form>
          <input
            value={input}
            placeholder={'Tap on the virtual keyboard to start'}
            onChange={onChangeInput}
          />
        </form>
      </Box>
      <Box
        component={TouchKeyboard}
        input={input}
        setInput={setInput}
        keyboard={keyboard}
        width="100%"
        height="50%"
        backgroundColor="#393837"
      ></Box>
    </Box>
  );
}
