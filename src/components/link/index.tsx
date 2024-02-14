import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  path?: string;
  underlink: string | number;
  onClick?: (e) => void;
}

const LinkUnderline = ({ path, underlink, onClick }: Props) => {
  return (
    <Container>
      <Link to={path} onClick={onClick}>
        {underlink}
      </Link>
    </Container>
  );
};

export default LinkUnderline;
