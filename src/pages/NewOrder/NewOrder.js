import React, { useEffect } from 'react';
import { useState } from 'react';
import './NewOrder.css';
import Cart from './components/Cart/Cart';
import CustomerInfoBox from './components/CustomerInfoBox/CustomerInfoBox';
import Menu from './components/Menu/Menu';

export default function NewOrder({ menu }) {
  const [liveOrder, setLiveOrder] = useState([]);

  const handleAddItem = item => {
    console.log(item);
    setLiveOrder(() => [...liveOrder, item]);
  };

  console.log(menu);

  return (
    <main className="NewOrder">
      {menu && <Menu menu={menu} addToCart={handleAddItem} />}
      {/* is this redundant? */}
      <CustomerInfoBox />
      <Cart order={liveOrder} />
    </main>
  );
}
