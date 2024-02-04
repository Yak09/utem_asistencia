import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from "@mui/material/styles";


import App from './App.tsx'
import NavbarUtem from './appbar.tsx'


import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', 
    },
    secondary: {
      main: '#00ff00', 
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NavbarUtem />    
      <App />
    
  </React.StrictMode>,
)
