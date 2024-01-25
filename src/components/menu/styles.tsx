import styled from '@emotion/styled';
import { pink } from '@mui/material/colors';

const color = pink[500];

export const Container = styled.div`
  span,
  .MuiListSubheader-root,
  .MuiListItemContent-root {
    color: f0f4f8;
  }

  .MuiListItemButton-root,
  .Mui-selected {
    border-radius: 6px;
  }

  .Mui-selected {
    background: ${color} !important;
  }

  .MuiListItemButton-root {
    &:hover {
      background: #f0f4f812;

      div,
      span {
        color: #f0f4f8 !important;
      }
    }
  }

  flex: 0.3;
  max-width: 256px;
`;
