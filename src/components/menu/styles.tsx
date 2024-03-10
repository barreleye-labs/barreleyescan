import styled from '@emotion/styled';

import { teal } from '@mui/material/colors';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const primary = teal[300];
const second = teal[100];
const sub = teal[50];

export const Container = styled.div`
  flex: 0.3;
  max-width: 256px;
  .copyRight {
    span {
      position: absolute;
      bottom: 2rem;
      color: rgba(202, 203, 216, 0.5) !important;
    }
    ${mq[1]} {
      display: none;
    }
  }
  ${mq[1]} {
    max-width: none !important;
  }

  .menu-list {
    animation: slidein 1000ms;

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

    ${mq[1]} {
      display: none !important;
    }
  }

  .menu-icon {
    color: ${sub};
    display: none;
    position: absolute;
    top: 18px;
    right: 14px;
    cursor: pointer;
    padding: 1px;
    box-shadow:
      rgb(243, 246, 249) 0px 1px 2px inset,
      rgba(229, 234, 242, 0.6) 0px 1px 0.5px;
    border-radius: 4px;
    width: 23px;
    align-items: center;
    justify-content: center;
    ${mq[1]} {
      display: flex;
    }
  }

  @keyframes slidein {
    from {
      transform: translateX(-200px);
      width: 100%;
    }

    to {
      transform: translateX(0);
      width: 100%;
    }
  }

  .active {
    display: flex !important;
  }
`;
