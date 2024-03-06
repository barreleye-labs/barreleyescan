import styled from '@emotion/styled';

import { teal } from '@mui/material/colors';

const color = teal[100];

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  background: #f8f9fa;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;

  ${mq[1]} {
    .menu:has(.active) {
      height: 540px;
    }
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 2rem;
  }
`;

export const Sider = styled.div`
  z-index: 1;
  min-width: 248px;
  border-right: #636b7433;
  background: #001529;
  padding: 16px;
  ${mq[1]} {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100%;
    position: fixed;
    top: 0;
    padding: 7px;
    height: 57px;
    > div {
      margin-left: 13px;
      width: 95%;
    }
  }

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
`;
