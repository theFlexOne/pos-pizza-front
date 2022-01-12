import React from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';
import useOrder from '../../../../hooks/useOrder';
import { getFromSessionStorage } from '../../../../utils/utilityFunctions';
import { useEffect } from 'react';

export default function Menu({ goToCustomer }) {
  return (
    <>
      <MainPanel />
      <SidePanel goToCustomer={goToCustomer} />
    </>
  );
}
