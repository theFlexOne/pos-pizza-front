const getFromSS = section => {
  return JSON.parse(sessionStorage.getItem(section));
};

const addCustomerToSS = customer => {
  const customers = getFromSS('customers');
  sessionStorage.setItem('customers', JSON.stringify([...customers, customer]));
};

const removeCustomerFromSS = ({ id }) => {
  const customers = getFromSS('customers');
  const newList = JSON.stringify(
    customers.filter(customer => id !== customer.id)
  );
  sessionStorage.setItem('customers', newList);
};

export { addCustomerToSS, getFromSS, removeCustomerFromSS };
