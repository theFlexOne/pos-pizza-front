const addToSessionsStorage = data => {
  for (const section in data) {
    sessionStorage.setItem(`${section}`, JSON.stringify(data[section]));
  }
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

export { addToSessionsStorage, getFromSessionStorage };
