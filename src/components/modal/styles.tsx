import styles from '@emotion/styled';

import IModal from '@mui/joy/Modal';
import { teal } from '@mui/material/colors';

const breakpoints = [576, 768, 992, 1200];

export const Modal = styles(IModal)`
  .MuiModalDialog-root {
    padding: 0;
    border: none;
  } 
  
  .MuiCardOverflow-root {
    top: -1px;
    background: #001529;
    padding: 41px 50px 31px;
  }
  
  .MuiModalDialog-root {}
  
  .MuiCardOverflow-root {
    align-items: baseline;
    gap: 27px;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
 
`;
