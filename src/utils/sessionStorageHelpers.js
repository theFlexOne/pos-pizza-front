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

/*
const addToSessionsStorage = data => {
  for (const section in data) {
    sessionStorage.setItem(`${section}`, JSON.stringify(data[section]));
  }
};

const updateSessionStorage = (key, data) => {
  sessionStorage.setItem(`${key}`, JSON.stringify(data));
};

const getFromSessionStorage = arg => {
  if (Array.isArray(arg)) {
    const data = arg.map(key => sessionStorage.getItem(`${key}`));
    return { ...data };
  }
  const key = arg;
  const data = JSON.parse(sessionStorage.getItem(`${key}`));
  return data;
};

*/
