import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Crypto } from 'src/utils';

import DefaultLayout from '@layouts/default';

import './App.css';
import { Signature } from './utils/crypto';

export function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const privateKey: string = Crypto.generatePrivateKey();
    console.log('privateKey: ', privateKey);
    const x: string = Crypto.generatePublicKey(privateKey).x;
    const y: string = Crypto.generatePublicKey(privateKey).y;
    console.log('x: ', x);
    console.log('y: ', y);

    const message: string = 'hello';
    const signature: Signature = Crypto.signMessage(message, privateKey);
    console.log('signature: ', signature);

    if (pathname === '/') navigate('/dashboard');
  }, [pathname]);

  return (
    <>
      <DefaultLayout />
    </>
  );
}

export default App;
