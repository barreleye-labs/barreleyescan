import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  .margin-spacing {
    margin: 3px 0;
  }

  .signature-height {
    height: 120px;
  }
`;
export const DashboardTable = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      transform: translateX(4px) translateY(5px);
    }
  }
`;

export const Highlight = styled.div`
  animation-name: twinkle;
  animation-duration: 400ms;

  background-size: cover;
  @keyframes twinkle {
    50% {
      filter: blur(8px);
    }
  }

  a {
    h2 {
      color: #34b4a9 !important;
    }
  }
`;
export const Card = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  box-shadow:
    rgba(145, 158, 171, 0.08) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.08) 0px 12px 24px -4px;
  position: relative;
  z-index: 0;
  border-radius: 16px;

  .signature {
    transform: translateX(60%);
    ${mq[1]} {
      transform: translateX(10%);
    }
    span {
      color: black;
    }
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 1rem;
    img {
      width: 50px;
    }
  }

  .wrapper {
    padding: 31px 24px;
    display: flex;
    align-items: center;
    h4 {
      font-weight: 600;
      line-height: 1.57143;
      font-size: 12px;
      color: rgb(145, 158, 171);
    }
    h2 {
      color: #212b36;
      font-size: 27px;
      font-weight: 900;
      margin: 0;
      span {
        font-size: 13px;
        font-weight: 600;
        margin-left: 3px;
      }
    }

    .icon-wrapper {
      color: #34b4a9;
      background: #e5fbf8;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin-right: 16px;
      border-radius: 50%;
      box-shadow:
        rgba(95, 116, 141, 0.03) 0px 2px 1px -1px,
        rgba(95, 116, 141, 0.04) 0px 1px 1px 0px,
        rgba(95, 116, 141, 0.08) 0px 1px 3px 0px;
      .MuiSvgIcon-root {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
    }
  }

  .MuiTableCell-root {
    padding: 4px;
  }

  .MuiTableCell-root:nth-of-type(1) {
    padding-left: 5px !important;
  }

  .MuiTableCell-root:nth-last-of-type(1) {
    padding-right: 3px !important;
  }

  .dashboard-table-wrapper {
    width: 100%;
  }
  .MuiTableContainer-root {
    box-shadow: none !important;
  }
  .MuiStack-root {
    display: flex;
    align-items: center;
  }
  button {
    margin: 0 auto;
  }
  h2 {
    margin: 7px 0 0 7px;
    font-weight: 700;
    color: black;
  }
  .dashboard-content-type {
    height: 150px;

    ${mq[1]} {
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 4px;

      span {
        font-size: 14px;
        font-weight: 700;
        margin: 9px 0;
        font-family: 'Public Sans', sans-serif;
      }

      ${mq[1]} {
        padding: 0;
      }
    }

    .content {
      p {
        margin-bottom: 0;
      }
      span {
        font-size: 13px;
      }
      ${mq[1]} {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 9px;
        text-align: right;
        font-size: 37px;
      }

      font-size: 2rem;
      font-weight: 700;
      padding: 0 0;
      margin-top: -4px;
    }

    .footer {
      position: absolute;
      bottom: 9px;
      .MuiSvgIcon-root {
        font-size: 12px;
        margin-left: 3px;
      }
      .footer-button {
        display: inline-flex;
        align-items: center;
        font-weight: 600;
        justify-content: center;
        box-sizing: border-box;
        background-color: transparent;
        outline: 0px;
        border: 0px currentcolor;
        margin: 0px;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        appearance: none;
        text-decoration: none;

        font-size: 0.8125rem;
        line-height: 1.75;
        min-width: 64px;
        color: inherit;
        border-radius: 12px;
        text-transform: none;
        padding: 7px 12px;

        &:hover {
          text-decoration: none;
          background-color: rgba(17, 25, 39, 0.04);
        }
      }
    }
  }

  .dashboard-custom {
    width: 100%;
    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    padding: 1rem;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow:
      rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
      rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    border-radius: 16px;
    z-index: 0;
    display: flex;
    width: 100%;
    span {
      color: #000000 !important;
    }

    justify-content: space-around;
    padding: 1rem;
  }

  ${mq[1]} {
    .MuiButtonBase-root {
      font-size: 10px;
      padding: 2px 7px;
    }

    .MuiTableCell-root:nth-of-type(2) {
      font-size: 10px;
      word-spacing: -1px;
    }

    .blocks-table {
      tbody {
        .MuiTableCell-root:nth-of-type(3) {
          width: 30px !important;
        }
      }
    }
  }
`;
