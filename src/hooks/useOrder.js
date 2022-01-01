import { useState } from 'react';

const useOrder = () => {
  const [customer, setCustomer] = useState(null);
  const [cart, setCart] = useState([]);
  // const [orderObj, setOrderObj] = useState({
  //   customer: {},
  //   cart: [],
  // });

  class Order {
    constructor() {
      this.customer = customer;
      this.cart = cart;
    }
    addToCart = item => {
      setCart([...cart, item]);
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
  }

  return new Order();
};

export default useOrder;
