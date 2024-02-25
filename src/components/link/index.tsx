import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  path?: string;
  underlink: string | number;
  onClick?: (e) => void;
}

const LinkUnderline = ({ path, underlink, children, onClick }: Props) => {
  return (
    <Container>
      <Link to={path} onClick={onClick}>
        {underlink}
        {children}
      </Link>
    </Container>
  );
};

export default LinkUnderline;
