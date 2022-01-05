import React, { createContext, useContext, useEffect } from 'react';

const APP_URL = 'http://localhost/8000/db';

const AppContext = createContext(null);

const AppProvider = ({ children, ...otherProps }) => {
  useEffect(() => {
    fetch(APP_URL)
      .then(res => res.json())
      .then(data => console.log(`data: `, { data }));
  });

  return <AppContext.Provider {...otherProps}>{children}</AppContext.Provider>;
};

const useApp = () => {
  const context = useContext(useContext(AppContext));
  if (!context) throw new Error('NOT INSIDE THE CONTEXT PROVIDER');
  return context;
};
