<<<<<<< HEAD
const EMPTY_ORDER = {
  customer: {},
  cart: {},
};

const initSS = data => {
  for (const section in data) {
    sessionStorage.setItem(`${section}`, JSON.stringify(data[section]));
  }
  sessionStorage.setItem('currentOrder', JSON.stringify({ ...EMPTY_ORDER }));
};

const updateSS = (key, data) => {
  sessionStorage.setItem(`${key}`, JSON.stringify(data));
};

const getCustomerList = async () => {
  const data = JSON.stringify(sessionStorage.getItem('customers'));
  return data;
};

const getFromSS = arg => {
  if (Array.isArray(arg)) {
    const data = arg.map(key => sessionStorage.getItem(`${key}`));
    return { ...data };
  }
  const key = arg;
  const data = JSON.parse(sessionStorage.getItem(`${key}`));
  return data;
};

const findInSS = async () => {
  const customers = await JSON.parse(sessionStorage.customers);
  console.log(`customers: `, customers);
  // for (let i = 0; i < customers.length; i++) {
  //   // if (customers[i].phoneNumber === phoneNumber) {
  //   //   const customer = customers[i];
  //   //   return customer;
  //   // }
  // }
  // return false;
};

export { initSS, updateSS, getCustomerList, getFromSS, findInSS };

//* OLD CODE
// const addToSessionsStorage = data => {
//   for (const section in data) {
//     sessionStorage.setItem(`${section}`, JSON.stringify(data[section]));
//   }
// };

// const getFromSessionStorage = arg => {
//   if (Array.isArray(arg)) {
//     const data = arg.map(key => sessionStorage.getItem(`${key}`));
//     return { ...data };
//   }
//   const key = arg;
//   const data = JSON.parse(sessionStorage.getItem(`${key}`));
//   return data;
// };
=======
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
>>>>>>> main_MaskedPhoneInput
