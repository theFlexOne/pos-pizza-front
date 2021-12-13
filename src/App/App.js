import React, { useEffect, useState } from 'react';
import './App.css';
import TopBar from '../components/TopBar/TopBar';
import Content from '../components/Content/Content';
import InfoBar from '../components/InfoBar/InfoBar';
import useApp from '../hooks/useApp';

function App() {
  const [app, err, isLoading] = useApp();

  return isLoading ? (
    {
      /* Insert <Modal /> here */
    }
  ) : (
    <div className="App">
      <TopBar app={app} />
      {app && <Content app={app} />}
      <InfoBar />
    </div>
  );
}

export default App;
