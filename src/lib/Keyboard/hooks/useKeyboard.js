import { useReducer, useState } from 'react';

// const initialState = '';

// const reducer = (state, action) => {};

const useKeyboard = () => {
  const [inputValue, setInputValue] = useState('');
  const onChange = val => setInputValue(val);
  return { inputValue, onChange };
};

export default useKeyboard;
