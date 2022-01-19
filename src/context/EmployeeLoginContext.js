import { createContext, useContext, useState } from 'react';

const EmployeeLoginContext = createContext();

const EmployeeLoginProvider = ({ children }) => {
  const [isPassword, setIsPassword] = useState(false);
  const [loggedInEmployee, setLoggedInEmployee] = useState(undefined);

  const contextValue = {};
  return (
    <EmployeeLoginContext.Provider value={contextValue}>
      {children}
    </EmployeeLoginContext.Provider>
  );
};

const useEmployeeLogin = () => {
  const context = useContext(EmployeeLoginContext);
  if (!context) throw new Error('NOT INSIDE THE CONTEXT PROVIDER');
  return context;
};

export { EmployeeLoginProvider, useEmployeeLogin };
