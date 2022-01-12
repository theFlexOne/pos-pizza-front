<<<<<<< HEAD
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
=======
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

const OrderProvider = ({ children, menu, customers }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [cart, setCart] = useState([]);
  class Order {
    constructor() {
      this.customer = customer;
      this.isMenu = isMenu;
    }
    addToCart = item => {
      setCart([...cart, item]);
      console.log(`cart: `, cart);
    };
    removeFromCart = id => {
      setCart(cart.filter(item => item.id !== id));
    };
    resetCustomer = () => {
      setCustomer(null);
    };
    selectCustomer = customer => {
      setCustomer(customer);
    };
    goToMenu = () => {
      setIsMenu(true);
    };
    goToCustomer = () => {
      setIsMenu(false);
    };
    set cart(_) {
      throw new Error('"cart" is read-only');
    }
    get cart() {
      return cart;
    }
  }

  const order = new Order();

  return (
    <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
>>>>>>> main_MaskedPhoneInput
  );
};

const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('NOT INSIDE THE CONTEXT PROVIDER');
  return context;
};

<<<<<<< HEAD
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
=======
export { useOrder, OrderProvider };
>>>>>>> main_MaskedPhoneInput
