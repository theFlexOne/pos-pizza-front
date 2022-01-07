import { useEffect, useState } from 'react';

const useOrder = () => {
  const [customer, setCustomer] = useState(null);
  const [cart, setCart] = useState([]);
  // const [orderObj, setOrderObj] = useState({
  //   customer: {},
  //   cart: [],
  // });
  useEffect(() => {
    customer && console.log(`customer: `, customer);
  }, [customer]);

  class Order {
    constructor() {
      // this.customer = customer;
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
    selectCustomer = cust => {
      setCustomer(cust);
    };
    set customer(customer) {
      setCustomer(customer);
    }
    get customer() {
      return customer;
    }
  }

  return new Order();
};

export default useOrder;
