import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "../src/assets/css/fonts.css"
import App from './App.tsx'



import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/assets/config/theme.ts';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </StrictMode>,
)
