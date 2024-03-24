import styled from '@emotion/styled';
import Row from '@mui/material/TableRow';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
export const Container = styled.div`
  ${mq[1]} {
    tbody {
      .MuiTableCell-root:nth-of-type(1) {
        width: 90px !important;
      }

      .MuiTableCell-root:nth-of-type(2) {
        width: 100px !important;
        font-size: 10px;
        word-spacing: -1px;
      }

      .MuiTableCell-root:nth-of-type(3) {
        font-size: 10px;

        p {
          margin-bottom: 3px;
        }
      }

      .MuiTableCell-root:nth-of-type(4) {
        width: 100px !important;
        font-size: 10px;
      }
      .MuiSvgIcon-root {
        width: 9px !important;
        height: 9px !important;
      }
    }
  }
`;
export const TableRow = styled(Row)`
  height: 70px;
`;
