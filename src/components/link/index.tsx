import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  path: string;
  underlink: string;
}

const LinkUnderline = ({ path, underlink }: Props) => {
  return (
    <Container>
      <Link to={path}>{underlink}</Link>
    </Container>
  );
};

export default LinkUnderline;
