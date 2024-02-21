import styled from '@emotion/styled';

import { pink } from '@mui/material/colors';

const color = pink[100];

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  min-height: 100dvh;

  ${mq[1]} {
    flex-direction: column;
  }
`;

export const Sider = styled.div`
  span,
  .MuiListSubheader-root,
  .MuiListItemContent-root {
    color: white !important;
  }

  .MuiListItemButton-root {
    &:hover {
      background: ${color};
      border-radius: 8px;
      div,
      span {
        color: black !important;
      }
    }
  }

  ${mq[1]} {
    min-width: 100%;
  }
  position: sticky;
  min-width: 248px;
  border-right: #636b7433;
  padding: 16px;
  background: #001529;
  ${mq[1]} {
    position: sticky;
    top: 0;
  }
`;
