import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 17px;
  overflow: auto;
  padding: 3.4rem 3rem;
  max-width: 1550px;
  margin: 0 auto;
  position: relative;
  ${mq[1]} {
    padding: 2rem 1rem;
  }
`;
export const CopyRight = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  width: 100%;
  color: #99a1b7;
`;
