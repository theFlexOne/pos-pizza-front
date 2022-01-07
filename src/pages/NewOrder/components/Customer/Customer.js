import React from 'react';
import CustomerLookup from './CustomerLookup';
import CustomerFormName from './CustomerFormName';
import CustomerFormAddress from './CustomerFormAddress';
import { v4 as uuid } from 'uuid';
import { focusTextField } from '../../../../utils/utilityFunctions';
import { CustomerProvider } from '../../../../context/CustomerContext';

// const POS_DATA_URL = 'http://localhost:8000';

export default function Customer({
  formStep,
  changeFormStep,
  // onNewCustomer,
  goToMenu,
  ...otherProps
}) {
  // const lookupPhoneNumber = phoneNumber => {
  //   for (let i = 0; i < customerList.length; i++) {
  //     if (customerList[i].phoneNumber === phoneNumber)
  //       return selectCustomer(customerList[i]);
  //   }
  //   return nextPage();
  // };

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
            // lookupPhoneNumber={lookupPhoneNumber}
            goToMenu={goToMenu}
            {...otherProps}
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
