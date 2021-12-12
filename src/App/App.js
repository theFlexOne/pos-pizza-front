import React, { useEffect, useState } from 'react';
import './App.css';
import TopBar from '../components/TopBar/TopBar';
import Content from '../components/Content/Content';
import InfoBar from '../components/InfoBar/InfoBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/';
import { createTheme } from '@mui/material/styles';
import { lightGreen, purple } from '@mui/material/colors';

const url = 'http://localhost:8000/menu';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: lightGreen,
  },
});

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <TopBar />
        <Content />
        <InfoBar />
      </Router>
    </div>
  );
}

export default App;
