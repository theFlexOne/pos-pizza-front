import React, { useEffect } from 'react';
import { useState } from 'react';
import './NewOrder.css';
import Cart from './components/Cart/Cart';
import CustomerInfoBox from './components/CustomerInfoBox/CustomerInfoBox';
import Menu from './components/Menu/Menu';

export default function NewOrder({ menu }) {
  const [liveOrder, setLiveOrder] = useState([]);

  console.log(menu);

  const handleAddItem = item => {
    setLiveOrder(() => [...liveOrder, item]);
  };

  return (
    <>
      <main className="New-Order">
        <Menu menu={menu} className="Menu" addToCart={handleAddItem} />
      </main>
      <div>
        <CustomerInfoBox className="Customer-Info-Box" />
        <Cart className="Cart" order={liveOrder} />
      </div>
    </>
  );
}
