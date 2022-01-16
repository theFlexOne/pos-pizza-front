import styles from '../styles';

const actions = [
  {
    name: '{bksp}',
    label: 'bksp',
    action(inputValue) {
      return inputValue.slice(0, -1);
    },
  },
];

class ActionKey {
  constructor({ name, value, label, size, action }) {
    console.log(`value: `, value);
    this.name = name || new Error('"ActionKey" requires a \'name\' property');
    this.value = name;
    this.label = label || name;
    this.size = size || styles.keySizes.md;
    this.type = 'action';
    this.action = action;
  }
  // action(inputValue) {
  //   return this.value(inputValue);
  // }
}

const buildActionKeys = (options = {}) => {
  const { next, prev } = options;
  const keys = actions.map(key => {
    if (key.name === '{next}') key.value = next || undefined;
    if (key.name === '{prev}') key.value = prev || undefined;
    return new ActionKey(key);
  });
  return keys;
};

export default buildActionKeys;
