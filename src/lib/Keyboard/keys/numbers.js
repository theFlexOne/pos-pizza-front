import styles from '../styles';

class NumberKey {
  constructor({ name, value, label, size }) {
    this.name = name || new Error('"NumberKey" requires a \'name\' property');
    this.value = value || name;
    this.label = label || name;
    this.size = size || styles.keySizes.sm;
  }
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const numberKeys = numbers.map(num => {
  return new NumberKey({ name: num });
});

console.log(`numberKeys: `, numberKeys);

export default numberKeys;

// const numberKeys = [
//   {
//     name: '1',
//   },
//   {
//     name: '2',
//   },
//   {
//     name: '3',
//   },
//   {
//     name: '4',
//   },
//   {
//     name: '5',
//   },
//   {
//     name: '6',
//   },
//   {
//     name: '7',
//   },
//   {
//     name: '8',
//   },
//   {
//     name: '9',
//   },
//   {
//     name: '0',
//   },
// ];
