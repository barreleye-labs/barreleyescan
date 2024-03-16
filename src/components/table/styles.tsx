import styled from '@emotion/styled';
import ITable from '@mui/material/Table';
import IBody from '@mui/material/TableBody';
import ITableContainer from '@mui/material/TableContainer';
import IHead from '@mui/material/TableHead';
import { grey, teal } from '@mui/material/colors';

const second = teal[100];
const description = grey[500];

export const Container = styled.div`
  width: 100%;
  .MuiPagination-ul {
    margin-top: 1rem;
    float: right;
  }
`;
export const TableContainer = styled(ITableContainer)`
  gap: 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  box-shadow:
    rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  align-items: center;

  td,
  th {
    .MuiSvgIcon-root {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${second};
      color: #ffffff;
    }
  }

  th {
    font-weight: 700;
  }
  .description {
    color: ${description};
  }
`;
export const TableWrapper = styled(ITable)`
  .MuiTableCell-root:nth-of-type(1) {
    padding-left: 2rem;
  }

  .MuiTableCell-root:nth-last-of-type(1) {
    padding-right: 2rem;
  }
`;
export const Head = styled(IHead)``;
export const Body = styled(IBody)`
  .MuiTableRow-root {
    animation-name: twinkle;
    animation-duration: 400ms;

    background-size: cover;
    @keyframes twinkle {
      50% {
        filter: blur(8px);
      }
    }
  }
`;
