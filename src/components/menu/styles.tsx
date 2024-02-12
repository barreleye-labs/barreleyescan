import styled from '@emotion/styled';

import { pink } from '@mui/material/colors';

const second = pink[100];
const primary = pink[500];

export const Container = styled.div`
  .menu-block {
    margin-bottom: 3rem;
  }

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

  .MuiSvgIcon-root {
    margin-right: 2px;
  }
  .Mui-selected {
    background: ${primary} !important;
    .MuiSvgIcon-root {
      color: white;
    }
  }

  .MuiListItemButton-root {
    min-height: 44px;

    &:hover {
      background: ${second}26 !important;

      div,
      span {
        color: #f0f4f8 !important;
      }
    }
  }
  .MuiListItemContent-root {
    font-size: 14px;
    font-weight: 600;
  }

  flex: 0.3;
  max-width: 256px;
`;
