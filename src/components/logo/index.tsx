import { useNavigate } from 'react-router-dom';

import { Logo } from './styles';

import Link from '@components/link';

const BarreleyeLogo = () => {
  const navigate = useNavigate();
  return (
    <Logo>
      <Link onClick={() => navigate(`/dashboard`)}>
        <span className="bold">Barreleye</span> <span>scan</span>
      </Link>
    </Logo>
  );
};

export default BarreleyeLogo;
