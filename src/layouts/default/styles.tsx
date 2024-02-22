import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100dvh;
  gap: 17px;
  overflow: auto;
  padding: 4rem 3rem;

  ${mq[1]} {
    padding: 2rem 1.9rem;
  }
`;
