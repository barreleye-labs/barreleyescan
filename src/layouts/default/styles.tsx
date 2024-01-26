import styled from '@emotion/styled';
import { pink } from '@mui/material/colors';

const color = pink[100];
export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  min-height: 100dvh;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100dvh;
  gap: 8px;
  overflow: auto;
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
  position: sticky;
  min-width: 248px;
  border-right: #636b7433;
  padding: 16px;
  background: #001529;
`;
