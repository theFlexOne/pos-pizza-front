import { Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

// import './styles.css';

export default function TouchKeyboard({ input, setInput, keyboard }) {
  const [layout, setLayout] = useState('default');
  console.log(Keyboard);

  const onChange = input => {
    setInput(input);
    console.log('Input changed', input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  return (
    <Box>
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        layout={{
          default: [
            '1 2 3 4 5 6 7 8 9 0',
            'q w e r t y u i o p',
            "a s d f g h j k l '",
            '{shift} - z x c v b n m {bksp}',
            'cancel {space} {enter}',
          ],
          shift: [
            '1 2 3 4 5 6 7 8 9 0',
            'Q W E R T Y U I O P',
            'A S D F G H J K L "',
            '{shift} - Z X C V B N M {bksp}',
            'cancel {space} {enter}',
          ],
        }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Box>
  );
}
