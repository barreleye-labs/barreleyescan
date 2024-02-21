import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const DashboardCard = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  overflow: hidden;
  position: relative;
  box-shadow:
    rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  z-index: 0;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: start;

  .header {
    font-size: 14px;
    font-weight: 600;
    margin: 0px 0px 16px;
    line-height: 1.57143;
    padding: 24px 0 0 24px;
    font-family: 'Public Sans', sans-serif;
  }

  .content {
    font-size: 2rem;
    ${mq[1]} {
      font-size: 21px;
    }
    margin: 0px 0px 8px;
    font-weight: 700;
    padding: 0 24px;
    margin-top: -4px;
  }

  .footer {
    position: absolute;
    bottom: 9px;
    display: inline-flex;
    align-items: center;
    font-size: 13px;
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
    margin-left: 13px;
    &:hover {
      text-decoration: none;
      background-color: rgba(17, 25, 39, 0.04);
    }
  }
`;
