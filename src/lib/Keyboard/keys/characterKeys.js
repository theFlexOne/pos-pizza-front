import { createEvent } from '@testing-library/react';
import styles from '../styles';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbols = [
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '}',
  '[',
  ']',
  '|',
  `\\`,
  ':',
  ';',
  '"',
  "'",
  '<',
  ',',
  '>',
  '.',
  '?',
  '/',
];
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const whitespace = [' ', '\n', '\r', '\t'];

// const event2 = inputRef.current && createEvent.keyDown(inputRef.current);

const outputCharacter = (char, inputRef) => {
  console.log(`inputRef: `, inputRef);
  console.log(`value: `, char);
  const newValue = inputRef.current.value + char;
  return (inputRef.current.value = newValue);
};

const getType = value => {
  if (numbers.includes(value)) return 'number';
  if (letters.includes(value.toLowerCase())) return 'letter';
  if (symbols.includes(value)) return 'symbol';
  if (whitespace.includes(value)) return 'whitespace';
  return 'other';
};

class CharacterKey {
  constructor({ name, value, label, size }) {
    if (name === ' ') console.log(name);
    this.name =
      name || new Error('"CharacterKey" requires a \'name\' property');
    this.value = value || name;
    this.label = label || name;
    this.size = size || styles.keySizes.sm;
    this.type = getType(this.name);
    // this.action() {}
  }
  OnVirtualKeyPress() {}
  outputCharacter() {
    return outputCharacter(this.value, this.ref);
  }
  // get refValue() {
  //   return this.ref?.current.value || undefined;
  // }
}

const buildCharacterKeys = () => {
  const keys = [...numbers, ...letters, ...symbols, ...whitespace].map(
    key => new CharacterKey({ name: key })
  );
  return keys;
};

export default buildCharacterKeys;
