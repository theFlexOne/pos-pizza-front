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
  );
};

const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('NOT INSIDE THE CONTEXT PROVIDER');
  return context;
};

export { useOrder, OrderProvider };
