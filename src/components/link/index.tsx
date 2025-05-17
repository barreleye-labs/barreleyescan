import { MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  path?: string;
  underlink?: ReactNode | string | number;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const LinkUnderline = ({ path, underlink, children, onClick }: Props) => {
  return (
    <Container>
      <Link to={path || ''} onClick={onClick}>
        {underlink}
        {children}
      </Link>
    </Container>
  );
};

export default LinkUnderline;
