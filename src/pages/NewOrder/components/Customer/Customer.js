import React, { useReducer, useState } from 'react';
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

export default function Customer({ goToMenu }) {
  // const [formStep, setFormStep] = useState(1);
  // const lookupPhoneNumber = phoneNumber => {
  //   for (let i = 0; i < customerList.length; i++) {
  //     if (customerList[i].phoneNumber === phoneNumber)
  //       return selectCustomer(customerList[i]);
  //   }
  //   return nextPage();
  // };

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

  const FormPage = () => {
    const { actions } = useCustomer();
    const { getFormStep, toNextPage, toPrevPage } = actions;

    const formStep = getFormStep();

    switch (formStep) {
      case 1:
        return <CustomerLookup goToMenu={goToMenu} nextPage={toNextPage} />;

      case 2:
        return <CustomerFormName nextPage={toNextPage} prevPage={toPrevPage} />;
      case 3:
        return <CustomerFormAddress prevPage={toPrevPage} />;
      default:
        return new Error('form page not found');
    }
  };

  return (
    <CustomerProvider>
      <FormPage />
    </CustomerProvider>
  );
  // <CustomerLookup phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
}
