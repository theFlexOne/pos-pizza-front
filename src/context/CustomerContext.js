import React, { createContext, useContext, useReducer, useState } from 'react';
<<<<<<< HEAD
import { v4 as uuid } from 'uuid';
import { addToSessionsStorage } from '../utils/utilityFunctions';
import useOrder from '../hooks/useOrder';

const DEFAULT_ACTION = {
  type: 'error',
  value: undefined,
  name: '',
  state: undefined,
};
=======
import { addCustomerToSS, getFromSS } from '../utils/sessionStorageHelpers';
import { useOrder } from './OrderContext';
import { v4 as uuid } from 'uuid';
import { postNewCustomer } from '../utils/fetchHelpers';

const DEFAULT_ACTION = { type: 'error', value: undefined, name: '' };
>>>>>>> main_MaskedPhoneInput

const CustomerContext = createContext();

const initialState = {
  phoneNumber: '',
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
<<<<<<< HEAD
    case 'clear-field': {
      const { name } = action;
      const newState = { ...state, [name]: '' };
      return newState;
    }

    case 'update-field': {
      const { name, value } = action;
      console.log({ name, value });
      const newState = { ...state, [name]: value };
      console.log({ newState });
      return newState;
    }

    case 'clear-page': {
      const { fields } = action;
      const newState = fields.reduce((acc, name) => ({ ...acc, [name]: '' }), {
        ...state,
      });
      return newState;
    }
    case 'initCustomerList': {
      const { value } = action;
      const newState = { value };
      return newState;
    }
    case 'setFormStep': {
      const { value } = action;
      console.log(`value: `, value);
      const newState = { ...state, formStep: value };
=======
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
>>>>>>> main_MaskedPhoneInput
      return newState;
    }
    case 'reset': {
      return initialState;
    }

    case 'lookup': {
      // return nextPage();
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

<<<<<<< HEAD
// const addToSessionsStorage = data => {
//   for (const section in data) {
//     sessionStorage.setItem(`${section}`, JSON.stringify(data[section]));
//   }
// };

const CustomerProvider = ({ children, ...otherProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { phoneNumber, formStep } = state;

  const order = useOrder();
  console.log(`order: `, order);

  class NewCustomer {
    constructor(
      phoneNumber,
      firstName,
      lastName,
      streetAddress,
      secondaryAddress
    ) {
      this.phoneNumber = phoneNumber;
      this.name = {
        firstName,
        lastName,
      };
      this.address = {
        streetAddress,
        secondaryAddress,
        city: 'Gravel Falls',
        state: 'Minnesota',
      };
      this.orderHistory = [];
      this.id = uuid().split('-')[0];
      this.created = Date.now();
    }
    get name() {
      return `${this.firstName} ${this.lastName}`;
    }
    get address() {
      return `${this.streetAddress}, ${this.secondaryAddress}`;
    }
  }

  const actions = {
    handleInputChange(element) {
      const action = {
        type: 'update-field',
        value: element?.rawValue || element.value,
=======
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
>>>>>>> main_MaskedPhoneInput
        name: element.name,
      };
      dispatch(action);
    },
<<<<<<< HEAD
    clearField({ element }) {
      const action = {
        ...DEFAULT_ACTION,
        type: 'clear-field',
        value: '',
        name: element.name,
      };
      dispatch(action);
    },
    resetCustomer() {
      const action = { ...DEFAULT_ACTION, type: 'reset' };
      dispatch(action);
    },
    toNextStep() {
      const action = {
        ...DEFAULT_ACTION,
        type: 'setFormStep',
        value: formStep + 1,
      };
      dispatch(action);
    },
    toPrevStep() {
      const action = {
        ...DEFAULT_ACTION,
        type: 'setFormStep',
        value: formStep - 1,
      };
      dispatch(action);
    },
    backToStart() {
      const action = {
        ...DEFAULT_ACTION,
        type: 'setFormStep',
        value: formStep + 1,
      };
      dispatch(action);
    },
    lookupCustomer() {
      const customers = JSON.parse(sessionStorage.customers);
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].phoneNumber === phoneNumber) {
          const customer = customers[i];
          order.customer = customer;
          return customer;
        }
      }
      return false;
    },
    async addCustomerToList(customer) {
      const customers = sessionStorage.getItem('customers');
      const customerList = await JSON.parse(customers);
      const newCustomerList = JSON.stringify([...customerList, customer]);
      addToSessionsStorage('customers', newCustomerList);
      console.log(JSON.parse(sessionStorage.getItem('customers')));
      //! setCustomerList(() => [...customerList, customer]);
    },
    focusInput(element) {
      element.focus();
    },
=======
    handleCustomerSubmit() {
      const customer = buildCustomer({ ...state });
      console.log(customer);
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
>>>>>>> main_MaskedPhoneInput
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
