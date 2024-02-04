import styles from '@emotion/styled';
import { pink } from '@mui/material/colors';

const second = pink[400];
const primary = pink[500];

export const Container = styles.div`
  .input-wrapper{
    display: flex;
    align-items:center;
    gap:12px;

    .MuiFormControl-root{
      width: 50%
    }
  }
  
  .MuiTypography-h5{
    font-weight: 700;
  }


  .button{
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px currentcolor;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.71429;
    text-transform: unset;
    font-family: "Public Sans", sans-serif;
    min-width: 64px;
    padding: 4px 8px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    color: rgb(255, 255, 255);
    background-color: rgb(33, 43, 54);
    height: 30px;
    font-size: 13px;

    &:hover{
      color: ${primary};
      background: ${pink[50]}
    }
  
  }
 }
`;
