import React, { createContext, useContext, useReducer } from 'react';

const CustomerContext = createContext();

const initialState = {
  phoneNumber: '',
  firstName: '',
  lastName: '',
  streetAddress: '',
  secondaryAddress: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'clear-field': {
      const { name } = action;
      const newState = { ...state, [name]: '' };
      return newState;
    }
    case 'update-field': {
      const { name, value } = action;
      const newState = { ...state, [name]: value };
      return newState;
    }
    case 'clear-page': {
      const { fields } = action;
      const newState = fields.reduce(
        (acc, name) => {
          return { ...acc, [name]: '' };
        },
        { ...state }
      );
      return newState;
    }
    case 'reset': {
      return initialState;
    }
    case 'TEST':
      console.log('TESTING');
      return state;
    default:
      console.log('NOT A VALID TYPE: ', action.type);
      console.log('state: ', state);
      console.log('action: ', action);
      return state;
  }
};

const _action = { type: 'error', value: undefined, name: '' };

const CustomerProvider = ({ children, ...otherProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    handleInputChange({ target }) {
      const action = {
        type: 'update-field',
        value: target.value,
        name: target.name,
      };
      dispatch(action);
    },
    clearField({ target }) {
      const action = { type: 'clear-field', value: '', name: target.name };
      dispatch(action);
    },
    resetCustomer() {
      const action = { ..._action, type: 'reset' };
      dispatch(action);
    },
    test() {
      const action = { ..._action, type: 'TEST' };
      dispatch(action);
    },
  };

  const customerContext = {
    state,
    actions,
    customer: {
      fullName() {
        const { firstName, lastName } = state;
        const fullName = `${firstName} ${lastName}`;
        return fullName;
      },
      fullAddress() {
        const { streetAddress, secondaryAddress } = state;
        const fullAddress = `${streetAddress}, ${secondaryAddress}`;
        return fullAddress;
      },
      phoneNumber() {
        const { phoneNumber } = state;
        const formattedPhoneNumber = `${phoneNumber.slice(
          0,
          3
        )}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        return formattedPhoneNumber;
      },
    },
  };

  return (
    <CustomerContext.Provider value={customerContext} {...otherProps}>
      {children}
    </CustomerContext.Provider>
  );
};

const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) throw new Error('NOT INSIDE THE CONTEXT PROVIDER');
  return context;
};

export { useCustomer, CustomerProvider };
