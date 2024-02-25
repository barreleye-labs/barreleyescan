import styled from '@emotion/styled';

import Btn from '@mui/material/Button';
import { teal } from '@mui/material/colors';

export const Button = styled(Btn)`
  border-color: ${teal[100]};
  color: ${teal[500]};
  &:hover {
    border-color: ${teal[100]};
  }
  &:focus {
    background: ${teal[50]};
  }
`;
