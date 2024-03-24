import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;

  .MuiButton-root,
  .MuiChip-root {
    white-space: nowrap;
    border-radius: 17px;
    font-size: 12px;
    font-weight: 700;
  }

  .MuiButton-root {
    svg {
      font-size: 13px;
    }
    &:hover {
      color: #34b4a9;
      border-color: #34b4a9;
    }

    &:focus {
      color: #34b4a9;
      border: 1px solid #34b4a9;
    }
  }

  .MuiChip-root {
    height: 35.2px;
    padding: 6.4px 10.2px;
    span {
      font-weight: 700;
      color: #239b91;
    }
    svg {
      color: #34b4a9;
      transform: scaleX(-1);
      font-size: 14px;
    }
    border-color: #34b4a9;
  }

  .responsive-mobile-none {
    ${mq[1]} {
      display: none;
    }
  }
  .success {
    border-color: #b1e1dd;
    color: #34b4a9;
  }

  ${mq[1]} {
    margin-top: 39px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  > div {
    ::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    width: 85%;
    height: 100%;
    gap: 17px;
    overflow: auto;
    padding: 1rem 3rem 2.4rem 3rem;
    max-width: 1550px;
    margin: 0 auto;

    ${(mq[1], mq[3])} {
      width: 100%;
      padding: 2.4rem 1rem;
    }
  }
`;
