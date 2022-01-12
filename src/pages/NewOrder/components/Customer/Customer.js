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
      default:
        return new Error('form page not found');
    }
  };

  return (
    <CustomerProvider>
      <FormPage />
    </CustomerProvider>
  );
}
