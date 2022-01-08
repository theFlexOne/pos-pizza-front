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

      default:
        return new Error('form page not found');
    }
  };

  const formContent = getFormPage();
  return <>{formContent}</>;
}
