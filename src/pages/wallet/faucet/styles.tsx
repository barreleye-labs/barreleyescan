import styles from '@emotion/styled';

import { Card } from '@mui/joy';
import { teal } from '@mui/material/colors';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const second = teal[400];
const primary = teal[500];

export const Container = styles(Card)`
padding: 2.5rem;
  ${mq[1]} {
      padding: 1rem;
  }
 border: none;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  box-shadow:
    rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;

  .input-wrapper{
    display: flex;
    align-items:center;
    gap:12px;

    .MuiFormControl-root{
      width: 50%
    }
  }
  
  .MuiTypography-h5{
    font-weight: 700;
  }
  
  .button{
    font-size: 1rem;
    font-weight: 700;
    color:white;
    color:#34b4a9;
    background: #e5fbf8;
    &:disabled {
       color: #ffffff;
       background: #ececec;
    }
    }
  
  .btn-wrapper{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    .warning {
      color: red;
    }

    gap: 12px;
    margin-top: 2rem;
  }
  
 }
`;
