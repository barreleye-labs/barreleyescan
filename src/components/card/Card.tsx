import { ReactNode } from 'react';

import { Container, DefaultCard } from './styles';

interface Props {
  children: ReactNode;
  background?: string;
  custom?: boolean;
  pointer?: boolean;
  onClick?: () => void;
}
const Card = ({ children }: Props) => {
  <DefaultCard>
    <Container>{children}</Container>
  </DefaultCard>;
};

export default Card;
