import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DefaultLayout from '@layouts/default';

import './App.css';

export function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('/dashboard');
  }, [pathname]);

  return (
    <>
      <DefaultLayout />
    </>
  );
}

export default App;
