import React, { createContext, useContext, useLayoutEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blueGrey from '@mui/material/colors/blueGrey';
import orange from '@mui/material/colors/orange';
import { useRef } from 'react';
import { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const documentRef = useRef(document.documentElement);

  const doc = documentRef.current;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    doc.requestFullscreen().then(setIsModalOpen(false));
  };

  const modalSetup = {
    open: isModalOpen,
    onClose: handleModalClose,
    onCancel: handleModalClose,
    onConfirm: handleConfirm,
    title: 'Modal',
  };

  const contextValue = undefined;

  useLayoutEffect(() => {
    !doc.fullscreenElement && setIsModalOpen(true);
    console.log(`documentRef: `, doc);
  }, [doc.fullscreenElement]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutContext.Provider value={contextValue}>
        {children}
        <ConfirmationModal {...modalSetup} title="Allow Fullscreen?">
          Turn on Fullscreen? (This is the recommended layout)
        </ConfirmationModal>
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};

const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  return context;
};

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: blueGrey,
  },
  typography: {
    // fontFamily: [
    //   //*insert fonts here
    // ],
  },
  layoutModes: {
    fullscreen: {},
    compact: {},
  },
});

export { useLayoutContext, LayoutProvider };
