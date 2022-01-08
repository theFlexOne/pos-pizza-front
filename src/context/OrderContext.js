import React, { createContext, useContext, useReducer, useRef } from 'react';

const OrderContext = React.createContext();

const useOrderRef = () => {
  const ref = useRef({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    streetAddress: '',
    secondaryAddress: '',
  });
  return ref;
};

const OrderProvider = ({ children, ...other }) => {
  const ref = useOrderRef({});
  // const [state, dispatch] = useReducer(reducer, initialState);
  const actions = {};
  return (
    <OrderContext.Provider value={(ref, actions)} {...other}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('NOT INSIDE THE CONTEXT PROVIDER');
  return context;
};

export { OrderProvider, useOrder };

// const initialState = {
//   formStep: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'nextStep':
//       return { ...state, formStep: formStep + 1 };
//     case 'prevStep':
//       return { ...state, formStep: formStep - 1 };
//     case 'firstStep':
//       return { ...state, formStep: (formStep = initialState.formStep) };
//   }
// };
