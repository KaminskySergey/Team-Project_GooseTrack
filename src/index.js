import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react'
// import { ThemeProvider } from 'styled-components';

// import { theme } from 'components/Theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { store, persistor } from 'redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Team-Project_GooseTrack" >
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <ToastContainer autoClose={2000} />;
    {/* </ThemeProvider> */}
  </React.StrictMode >
);
