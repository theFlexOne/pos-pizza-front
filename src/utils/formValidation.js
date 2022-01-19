import constants from '../constants/constants';

const { LOGIN_ID_MIN, LOGIN_ID_MAX, LOGIN_PIN_MIN, LOGIN_PIN_MAX } = constants;

class Validator {
  static validate(type, value) {
    switch (type) {
      case 'loginId': {
        const range = `${LOGIN_ID_MIN},${LOGIN_ID_MAX}`;
        const regex = new RegExp(`^\\d{${range}}$`);
        return regex.test(value);
      }
      case 'loginPin': {
        const range = `${LOGIN_PIN_MIN},${LOGIN_PIN_MAX}`;
        const regex = new RegExp(`^\\d{${range}}$`);
        return regex.test(value);
      }
    }
  }
  get constants() {
    return constants;
  }
}

export { Validator };
