import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PrivateForm } from '@components/form';

const SignIn = () => {
  const navigate = useNavigate();
  const [privateKey, setPrivateKey] = useState('');

  const onSubmit = useCallback(() => {
    console.log(privateKey);
    sessionStorage.setItem('key', privateKey);
    navigate('/dashboard');
  }, [privateKey]);
  return (
    <PrivateForm
      title="Enter an acceptable private key."
      sub=" Please enter your private key."
      defaultValue={privateKey}
      onChange={(e) => setPrivateKey(e.target.value)}
      onClick={onSubmit}
    />
  );
};

export default SignIn;
