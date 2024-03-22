import styles from '@emotion/styled';
import Crumbs from '@mui/material/Breadcrumbs';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
export const Breadcrumbs = styles(Crumbs)`
  ${mq[1]}{
  }
  
  overflow-wrap: anywhere;
`;
