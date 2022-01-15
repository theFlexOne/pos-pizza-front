import React, { createContext, useContext, useReducer, useState } from 'react';
import { addCustomerToSS, getFromSS } from '../utils/sessionStorageHelpers';
import { useOrder } from './OrderContext';
import { v4 as uuid } from 'uuid';
import { postNewCustomer } from '../utils/fetchHelpers';

const DEFAULT_ACTION = { type: 'error', value: undefined, name: '' };

const CustomerContext = createContext();

const initialState = {
  phoneNumber: '555',
  firstName: '',
  lastName: '',
  streetAddress: '',
  secondaryAddress: '',
  formStep: 1,
};

const buildCustomer = ({
  phoneNumber,
  firstName,
  lastName,
  streetAddress,
  secondaryAddress,
}) => {
  return {
    phoneNumber,
    name: {
      firstName,
      lastName,
    },
    address: {
      streetAddress,
      secondaryAddress,
      city: 'Gravel Falls',
      state: 'Minnesota',
    },
    orderHistory: [],
    id: uuid().split('-')[0],
    created: Date.now(),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update-field': {
      const { name, value } = action;
      if (!name || value === undefined)
        throw new Error(
          "action.type 'update-field' needs a 'name' & 'value' prop"
        );
      const newState = { ...state, [name]: value };
      console.log(`state: `, newState);
      return newState;
    }
    case 'clear-field': {
      const { name } = action;
      const newState = { ...state, [name]: '' };
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

const CustomerProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectCustomer } = useOrder();

  const actions = {
    logThis() {
      console.log('this: ', this);
    },
    handleInputChange(element) {
      const value = element.rawValue || element.value || '';
      const action = {
        type: 'update-field',
        value,
        name: element.name,
      };
      dispatch(action);
    },
    handleClearInput(name) {
      const action = {
        type: 'update-field',
        value: '',
        name,
      };
      dispatch(action);
    },
    handleCustomerSubmit() {
      const customer = buildCustomer({ ...state });
      postNewCustomer(customer);
      addCustomerToSS(customer);
      selectCustomer(customer);
    },
    lookupCustomer() {
      const customerList = getFromSS('customers');
      const customer = customerList.find(
        ({ phoneNumber }) => phoneNumber === state.phoneNumber
      );
      if (customer) {
        selectCustomer(customer);
        return customer;
      }
      this.toNextPage();
      return {};
    },
    toNextPage() {
      setFormStep(() => formStep + 1);
    },
    toPrevPage() {
      setFormStep(() => formStep - 1);
    },
    getFormStep() {
      return formStep;
    },
    test() {
      const action = { ...DEFAULT_ACTION, type: 'TEST' };
      dispatch(action);
    },
  };

  const customerContext = {
    state,
    actions,
    more: {
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
    <CustomerContext.Provider value={customerContext}>
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
