import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';

// import { store } from 'Redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { persistor, store } from 'Redux/store';
import { theme } from 'components/Theme/theme';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

<App />

</PersistGate>
    </Provider>,
    </ThemeProvider>
  </React.StrictMode>
);
