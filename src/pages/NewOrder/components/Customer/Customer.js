import React, { useReducer } from 'react';
import CustomerLookup from './CustomerLookup';
import CustomerFormName from './CustomerFormName';
import CustomerFormAddress from './CustomerFormAddress';
import { v4 as uuid } from 'uuid';
import { focusTextField } from '../../../../utils/utilityFunctions';
import {
  useCustomer,
  CustomerProvider,
} from '../../../../context/CustomerContext';

const POS_DATA_URL = 'http://localhost:8000';

// class NewCustomer {
//   constructor({
//     phoneNumber,
//     firstName,
//     lastName,
//     streetAddress,
//     secondaryAddress,
//   }) {
//     this.phoneNumber = phoneNumber;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.streetAddress = streetAddress;
//     this.secondaryAddress = secondaryAddress;
//   }
//   get name() {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// const FormPage = ({ children, ...otherProps }) => {
//   // const { state: state1, actions, customer } = useCustomer();
//   return (
//     <CustomerProvider>{children}</CustomerProvider>
//   )
// }

const NewCustomer = ({
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

const initialState = {
  phoneNumber: '',
  firstName: '',
  lastName: '',
  streetAddress: '',
  secondaryAddress: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      const { name, value } = action;
      const newState = { ...state, [name]: value };
      return newState;
    }
    case 'clearField': {
      const { name } = action;
      const newState = { ...state, [name]: '' };
    }
    case 'clearAll': {
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

export default function Customer({
  customerList,
  selectCustomer,
  formStep,
  changeFormStep,
  onNewCustomer,
  goToMenu,
}) {
  // const [state1, dispatch] = useReducer(reducer, initialState);
  // const { state, actions, customer } = useCustomer();
  // const { phoneNumber, firstName, lastName, streetAddress, secondaryAddress } =
  //   state;

  // console.log({ state1, actions, customer });
  //* displays all input values in real time so I can make sure they are correct
  // console.log(state);

  // // Auto-formatting phone number - "###-###-####"
  // if (phoneNumber.length === 3 || phoneNumber.length === 7)
  //   setPhoneNumber(() => phoneNumber + '-');

  // const handleInputChange = ({ target }) => {
  //   const action = {
  //     type: 'update-field',
  //     name: target.name,
  //     value: target.value,
  //   };
  //   dispatch(action);
  // };

  // const clearField = ({ target }) => {
  //   const action = { type: 'clearField', name: target.name };
  //   dispatch(action);
  // };

  const lookupPhoneNumber = phoneNumber => {
    for (let i = 0; i < customerList.length; i++) {
      if (customerList[i].phoneNumber === phoneNumber)
        return selectCustomer(customerList[i]);
    }
    return nextPage();
  };

  const nextPage = () => {
    changeFormStep(formStep + 1);
  };

  const prevPage = () => {
    changeFormStep(formStep - 1);
  };

  // const handleCustomerSubmit = () => {
  //   const customer = NewCustomer({
  //     phoneNumber,
  //     firstName,
  //     lastName,
  //     streetAddress,
  //     secondaryAddress,
  //   });
  //   const options = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(customer),
  //   };
  //   fetch(POS_DATA_URL + '/customers', options)
  //     .then(res => res.json())
  //     .then(data => {
  //       onNewCustomer(data);
  //     });
  // };

  const getFormPage = () => {
    switch (formStep) {
      case 1:
        return (
          <CustomerLookup
            focusTextField={focusTextField}
            lookupPhoneNumber={lookupPhoneNumber}
            goToMenu={goToMenu}
          />
        );

      case 2:
        return (
          <CustomerFormName
            focusTextField={focusTextField}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      case 3:
        return (
          <CustomerFormAddress
            focusTextField={focusTextField}
            prevPage={prevPage}
          />
        );
      default:
        return new Error('form page not found');
    }
  };

  const formContent = getFormPage();
  // const content = useFormPage();
  return <CustomerProvider>{formContent}</CustomerProvider>;
  // <CustomerLookup phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
}
