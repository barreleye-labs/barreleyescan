import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Logo = styled.div`
  font-size: 18px;
  height: 90px;
  color: white;
  line-height: 90px;

  text-align: center;
  font-weight: 600;
  > span {
    font-weight: 100;
  }

  ${mq[1]} {
    font-size: 15px;
    height: 35px;
    color: white;
    line-height: 35px;
    text-align: center;
    font-weight: 600;
  }
`;
