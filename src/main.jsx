import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { StyledEngineProvider } from "@mui/styled-engine";
import createCache from '@emotion/cache';
import i18n from './i18n'
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { createTheme } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      
    <CacheProvider value={cacheRtl}>
<ThemeProvider>
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
<App />
</ThemeProvider>
  
    
 
    </CacheProvider>

    </I18nextProvider>
 
    </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)
