import styles from '@emotion/styled';

import { Card } from '@mui/joy';
import { pink } from '@mui/material/colors';

const second = pink[400];
const primary = pink[500];

export const Container = styles(Card)`
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
    background: ${second};
    &:hover{
      background: ${primary};
    }
    &:disabled {
       background: #ececec;
    }
    }
  
  .btn-wrapper{
    display:flex;
    flex-direction: column;
    align-items: end;
    gap: 12px;
    margin-top: 2rem;
  }
  
 }
`;
