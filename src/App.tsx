import { SnackbarProvider } from 'notistack';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import { GlobalStyle } from '@styles/globalStyle';

export function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('/dashboard');
  }, [pathname]);

  return (
    <SnackbarProvider maxSnack={3}>
      <GlobalStyle />
    </SnackbarProvider>
  );
}

export default App;
