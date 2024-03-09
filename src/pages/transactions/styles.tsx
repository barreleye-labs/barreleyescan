import styled from '@emotion/styled';

import Row from '@mui/material/TableRow';

export const TableRow = styled(Row)`
  animation-name: twinkle;
  animation-duration: 600ms;

  background-size: cover;
  @keyframes twinkle {
    50% {
      filter: blur(8px);
    }
  }
`;
