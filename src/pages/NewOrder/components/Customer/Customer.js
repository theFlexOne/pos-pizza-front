<<<<<<< HEAD
import React, { useState } from 'react';
import CustomerLookup from './CustomerLookup';
import CustomerFormName from './CustomerFormName';
import CustomerFormAddress from './CustomerFormAddress';
import { focusTextField } from '../../../../utils/utilityFunctions';
import { useCustomer } from '../../../../context/CustomerContext';
import useApp from '../../../../hooks/useApp';

// const POS_DATA_URL = 'http://localhost:8000';

export default function Customer({ goToMenu, ...otherProps }) {
  const [formStep, setFormStep] = useState(1);
  const { refreshApp } = useApp();

  const toNextStep = () => setFormStep(() => formStep + 1);
  const toPrevStep = () => setFormStep(() => formStep - 1);
  const toFirstStep = () => setFormStep(() => (formStep = 1));

  const handleSubmit = () => {};

  const getFormPage = () => {
    switch (formStep) {
      case 1:
        return (
          <CustomerLookup
            goToMenu={goToMenu}
            toNextStep={toNextStep}
            {...otherProps}
          />
        );

      case 2:
        return (
          <CustomerFormName
            {...otherProps}
            toNextStep={toNextStep}
            toPrevStep={toPrevStep}
          />
        );
      case 3:
        return <CustomerFormAddress {...otherProps} toPrevStep={toPrevStep} />;
      case 4:
        setFormStep(() => (formStep = 3));

=======
import React from 'react';
import CustomerLookup from './CustomerLookup';
import CustomerFormName from './CustomerFormName';
import CustomerFormAddress from './CustomerFormAddress';
import {
  useCustomer,
  CustomerProvider,
} from '../../../../context/CustomerContext';

export default function Customer({ goToMenu }) {
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
>>>>>>> main_MaskedPhoneInput
      default:
        return new Error('form page not found');
    }
  };

<<<<<<< HEAD
  const formContent = getFormPage();
  return <>{formContent}</>;
=======
  return (
    <CustomerProvider>
      <FormPage />
    </CustomerProvider>
  );
>>>>>>> main_MaskedPhoneInput
}
