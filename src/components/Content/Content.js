import React, { useEffect, useState } from 'react';
import NewOrder from '../../pages/NewOrder/NewOrder';
// import MenuModal from '../MenuModal/MenuModal';
// import Order from '../Order/Order';
import './Content.css';

const url = 'http://localhost:8000/app';

export default function Content() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.menu);
        setMenu(data.menu);
      });
  }, []);

  return (
    <React.Fragment>
      {menu && <NewOrder menu={menu} />}
      {/* <Settings /> */}
      {/* <OrderHistory /> */}
      {/* <CustomerList /> */}
      {/* <NewMenuItem /> */}
    </React.Fragment>
  );
}
