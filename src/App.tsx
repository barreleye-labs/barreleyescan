import { SnackbarProvider } from 'notistack';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import { GlobalStyle } from '@styles/globalStyle';

export function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  useEffect(() => {
    if (pathname === '/') navigate('/dashboard');
  });

  return (
    <SnackbarProvider maxSnack={3}>
      <GlobalStyle />
    </SnackbarProvider>
  );
}

export default App;
