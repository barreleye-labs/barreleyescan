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

  .button-wrapper {
    position: absolute;
    left: 21px;
    bottom: 1rem;
    color: rgba(202, 203, 216, 0.5);
    margin-bottom: 1rem;
    button {
      width: 211px;
      height: 40px;
      color: #b5b5c3;
      margin-bottom: 3rem;
      background-color: rgba(63, 66, 84, 0.35);
    }

    ${mq[1]} {
      display: none;
      p {
        display: none;
      }
    }
  }
  ${mq[1]} {
    max-width: none !important;
  }

  .menu-list {
    animation: slidein 1000ms;

    .menu-block {
      margin-bottom: 3rem;
      ${mq[1]} {
        margin-bottom: 1rem;
      }
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
    .MuiSvgIcon-root {
      font-size: 1.9rem;
    }
    transform: scaleX(-1);
    color: ${sub};
    display: none;
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;
    padding: 1px;

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

    .button-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;
