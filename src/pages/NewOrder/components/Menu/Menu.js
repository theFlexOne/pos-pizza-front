import React from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

export default function Menu({ goToCustomer }) {
  return (
    <>
      <MainPanel />
      <SidePanel goToCustomer={goToCustomer} />
    </>
  );
}
