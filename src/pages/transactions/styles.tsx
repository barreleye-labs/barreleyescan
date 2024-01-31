import styles from '@emotion/styled';
import { pink } from '@mui/material/colors';

const second = pink[100];
const primary = pink[500];

export const Container = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;

  td,th {
    .MuiSvgIcon-root{
      width: 15px;
      height: 15px;
      border-radius:50%;
      background: ${second};
      color: ${primary};
    }
  }
`;
