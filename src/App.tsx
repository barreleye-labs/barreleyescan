import Layout from '@layouts';
import { SnackbarProvider } from 'notistack';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css';

export function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('/dashboard');
  });

  return (
    <SnackbarProvider maxSnack={3}>
      <Layout />
    </SnackbarProvider>
  );
}

export default App;
