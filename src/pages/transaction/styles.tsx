import styles from '@emotion/styled';
import { grey } from '@mui/material/colors';

const second = grey[50];
const primary = grey[200];

export const Container = styles.div`
  .badge{

    display: flex;
    align-items: center;
    gap: 4px;

    .MuiSvgIcon-root{
      font-size: 11px;

    }
    background:red;
    padding: 4px 6px;
    width: 75px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 800;
    border: 1px solid #d1eae6;
    color: #00a186;
    background: #00A1861A;
  }

  .hash {
    padding: 4px 6px;
    font-size: 11px;
    background: ${second};
    border: 1px solid ${primary};
    border-radius: 4px;

    &:hover{
      cursor: pointer;
      background:${primary};
      border: 1px solid  ${second};
    }
  }
`;
