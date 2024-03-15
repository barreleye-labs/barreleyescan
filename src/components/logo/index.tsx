import { useNavigate } from 'react-router-dom';

import { Logo } from './styles';

import Link from '@components/link';

const BarreleyeLogo = () => {
  const navigate = useNavigate();
  return (
    <Logo onClick={() => navigate('/dashboard')}>
      <span className="bold">Barreleye</span> <span>scan</span>
    </Logo>
  );
};

export default BarreleyeLogo;
