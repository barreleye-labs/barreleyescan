import styles from '@emotion/styled';
import { grey } from '@mui/material/colors';

const second = grey[50];
const primary = grey[200];

export const Container = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;

  .badge{
    background: ${second};
    border: 1px solid ${primary};
    font-size: 8px;
    padding: 4px 6px;
    border-radius: 9px;
  }
`;
