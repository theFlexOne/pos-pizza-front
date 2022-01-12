const populateSessionStorage = data => {
  const appSections = Object.keys(data);
  appSections.forEach(section => {
    sessionStorage.setItem(section, JSON.stringify(data[section]));
  });
};

const fetchData = async url => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(res.message);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:' + err.message, err);
  }
};

// const refreshSS = async url => {
//   const data = fetchData(url);
//   populateSessionStorage(data);
// };

const getFromSS = section => {
  return JSON.parse(sessionStorage.getItem(section));
};

const addCustomerToSS = customer => {
  const customers = getFromSS('customers');
  sessionStorage.setItem('customers', JSON.stringify([...customers, customer]));
};

export { addCustomerToSS, getFromSS };
