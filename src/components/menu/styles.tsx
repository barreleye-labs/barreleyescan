import styled from '@emotion/styled';
import { pink } from '@mui/material/colors';

const second = pink[100];
const primary = pink[500];

export const Container = styled.div`
  .gap {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  span,
  .MuiListSubheader-root,
  .MuiListItemContent-root {
    color: #f0f4f8;
  }

  .MuiListItemButton-root,
  .Mui-selected {
    border-radius: 6px;
  }

  .Mui-selected {
    background: ${primary} !important;
  }

  .MuiListItemButton-root {
    &:hover {
      background: ${second}26 !important;

      div,
      span {
        color: #f0f4f8 !important;
      }
    }
  }

  flex: 0.3;
  max-width: 256px;
`;
