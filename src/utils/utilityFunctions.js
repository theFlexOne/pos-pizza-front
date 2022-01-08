const focusTextField = ({ target }) => {
  // console.log({ target });
  // TODO - validate target to be an HTMLElementInput with a type of "text"
  target.focus();
};

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

export {
  focusTextField,
  addToSessionsStorage,
  updateSessionStorage,
  getFromSessionStorage,
};
