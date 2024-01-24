import styled from '@emotion/styled';

export const Container = styled.div`
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
  max-width: 256px;
`;
