import React, { useState } from 'react';
import CustomerLookup from './CustomerLookup';
import CustomerFormName from './CustomerFormName';
import CustomerFormAddress from './CustomerFormAddress';
import { v4 as uuid } from 'uuid';

const POS_DATA_URL = 'http://localhost:8000';

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
export default function Customer({ customerList, setCustomer }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [secondaryAddress, setSecondaryAddress] = useState('');
  const [formStep, setFormStep] = useState(1);
  // const [formData, setFormData] = useState(NewCustomer(phoneNumber));

  //* Auto-formatting phone number - "###-###-####"
  if (phoneNumber.length === 3 || phoneNumber.length === 7)
    setPhoneNumber(() => phoneNumber + '-');

  console.log(
    phoneNumber,
    firstName,
    lastName,
    streetAddress,
    secondaryAddress
  );

  const lookupPhoneNumber = () => {
    for (let i = 0; i < customerList.length; i++) {
      if (customerList[i].phoneNumber === phoneNumber)
        return setCustomer(customerList[i]);
    }
    return nextPage();
  };

  const nextPage = () => {
    setFormStep(() => formStep + 1);
  };

  const createNewCustomer = () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        NewCustomer({
          phoneNumber,
          firstName,
          lastName,
          streetAddress,
          secondaryAddress,
        })
      ),
    };
    fetch(POS_DATA_URL + '/customers', options);
  };

  const formPage = () => {
    switch (formStep) {
      case 1:
        return (
          <CustomerLookup
            phone={phoneNumber}
            onPhoneNumberChange={e => setPhoneNumber(e.target.value)}
            clearField={() => setPhoneNumber('')}
            lookupPhoneNumber={lookupPhoneNumber}
          />
        );

      case 2:
        return (
          <CustomerFormName
            firstName={firstName}
            lastName={lastName}
            onFirstNameChange={e => setFirstName(e.target.value)}
            onLastNameChange={e => setLastName(e.target.value)}
            nextPage={nextPage}
          />
        );
      case 3:
        return (
          <CustomerFormAddress
            streetAddress={streetAddress}
            secondaryAddress={secondaryAddress}
            onStreetAddressChange={e => setStreetAddress(e.target.value)}
            onSecondaryAddressChange={e => setSecondaryAddress(e.target.value)}
            createNewCustomer={createNewCustomer}
          />
        );
      default:
        return null;
    }
  };

  return formPage();
  // <CustomerLookup phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
}
