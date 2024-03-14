import { ReactNode } from 'react';

import { Container, CustomCard } from './styles';

interface Props {
  children: ReactNode;
  background?: string;
  custom?: boolean;
  pointer?: boolean;
  onClick?: () => void;
}
const MoveCard = ({ children, background, onClick }: Props) => {
  return (
    <CustomCard background={background} onClick={onClick}>
      <Container> {children}</Container>
    </CustomCard>
  );
};

export default MoveCard;
