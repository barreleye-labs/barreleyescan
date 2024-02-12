import styles from '@emotion/styled';
import { Card } from '@mui/joy';
import { pink } from '@mui/material/colors';

const second = pink[400];
const primary = pink[500];

export const Container = styles(Card)`
 .button{
    font-size: 1rem;
    font-weight: 700;
    background: ${second};
   &:hover{
      background: ${primary}
    }
  } 
  
  .MuiTypography-h5{
    font-weight: 700;
  }
 }
`;
