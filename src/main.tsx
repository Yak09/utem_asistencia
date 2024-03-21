import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/scss/bootstrap.scss'
import { ThemeProvider, createTheme } from "@mui/material/styles";


import App from './App.tsx'
import NavbarUtem from './appbar.tsx'


import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: '#00ACAC', 
    },
    secondary: {
      main: '#00ff00', 
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavbarUtem alumnoName="Cristian Montecinos Fuenzalida" />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
