import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

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
    margin-top: 57px;
    padding: 0 1rem;
  }
`;
