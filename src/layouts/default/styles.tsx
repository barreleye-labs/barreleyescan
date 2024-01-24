import styled from '@emotion/styled';

export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100dvh;
  position: relative;
`;

export const Sider = styled.div`
  span,
  .MuiListSubheader-root,
  .MuiListItemContent-root {
    color: white !important;
  }

  .MuiListItemButton-root {
    &:hover {
      border-radius: 8px;
      div,
      span {
        color: black !important;
      }
    }
  }
  flex: 0.3;
  max-width: 250px;
  border-right: #636b7433;
  padding: 16px;
  background: #001529;
  border-color: #636b7433;
  border-right-style: solid;
  border-right-with: 1px;
`;
